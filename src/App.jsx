import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import GamesPage from "./pages/GamesPage"
import GameDetailPage from "./pages/GameDetailPage"
import NotFoundPage from "./pages/NotFoundPage"
import ContactUsPage from "./pages/ContactUsPage"
import { Contact } from "lucide-react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App() {
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
