"use client"

import { useState, useEffect } from "react"
import { Gamepad2, ChevronLeft, ChevronRight } from "lucide-react"
import SearchForm from "../components/SearchForm"
import FilterPanel from "../components/FilterPanel"
import GameGrid from "../components/GameGrid"
import GameTable from "../components/GameTable"
import LoadingState from "../components/LoadingState"
import { fetchGames } from "../lib/api"
import { Link } from "react-router-dom"

export default function GamesPage() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState([])
  const [sortBy, setSortBy] = useState("rating")
  const [viewMode, setViewMode] = useState("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalGames, setTotalGames] = useState(0)
  const [hasNextPage, setHasNextPage] = useState(false)
  const [hasPreviousPage, setHasPreviousPage] = useState(false)

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchGames({
          search: searchQuery,
          platforms: selectedPlatforms,
          ordering: sortBy === "rating" ? "-rating" : "-released",
          page: currentPage,
        })
        setGames(data.results)
        setTotalGames(data.count)
        setHasNextPage(!!data.next)
        setHasPreviousPage(!!data.previous)
      } catch (err) {
        setError(err.message || "Failed to load games")
        console.error("[v0] Error loading games:", err)
      } finally {
        setLoading(false)
      }
    }

    const timer = setTimeout(loadGames, 500)
    return () => clearTimeout(timer)
  }, [searchQuery, selectedPlatforms, sortBy, currentPage])

  const handlePlatformChange = (platformId) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId) ? prev.filter((id) => id !== platformId) : [...prev, platformId],
    )
    setCurrentPage(1) // Reset ke halaman pertama saat filter berubah
  }

  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePreviousPage = () => {
    if (hasPreviousPage) {
      setCurrentPage((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen app-background">
      {/* Header */}
     

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <FilterPanel selectedPlatforms={selectedPlatforms} onPlatformChange={handlePlatformChange} />
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 space-y-6">
            <SearchForm
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            {loading && <LoadingState />}
            {error && (
              <div className="rounded-lg border border-red-600 bg-red-900/20 p-4 text-red-400">Error: {error}</div>
            )}

            {!loading && !error && games.length === 0 && (
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 text-center text-slate-400">
                No games found. Try adjusting your search or filters.
              </div>
            )}

            {!loading &&
              !error &&
              games.length > 0 &&
              (viewMode === "grid" ? <GameGrid games={games} /> : <GameTable games={games} />)}

            {!loading && !error && games.length > 0 && (
              <div className="flex flex-col gap-4">
                {/* Pagination Info */}
                <div className="text-center text-copy-primary text-sm">
                  Page {currentPage} • Showing {games.length} games • Total: {totalGames} games
                </div>

                <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={handlePreviousPage}
                      disabled={!hasPreviousPage}
                      className="flex items-center gap-2 rounded-lg border border-[rgb(var(--border))] 
                                bg-[rgb(var(--card))] px-4 py-2 text-[rgb(var(--copy-secondary))] 
                                hover:bg-[rgb(var(--background))] hover:text-[rgb(var(--copy-primary))] 
                                transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </button>

                    <button
                      onClick={handleNextPage}
                      disabled={!hasNextPage}
                      className="flex items-center gap-2 rounded-lg border border-[rgb(var(--border))] 
                                bg-[rgb(var(--card))] px-4 py-2 text-[rgb(var(--copy-secondary))] 
                                hover:bg-[rgb(var(--background))] hover:text-[rgb(var(--copy-primary))] 
                                transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Next page"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
