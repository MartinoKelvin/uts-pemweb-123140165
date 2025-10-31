import HeroSection from "../components/HeroSection"
import StatsSection from "../components/StatsSection"
import FeaturesSection from "../components/FeaturesSection"
import Footer from "../components/Footer"

export default function LandingPage() {
  return (
    <main className="app-background min-h-screen transition-colors duration-300">
     
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
  
    </main>
  )
}
