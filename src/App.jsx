import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import GamesPage from "./pages/GamesPage"
import GameDetailPage from "./pages/GameDetailPage"
import NotFoundPage from "./pages/NotFoundPage"
import ContactUsPage from "./pages/ContactUsPage"
import { Contact } from "lucide-react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LoadingScreen from "./components/LoadingScreen"
import { useState, useEffect } from "react"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // simulasi loading 2 detik
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen /> // tampilkan logo berputar dulu
  }
  return (
    <BrowserRouter>
    <div className="app-background min-h-screen flex flex-col">
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:id" element={<GameDetailPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  )
}
