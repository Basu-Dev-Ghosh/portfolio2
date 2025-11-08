"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

const commands = [
  { id: "home", label: "Home", action: () => window.location.href = "/" },
  { id: "about", label: "About Me", action: () => window.location.href = "/about" },
  { id: "projects", label: "View Projects", action: () => window.location.href = "/projects" },
  { id: "services", label: "Services", action: () => window.location.href = "/services" },
  { id: "contact", label: "Contact Me", action: () => window.location.href = "/contact" },
  { id: "github", label: "GitHub Profile", action: () => window.open("https://github.com/basudevghosh", "_blank") },
  { id: "linkedin", label: "LinkedIn Profile", action: () => window.open("https://www.linkedin.com/in/basudev-ghosh/", "_blank") },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to open
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // Escape to close
      if (e.key === "Escape") {
        setIsOpen(false);
      }

      // Arrow navigation
      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        }
        if (e.key === "Enter") {
          e.preventDefault();
          executeCommand(filteredCommands[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex]);

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const executeCommand = (command: typeof commands[0]) => {
    command.action();
    setIsOpen(false);
    setSearchQuery("");
    setSelectedIndex(0);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
            onClick={() => setIsOpen(false)}
          />

          {/* Command Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl z-[201]"
          >
            <div className="bg-dark-light border border-primary/30 rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-4 p-6 border-b border-gray-dark/20">
                <Search className="w-6 h-6 text-primary" />
                <input
                  type="text"
                  placeholder="Search commands..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className="flex-1 bg-transparent text-white text-lg outline-none placeholder:text-gray"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray hover:text-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Commands List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((command, index) => (
                    <motion.button
                      key={command.id}
                      onClick={() => executeCommand(command)}
                      className={`w-full text-left px-6 py-4 transition-colors ${
                        index === selectedIndex
                          ? "bg-primary/10 border-l-2 border-primary text-primary"
                          : "text-gray hover:bg-dark hover:text-white"
                      }`}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <span className="font-bebas text-lg uppercase tracking-wider">
                        {command.label}
                      </span>
                    </motion.button>
                  ))
                ) : (
                  <div className="px-6 py-12 text-center text-gray">
                    No commands found
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-dark border-t border-gray-dark/20 flex items-center justify-between text-sm text-gray">
                <div className="flex gap-4">
                  <span>
                    <kbd className="px-2 py-1 bg-dark-light rounded border border-gray-dark/30 font-mono text-xs">
                      ↑↓
                    </kbd>{" "}
                    Navigate
                  </span>
                  <span>
                    <kbd className="px-2 py-1 bg-dark-light rounded border border-gray-dark/30 font-mono text-xs">
                      Enter
                    </kbd>{" "}
                    Select
                  </span>
                  <span>
                    <kbd className="px-2 py-1 bg-dark-light rounded border border-gray-dark/30 font-mono text-xs">
                      Esc
                    </kbd>{" "}
                    Close
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
