"use client";

import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { Moon, Sun } from "lucide-react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const themeCookie = getCookie("theme");
    const isDarkMode = themeCookie === "true";
    setDarkMode(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleDarkMode = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    setCookie("theme", newTheme.toString());

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button onClick={handleDarkMode} className="ml-auto">
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
}
