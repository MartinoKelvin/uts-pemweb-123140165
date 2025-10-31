"use client"

import { Search, Grid3x3, List } from "lucide-react"

export default function SearchForm({ searchQuery, onSearchChange, sortBy, onSortChange, viewMode, onViewModeChange }) {
  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-copy-secondary/50" />
        <input
          type="text"
          placeholder="Search games by title..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-border bg-card py-3 pl-10 pr-4 text-copy-primary placeholder-copy-secondary/50 transition-colors focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20"
          aria-label="Search games"
        />
      </div>

      {/* Sort and View Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 ">
          <label htmlFor="sort" className="text-sm font-medium text-copy-secondary">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="rounded-lg border border-border dark:text-white bg-card px-3 py-2 text-copy-primary transition-colors focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20"
            aria-label="Sort games by"
          >
            <option value="rating" >Rating (High to Low)</option>
            <option value="released">Release Date (Newest)</option>
          </select>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card p-1">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`rounded px-3 py-2 transition-colors ${
              viewMode === "grid"
                ? "bg-cta text-cta-text"
                : "text-copy-secondary hover:text-copy-primary"
            }`}
            aria-label="Grid view"
            aria-pressed={viewMode === "grid"}
          >
            <Grid3x3 className="h-5 w-5" />
          </button>
          <button
            onClick={() => onViewModeChange("table")}
            className={`rounded px-3 py-2 transition-colors ${
              viewMode === "table"
                ? "bg-cta text-cta-text"
                : "text-copy-secondary hover:text-copy-primary"
            }`}
            aria-label="Table view"
            aria-pressed={viewMode === "table"}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
