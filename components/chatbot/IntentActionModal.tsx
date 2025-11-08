"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

interface IntentActionModalProps {
  isOpen: boolean;
  intent: string;
  action?: {
    type: "navigate" | "form";
    target?: string;
    data?: Record<string, string>;
  };
  onClose: () => void;
  onNavigate?: () => void;
}

export default function IntentActionModal({
  isOpen,
  intent,
  action,
  onClose,
  onNavigate,
}: IntentActionModalProps) {
  const router = useRouter();

  if (!action) return null;

  const handleNavigate = () => {
    if (action.target) {
      router.push(action.target);
      onNavigate?.();
      onClose();
    }
  };

  const getIntentMessage = () => {
    switch (intent) {
      case "contact":
        return "Would you like to go to the contact page to get in touch?";
      case "projects":
        return "Would you like to see the full projects portfolio?";
      case "about":
        return "Would you like to learn more about Basudev on the About page?";
      case "services":
        return "Would you like to explore the services offered?";
      default:
        return `Would you like to navigate to ${action.target}?`;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[111] w-[90%] max-w-md"
          >
            <div className="bg-dark border-2 border-primary rounded-2xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bebas text-2xl uppercase text-primary">
                  Quick Navigation
                </h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg bg-dark-light hover:bg-red-500 transition-colors flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Message */}
              <p className="text-gray mb-6 leading-relaxed">
                {getIntentMessage()}
              </p>

              {/* Auto-filled data preview (if form) */}
              {action.type === "form" && action.data && (
                <div className="bg-dark-light rounded-xl p-4 mb-6 space-y-2">
                  <p className="text-sm text-primary font-semibold uppercase tracking-wider">
                    Pre-filled Information:
                  </p>
                  {Object.entries(action.data).map(([key, value]) => (
                    <div key={key} className="text-sm">
                      <span className="text-gray capitalize">{key}:</span>{" "}
                      <span className="text-white">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 bg-dark-light hover:bg-dark-lighter border border-gray-dark/20 rounded-xl font-bebas text-lg uppercase tracking-wider text-gray hover:text-white transition-all"
                >
                  No, Stay Here
                </button>
                <button
                  onClick={handleNavigate}
                  className="flex-1 px-6 py-3 bg-primary hover:bg-primary-dark text-dark rounded-xl font-bebas text-lg uppercase tracking-wider transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Yes, Go</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
