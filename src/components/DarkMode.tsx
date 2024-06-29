"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const handleDarkMode = () => {
    if (theme === "dark") {
      return setTheme("light");
    }
    return setTheme("dark");
  };

  return (
    <button onClick={handleDarkMode} className="ml-auto">
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
