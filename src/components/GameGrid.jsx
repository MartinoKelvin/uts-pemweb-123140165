import { Link } from "react-router-dom"
import { Star, Calendar } from "lucide-react"

export default function GameGrid({ games }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {games.map((game) => (
        <Link
          key={game.id}
          to={`/games/${game.id}`}
          className="group rounded-lg border border-border bg-card/50 overflow-hidden transition-all hover:border-cta hover:shadow-lg hover:shadow-cta/20"
        >
          {/* Image */}
          <div className="relative overflow-hidden h-40 bg-card">
            {game.background_image ? (
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-card text-copy-secondary">No Image</div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            <h3 className="font-semibold text-copy-primary truncate group-hover:text-cta transition-colors">
              {game.name}
            </h3>

            {/* Rating and Date */}
            <div className="flex items-center justify-between text-sm">
              {game.rating && (
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-copy-secondary">{game.rating.toFixed(1)}</span>
                </div>
              )}
              {game.released && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-copy-secondary" />
                  <span className="text-copy-secondary">{new Date(game.released).getFullYear()}</span>
                </div>
              )}
            </div>

            {/* Platforms */}
            {game.platforms && game.platforms.length > 0 && (
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-copy-secondary">{game.platforms.map((p) => p.platform.name).join(", ")}</p>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
