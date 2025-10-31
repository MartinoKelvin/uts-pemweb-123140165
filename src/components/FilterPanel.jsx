"use client"

import { Filter } from "lucide-react"

const PLATFORMS = [
  { id: "4", label: "PC" },
  { id: "187", label: "PlayStation" },
  { id: "1", label: "Xbox" },
]

export default function FilterPanel({ selectedPlatforms, onPlatformChange }) {
  return (
    <div className="app-card p-4 transition-colors duration-300">
      <div className="mb-4 flex items-center gap-2">
        <Filter className="h-5 w-5 text-[rgb(var(--cta))]" />
        <h2 className="text-lg font-semibold app-heading">Platforms</h2>
      </div>

      <div className="flex flex-wrap gap-4">
        {PLATFORMS.map(({ id, label }) => (
          <label
            key={id}
            className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 
                       border border-transparent hover:border-[rgb(var(--cta))]/50 
                       hover:bg-[rgb(var(--card))]/60 transition-colors duration-200"
          >
            <input
              type="checkbox"
              checked={selectedPlatforms.includes(id)}
              onChange={() => onPlatformChange(id)}
              className="h-4 w-4 cursor-pointer rounded border-[rgb(var(--border))] 
                         bg-[rgb(var(--card))] text-[rgb(var(--cta))] focus:ring-2 
                         focus:ring-[rgb(var(--cta))]/30 transition-colors"
              aria-label={`Filter by ${label}`}
            />
            <span className="text-sm font-medium app-subtext">{label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
