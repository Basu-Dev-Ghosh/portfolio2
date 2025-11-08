"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Minimize2, Maximize2 } from "lucide-react";
import ChatbotWindow from "./ChatbotWindow";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      {/* Floating Chatbot Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-[100] w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-full shadow-2xl hover:shadow-primary/50 flex items-center justify-center group transition-all duration-300"
            aria-label="Open chatbot"
          >
            {/* Pulse animation */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <MessageCircle className="w-8 h-8 lg:w-10 lg:h-10 text-dark relative z-10 group-hover:rotate-12 transition-transform" />

            {/* Notification Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
            >
              1
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <ChatbotWindow
            isOpen={isOpen}
            isMinimized={isMinimized}
            onClose={() => setIsOpen(false)}
            onMinimize={() => setIsMinimized(!isMinimized)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
