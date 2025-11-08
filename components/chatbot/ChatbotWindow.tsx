"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Minimize2, Send, Bot, User, Loader2, Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";
import IntentActionModal from "./IntentActionModal";

interface ChatbotWindowProps {
  isOpen: boolean;
  isMinimized: boolean;
  onClose: () => void;
  onMinimize: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatbotWindow({
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
}: ChatbotWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [splitWidth, setSplitWidth] = useState(50);
  const [intentModal, setIntentModal] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const mobileMessagesContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const pathname = usePathname();

  // Load conversation on mount
  useEffect(() => {
    const loadConversation = () => {
      try {
        const saved = localStorage.getItem("chatbot_conversation");
        if (saved) {
          const data = JSON.parse(saved);
          const hoursSince =
            (Date.now() - new Date(data.timestamp).getTime()) / (1000 * 60 * 60);

          if (hoursSince < 24 && data.messages) {
            setMessages(
              data.messages.map((m: any) => ({
                ...m,
                timestamp: new Date(m.timestamp),
              }))
            );
            return;
          }
        }
      } catch (error) {
        console.error("Load error:", error);
      }

      setMessages([
        {
          id: "1",
          text: "Hi! I'm Basudev's AI assistant. How can I help you today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    };

    loadConversation();
  }, []);

  // Save conversation
  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem(
          "chatbot_conversation",
          JSON.stringify({
            messages,
            timestamp: new Date().toISOString(),
            version: "1.0",
          })
        );
      } catch (error) {
        console.error("Save error:", error);
      }
    }
  }, [messages]);

  const scrollToBottom = () => {
    // Scroll desktop version
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
    // Scroll mobile version
    if (mobileMessagesContainerRef.current) {
      mobileMessagesContainerRef.current.scrollTop = mobileMessagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      scrollToBottom();
    });
  }, [messages, isTyping]);

  // Prevent body scroll when chatbot is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
        document.documentElement.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Handle wheel event to prevent scroll propagation
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const atTop = target.scrollTop === 0;
    const atBottom = target.scrollHeight - target.scrollTop === target.clientHeight;

    if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
      e.preventDefault();
    }
    e.stopPropagation();
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setIsTyping(true);

    try {
      const apiMessages = messages
        .concat(userMessage)
        .map((m) => ({
          role: m.sender === "user" ? "user" : ("assistant" as const),
          content: m.text,
        }));

      // Detect intent
      const intentRes = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "detect_intent",
          messages: apiMessages,
          currentPath: pathname,
        }),
      });

      const { intent } = await intentRes.json();

      // Generate response
      const responseRes = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "generate_response",
          messages: apiMessages,
          currentPath: pathname,
        }),
      });

      const { response } = await responseRes.json();

      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: response,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);

      // Show intent modal
      if (intent.confidence > 0.7 && intent.suggestedAction?.type !== "none") {
        setTimeout(() => {
          setIntentModal({
            intent: intent.intent,
            action: intent.suggestedAction,
          });
        }, 1000);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Sorry, I'm having trouble connecting. Please try again.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearConversation = () => {
    localStorage.removeItem("chatbot_conversation");
    setMessages([
      {
        id: "1",
        text: "Hi! I'm Basudev's AI assistant. How can I help you today?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    const newWidth = (e.clientX / window.innerWidth) * 100;
    setSplitWidth(Math.max(30, Math.min(70, newWidth)));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      {/* Desktop Split */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="hidden lg:block fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="hidden lg:block fixed top-0 right-0 bottom-0 z-[95] bg-dark border-l-2 border-primary shadow-2xl overflow-hidden"
        style={{ width: `${100 - splitWidth}%` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Resize Handle */}
        <div
          className="absolute left-0 top-0 bottom-0 w-2 cursor-col-resize bg-primary/20 hover:bg-primary/50 transition-colors group"
          onMouseDown={handleMouseDown}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-20 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-dark/20 bg-dark-lighter">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Bot className="w-6 h-6 text-dark" />
              </motion.div>
              <div>
                <h3 className="font-bebas text-xl uppercase text-white">AI Assistant</h3>
                <p className="text-xs text-gray">Powered by GPT-4o</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={clearConversation}
                className="w-10 h-10 rounded-lg bg-dark-light hover:bg-primary hover:text-dark transition-all flex items-center justify-center"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={onMinimize}
                className="w-10 h-10 rounded-lg bg-dark-light hover:bg-primary hover:text-dark transition-all flex items-center justify-center"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-lg bg-dark-light hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={messagesContainerRef}
            onWheel={handleWheel}
            className="flex-1 overflow-y-auto p-6 space-y-4 overscroll-contain"
            style={{ touchAction: 'pan-y' }}
          >
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === "bot" ? "bg-primary" : "bg-dark-light"
                  }`}
                >
                  {message.sender === "bot" ? (
                    <Bot className="w-5 h-5 text-dark" />
                  ) : (
                    <User className="w-5 h-5 text-primary" />
                  )}
                </div>

                <div
                  className={`max-w-[70%] rounded-2xl p-4 ${
                    message.sender === "bot"
                      ? "bg-dark-light text-white"
                      : "bg-primary text-dark"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  <p className="text-xs opacity-50 mt-2">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-dark" />
                </div>
                <div className="bg-dark-light rounded-2xl p-4 flex gap-1">
                  {[0, 0.2, 0.4].map((delay, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 border-t border-gray-dark/20 bg-dark-lighter">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 bg-dark-light border border-gray-dark/20 rounded-xl px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 text-dark animate-spin" />
                ) : (
                  <Send className="w-5 h-5 text-dark" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile: Full-screen */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="lg:hidden fixed inset-0 z-[95] bg-dark flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-dark/20 bg-dark-lighter">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Bot className="w-5 h-5 text-dark" />
            </motion.div>
            <div>
              <h3 className="font-bebas text-lg uppercase text-white">AI Assistant</h3>
              <p className="text-xs text-gray">Powered by GPT-4o</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={clearConversation}
              className="w-9 h-9 rounded-lg bg-dark-light hover:bg-primary hover:text-dark transition-all flex items-center justify-center"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-dark-light hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={mobileMessagesContainerRef}
          onWheel={handleWheel}
          className="flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain"
          style={{ touchAction: 'pan-y' }}
        >
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-2 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === "bot" ? "bg-primary" : "bg-dark-light"
                }`}
              >
                {message.sender === "bot" ? (
                  <Bot className="w-4 h-4 text-dark" />
                ) : (
                  <User className="w-4 h-4 text-primary" />
                )}
              </div>

              <div
                className={`max-w-[75%] rounded-2xl p-3 ${
                  message.sender === "bot"
                    ? "bg-dark-light text-white"
                    : "bg-primary text-dark"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                <p className="text-xs opacity-50 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-2"
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-dark" />
              </div>
              <div className="bg-dark-light rounded-2xl p-3 flex gap-1">
                {[0, 0.2, 0.4].map((delay, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-dark/20 bg-dark-lighter">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="flex-1 bg-dark-light border border-gray-dark/20 rounded-xl px-4 py-3 text-white placeholder:text-gray focus:outline-none focus:border-primary transition-colors disabled:opacity-50 text-sm"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 text-dark animate-spin" />
              ) : (
                <Send className="w-5 h-5 text-dark" />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Intent Modal */}
      <IntentActionModal
        isOpen={!!intentModal}
        intent={intentModal?.intent}
        action={intentModal?.action}
        onClose={() => setIntentModal(null)}
        onNavigate={onClose}
      />
    </>
  );
}
