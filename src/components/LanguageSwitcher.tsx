"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // Check if we're on a Spanish route
  const isSpanish = pathname.startsWith("/es");

  // Get the current path without language prefix
  const currentPath = isSpanish ? pathname.replace("/es", "") : pathname;

  // Create the opposite language URL
  const oppositeUrl = isSpanish ? currentPath || "/" : `/es${currentPath}`;

  return (
    <div className="flex items-center space-x-2">
      <Link
        href={currentPath || "/"}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          !isSpanish
            ? "bg-markup text-white"
            : "bg-muted text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </Link>
      <Link
        href={oppositeUrl}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          isSpanish
            ? "bg-markup text-white"
            : "bg-muted text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </Link>
    </div>
  );
}
