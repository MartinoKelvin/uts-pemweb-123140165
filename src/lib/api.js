const API_KEY = "bae8923c438a48e8ba19e3e7f2a1e4d4"
const BASE_URL = "https://api.rawg.io/api"

export async function fetchGames({ search = "", platforms = [], ordering = "-rating", page = 1 }) {
  try {
    let url = `${BASE_URL}/games?key=${API_KEY}&ordering=${ordering}&page_size=20&page=${page}`

    if (search) {
      url += `&search=${encodeURIComponent(search)}`
    }

    if (platforms.length > 0) {
      url += `&platforms=${platforms.join(",")}`
    }

    const response = await fetch(url)
    if (!response.ok) throw new Error("Failed to fetch games")

    const data = await response.json()
    return {
      results: data.results || [],
      count: data.count || 0,
      next: data.next || null,
      previous: data.previous || null,
    }
  } catch (error) {
    console.error("API Error:", error)
    throw error
  }
}

export async function fetchGameDetail(id) {
  try {
    const url = `${BASE_URL}/games/${id}?key=${API_KEY}`
    const response = await fetch(url)
    if (!response.ok) throw new Error("Failed to fetch game details")

    return await response.json()
  } catch (error) {
    console.error("API Error:", error)
    throw error
  }
}
