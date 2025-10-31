"use client"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { ArrowLeft, Star, Calendar, Gamepad2 } from "lucide-react"
import { fetchGameDetail } from "../lib/api"

export default function GameDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // 🌗 apply theme otomatis
  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    const loadGame = async () => {
      try {
        setLoading(true)
        const data = await fetchGameDetail(id)
        setGame(data)
      } catch (err) {
        setError(err.message || "Failed to load game details")
        console.error("[v0] Error loading game detail:", err)
      } finally {
        setLoading(false)
      }
    }

    loadGame()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen app-background flex items-center justify-center">
        <div className="app-subtext">Loading...</div>
      </div>
    )
  }

  if (error || !game) {
    return (
      <div className="min-h-screen app-background">
        <header className="border-b border-[rgb(var(--border))] bg-[rgb(var(--card))]">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate("/games")}
              className="flex items-center gap-2 text-[rgb(var(--cta))] hover:text-[rgb(var(--cta-active))]"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Games
            </button>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-red-600/40 bg-red-500/10 p-4 text-red-500">
            {error || "Game not found"}
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen app-background">
      {/* Header */}
      <header className="border-b border-[rgb(var(--border))] bg-[rgb(var(--card))]/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/games")}
            className="flex items-center gap-2 text-[rgb(var(--cta))] hover:text-[rgb(var(--cta-active))] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Games
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Image */}
          <div className="lg:col-span-1">
            {game.background_image && (
              <img
                src={game.background_image || "/placeholder.svg"}
                alt={game.name}
                className="w-full rounded-lg object-cover"
              />
            )}
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold app-heading">{game.name}</h1>

              {/* Stats */}
              <div className="mt-4 flex flex-wrap gap-4">
                {game.rating && (
                  <div className="flex items-center gap-2 rounded-lg bg-[rgb(var(--card))]/70 px-4 py-2 border border-[rgb(var(--border))]">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold app-heading">{game.rating.toFixed(1)}</span>
                  </div>
                )}

                {game.released && (
                  <div className="flex items-center gap-2 rounded-lg bg-[rgb(var(--card))]/70 px-4 py-2 border border-[rgb(var(--border))]">
                    <Calendar className="h-5 w-5 text-[rgb(var(--cta))]" />
                    <span className="app-subtext">{new Date(game.released).toLocaleDateString()}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            {game.description_raw && (
              <div>
                <h2 className="text-xl font-semibold app-heading mb-2">About</h2>
                <p className="leading-relaxed app-subtext">{game.description_raw}</p>
              </div>
            )}

            {/* Genres */}
            {game.genres?.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold app-heading mb-3">Genres</h2>
                <div className="flex flex-wrap gap-2">
                  {game.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="rounded-full border border-[rgb(var(--cta))]/40 bg-[rgb(var(--cta))]/10 px-4 py-1 text-[rgb(var(--cta))]"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Platforms */}
            {game.platforms?.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold app-heading mb-3">Platforms</h2>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform) => (
                    <div
                      key={platform.platform.id}
                      className="flex items-center gap-2 rounded-lg bg-[rgb(var(--card))]/70 px-4 py-2 border border-[rgb(var(--border))]"
                    >
                      <Gamepad2 className="h-4 w-4 text-green-500" />
                      <span className="app-subtext">{platform.platform.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Screenshots */}
        {game.short_screenshots?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold app-heading mb-6">Screenshots</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {game.short_screenshots.slice(0, 6).map((screenshot, idx) => (
                <img
                  key={idx}
                  src={screenshot.image || "/placeholder.svg"}
                  alt={`Screenshot ${idx + 1}`}
                  className="w-full rounded-lg object-cover h-48"
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
