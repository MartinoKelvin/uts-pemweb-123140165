import { Link } from "react-router-dom"
import { Star } from "lucide-react"

export default function GameTable({ games }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card/50">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-card">
            <th className="px-6 py-3 text-left text-sm font-semibold text-copy-secondary">Cover</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-copy-secondary">Title</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-copy-secondary">Rating</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-copy-secondary">Release Date</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-copy-secondary">Platforms</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id} className="border-b border-border transition-colors hover:bg-card">
              <td className="px-6 py-4">
                <Link to={`/games/${game.id}`}>
                  {game.background_image ? (
                    <img
                      src={game.background_image}
                      alt={game.name}
                      className="h-12 w-12 rounded object-cover"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded bg-card flex items-center justify-center text-copy-secondary text-xs">
                      N/A
                    </div>
                  )}
                </Link>
              </td>
              <td className="px-6 py-4">
                <Link to={`/games/${game.id}`} className="font-medium text-copy-primary hover:text-cta transition-colors">
                  {game.name}
                </Link>
              </td>
              <td className="px-6 py-4">
                {game.rating ? (
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-copy-secondary">{game.rating.toFixed(1)}</span>
                  </div>
                ) : (
                  <span className="text-copy-secondary/50">N/A</span>
                )}
              </td>
              <td className="px-6 py-4 text-copy-secondary">
                {game.released ? (
                  new Date(game.released).toLocaleDateString()
                ) : (
                  <span className="text-copy-secondary/50">N/A</span>
                )}
              </td>
              <td className="px-6 py-4 text-sm text-copy-secondary">
                {game.platforms?.map((p) => p.platform.name).join(", ") || "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
