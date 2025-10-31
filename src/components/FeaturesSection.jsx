import { Search, Filter, TrendingUp } from "lucide-react"

const FEATURES = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Search for games by name and find exactly what you're looking for with instant results.",
    color: "text-blue-500",
  },
  {
    icon: Filter,
    title: "Platform Filters",
    description: "Filter games by PC, PlayStation, Xbox and other platforms to match your device.",
    color: "text-green-500",
  },
  {
    icon: TrendingUp,
    title: "Detailed Info",
    description: "View ratings, release dates, genres, and screenshots for every game in our database.",
    color: "text-purple-500",
  },
]

export default function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold app-heading mb-12 text-center">Why Choose Martino GameDB?</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {FEATURES.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="app-card p-6 hover:border-[rgb(var(--cta))] transition-all"
            >
              <Icon className={`mb-4 h-8 w-8 ${feature.color}`} />
              <h3 className="text-lg font-semibold app-heading">{feature.title}</h3>
              <p className="mt-2 app-subtext">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
