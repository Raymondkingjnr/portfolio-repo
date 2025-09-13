"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
      type="button"
      className="w-16 h-8 flex items-center rounded-full bg-gray-200 dark:bg-gray-700 p-1 transition-colors relative"
    >
      <span
        className={`absolute left-1 top-1 w-7 h-6 rounded-full flex items-center justify-center transition-transform duration-300 bg-white dark:bg-[#171717] shadow
          ${isDark ? "translate-x-7" : "translate-x-0"}`}
      >
        {isDark ?
          <Sun size={18} className="text-white" />
        : <Moon size={18} className="text-gray-700" />}
      </span>
    </button>
  );
};

export default DarkModeToggle;
