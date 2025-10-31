"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    // init: from localStorage or system preference
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
    } else if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    // apply to <html>
    if (typeof document !== "undefined") {
      if (theme === "dark") document.documentElement.classList.add("dark")
      else document.documentElement.classList.remove("dark")
    }
    try {
      localStorage.setItem("theme", theme)
    // eslint-disable-next-line no-empty
    } catch {}
  }, [theme])

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"))

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md 
                 border border-[rgb(var(--border))] bg-[rgb(var(--card))] 
                 text-[rgb(var(--copy-secondary))] hover:bg-[rgb(var(--background))] 
                 transition-colors focus:outline-none focus:ring-2 focus:ring-[rgb(var(--cta))]/30"
    >
      {theme === "dark" ? (
         <Moon className="h-5 w-5 text-indigo-400" />
       
      ) : (
        <Sun className="h-5 w-5 text-yellow-500" />
      )}
    </button>
  )
}
