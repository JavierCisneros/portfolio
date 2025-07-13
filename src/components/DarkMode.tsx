"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
    <button
      onClick={toggleTheme}
      className={`ml-auto relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-markup focus:ring-offset-2 ${
        isDark ? "bg-markup" : "bg-gray-200 dark:bg-gray-700"
      }`}
      aria-label="Toggle dark mode"
      role="switch"
      aria-checked={isDark}
    >
      <div
        className={`inline-flex items-center justify-center h-4 w-4 rounded-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          isDark ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {isDark ? (
          <Sun className="w-2.5 h-2.5 text-yellow-500" />
        ) : (
          <Moon className="w-2.5 h-2.5 text-gray-600" />
        )}
      </div>
    </button>
  );
}
