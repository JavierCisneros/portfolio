"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DarkMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDark = mounted && resolvedTheme === "dark";

  // Don't render anything until mounted to prevent flicker
  if (!mounted) {
    return (
      <div className="ml-auto relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200">
        <div className="h-4 w-4 rounded-full bg-white shadow-lg transform translate-x-1" />
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`ml-auto relative inline-flex h-6 w-11 items-center rounded-full outline-none ring-2 ring-markup ring-offset-2 overflow-hidden ${
        isDark ? "bg-markup" : "bg-gray-300 dark:bg-gray-700 border "
      }`}
      aria-label="Toggle dark mode"
      role="switch"
      aria-checked={isDark}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Toggle handle */}
      <motion.div
        className="relative inline-flex items-center justify-center h-4 w-4 rounded-full bg-white shadow-lg z-10"
        layout
        animate={{
          x: isDark ? 24 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        whileHover={{ scale: 1.1 }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Sun className="w-2.5 h-2.5 text-yellow-500" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Moon className="w-2.5 h-2.5 text-gray-600" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
