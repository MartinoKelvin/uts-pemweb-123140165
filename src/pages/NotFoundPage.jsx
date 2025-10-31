import { Link } from "react-router-dom"
import { Gamepad2, AlertCircle } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen app-background flex flex-col items-center justify-center px-4 transition-colors duration-300">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <AlertCircle className="h-24 w-24 text-red-500" />
        </div>

        <h1 className="text-5xl font-bold app-heading">404</h1>
        <h2 className="text-2xl font-semibold app-subtext">Page Not Found</h2>

        <p className="app-subtext max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-[rgb(var(--cta))] px-8 py-3 
                     text-[rgb(var(--cta-text))] font-semibold hover:bg-[rgb(var(--cta-active))] transition-colors"
        >
          <Gamepad2 className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
