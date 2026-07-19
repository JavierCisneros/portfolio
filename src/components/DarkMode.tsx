"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme !== "light" : true;
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
      aria-label={`Switch to ${nextTheme} theme`}
      suppressHydrationWarning
    >
      {mounted ? (isDark ? "Light" : "Dark") : "Theme"}
    </button>
  );
}
