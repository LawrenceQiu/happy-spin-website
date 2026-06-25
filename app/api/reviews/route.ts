import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return NextResponse.json({ reviews: [], rating: 0, total: 0 }, { status: 500 })
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`

  const res = await fetch(url, { next: { revalidate: 3600 } })
  const data = await res.json()

  const blocked = ['chadeus']
  const apiReviews = (data.result?.reviews ?? []).filter(
    (r: { author_name: string }) => !blocked.some((name) => r.author_name.toLowerCase().includes(name.toLowerCase()))
  )

  const extra = [
    {
      author_name: 'Douglas Sum',
      rating: 5,
      text: 'Good coaches, good vibes! Thanks Coach Anthony and Jerry for bringing back my childhood hobby!',
      relative_time_description: 'a week ago',
    },
    {
      author_name: 'Yuan Ke',
      rating: 5,
      text: 'My son is learning table tennis here and is very happy with the coaching and support. The coaches are patient and encouraging, and he really enjoys every session.',
      relative_time_description: 'a week ago',
    },
  ]

  const seen = new Set(apiReviews.map((r: { author_name: string }) => r.author_name.toLowerCase()))
  const reviews = [...apiReviews, ...extra.filter((r) => !seen.has(r.author_name.toLowerCase()))]

  return NextResponse.json({
    reviews,
    rating: data.result?.rating ?? 0,
    total: data.result?.user_ratings_total ?? 0,
  })
}
