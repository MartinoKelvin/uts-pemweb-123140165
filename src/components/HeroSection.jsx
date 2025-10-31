import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold app-heading sm:text-6xl text-balance">
            Discover Your Next Favorite Game
          </h1>
          <p className="mx-auto max-w-2xl text-xl app-subtext">
            Search through thousands of games, filter by platform, and find detailed information about ratings, genres,
            and screenshots.
          </p>
        </div>

        <Link
          to="/games"
          className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-[rgb(var(--cta-text))] 
                     bg-[rgb(var(--cta))] hover:bg-[rgb(var(--cta-active))] transition-all hover:gap-3"
        >
          Start Exploring
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
