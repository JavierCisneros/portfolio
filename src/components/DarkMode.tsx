"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleDarkMode = () => {
    if (theme === "dark") {
      return setTheme("light");
    }
    return setTheme("dark");
  };

  return (
    <button onClick={handleDarkMode} className="ml-auto">
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
