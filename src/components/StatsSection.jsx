"use client"
import { useEffect } from "react"

const STATS = [
  { value: "500K+", label: "Games in Database", color: "text-blue-500" },
  { value: "50+", label: "Platforms", color: "text-green-500" },
  { value: "20+", label: "Genres", color: "text-purple-500" },
  { value: "10M+", label: "User Ratings", color: "text-orange-500" },
]

export default function StatsSection() {
  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="app-card text-center hover:border-[rgb(var(--cta))]"
          >
            <div className={`text-3xl font-bold ${stat.color} p-6`}>{stat.value}</div>
            <div className="mt-[-8px] mb-6 text-sm app-subtext">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
