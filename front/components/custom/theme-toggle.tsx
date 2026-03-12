"use client";

import React, { useState } from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder with the exact same dimensions to prevent layout shift
    return (
      <div className="hidden md:block">
        <button className="border border-border/50 rounded-full p-2 text-transparent">
          <div className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="hidden md:block">
      <button
        className="border border-border/50 rounded-full p-2 text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {resolvedTheme === "dark" ? (
          <Sun className="h-4 w-4 hover:scale-110 transition-transform text-orange-400" />
        ) : (
          <Moon className="h-4 w-4 hover:scale-110 transition-transform text-indigo-600" />
        )}
      </button>
    </div>
  );
};
