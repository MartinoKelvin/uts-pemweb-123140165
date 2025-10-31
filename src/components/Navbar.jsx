"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Gamepad2, Menu, X } from "lucide-react"
import ThemeToggle from "../components/ThemeToggle"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="border-b border-[rgb(var(--border))] bg-[rgb(var(--card))]/95 backdrop-blur sticky top-0 z-50 transition-colors duration-300 font-semibold">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-2xl font-bold text-[rgb(var(--copy-primary))] transition-colors"
          >
            <img src="Martino-GameDB.png" alt="logo Martino GameDB" className="h-16 w-16 text-[rgb(var(--cta))]" />
         
           Martino GameDB
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/"
              className="app-subtext hover:text-[rgb(var(--copy-primary))] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/games"
              className="app-subtext hover:text-[rgb(var(--copy-primary))] transition-colors"
            >
              Games
            </Link>
            <Link
              to="/contact"
              className="app-subtext hover:text-[rgb(var(--copy-primary))] transition-colors"
            >
              Contact Us
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-[rgb(var(--border))] 
                       bg-[rgb(var(--card))] p-2 text-[rgb(var(--copy-primary))] 
                       hover:bg-[rgb(var(--background))] transition-colors"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3 border-t border-[rgb(var(--border))] pt-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="app-subtext hover:text-[rgb(var(--copy-primary))] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/games"
              onClick={closeMenu}
              className="app-subtext hover:text-[rgb(var(--copy-primary))] transition-colors"
            >
              Games
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="app-subtext hover:text-[rgb(var(--copy-primary))] transition-colors"
            >
              Contact Us
            </Link>
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
