import { Gamepad2 } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--card))]/50 py-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-[rgb(var(--copy-primary))] mb-4">
            <img src="Martino-GameDB.png" alt="logo Martino GameDB" className="h-16 w-16 text-[rgb(var(--cta))]" />
              
              Martino GameDB
            </div>
            <p className="text-[rgb(var(--copy-secondary))] leading-relaxed">
              Your ultimate destination for game information, reviews, and recommendations.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[rgb(var(--copy-primary))] font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/games" className="text-[rgb(var(--copy-secondary))] hover:text-[rgb(var(--copy-primary))] transition-colors">Games</Link></li>
              <li><Link to="/genres" className="text-[rgb(var(--copy-secondary))] hover:text-[rgb(var(--copy-primary))] transition-colors">Genres</Link></li>
              <li><Link to="/platforms" className="text-[rgb(var(--copy-secondary))] hover:text-[rgb(var(--copy-primary))] transition-colors">Platforms</Link></li>
              <li><Link to="/trending" className="text-[rgb(var(--copy-secondary))] hover:text-[rgb(var(--copy-primary))] transition-colors">Trending</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-[rgb(var(--copy-primary))] font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/reviews" className="text-[rgb(var(--copy-secondary))] hover:text-[rgb(var(--copy-primary))] transition-colors">Reviews</Link></li>
              <li><Link to="/forums" className="text-[rgb(var(--copy-secondary))] hover:text-[rgb(var(--copy-primary))] transition-colors">Forums</Link></li>
              <li><Link to="/events" className="text-[rgb(var(--copy-secondary))] hover:text-[rgb(var(--copy-primary))] transition-colors">Events</Link></li>
              <li><Link to="/blog" className="text-[rgb(var(--copy-secondary))] hover:text-[rgb(var(--copy-primary))] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[rgb(var(--copy-primary))] font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-[rgb(var(--copy-secondary))] hover:text-[rgb(var(--copy-primary))] transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-[rgb(var(--copy-secondary))] hover:text-[rgb(var(--copy-primary))] transition-colors">FAQ</Link></li>
              <li><Link to="/help" className="text-[rgb(var(--copy-secondary))] hover:text-[rgb(var(--copy-primary))] transition-colors">Help Center</Link></li>
              <li><Link to="/privacy" className="text-[rgb(var(--copy-secondary))] hover:text-[rgb(var(--copy-primary))] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-[rgb(var(--border))] text-center">
          <p className="text-[rgb(var(--copy-secondary))]">
            Powered by{" "}
            <a
              href="https://rawg.io"
              className="text-[rgb(var(--cta))] hover:text-[rgb(var(--cta-active))] transition-colors"
            >
              RAWG Video Games Database
            </a>
          </p>
          <p className="text-[rgb(var(--copy-secondary))]/75 text-sm mt-2">
            © 2025 GameDB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
