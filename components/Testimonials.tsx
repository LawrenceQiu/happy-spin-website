'use client'
import { useEffect, useState } from 'react'
import type { Translations } from '@/lib/i18n'

interface GoogleReview {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  profile_photo_url?: string
}

interface ReviewsData {
  reviews: GoogleReview[]
  rating: number
  total: number
}

function Stars({ n }: { n: number }) {
  return (
    <div className="tcard-stars">
      {'★'.repeat(n)}{'☆'.repeat(5 - n)}
    </div>
  )
}

function Avatar({ name, photo }: { name: string; photo?: string }) {
  if (photo) {
    return <img src={photo} alt={name} className="tcard-avatar-img" referrerPolicy="no-referrer" />
  }
  const initials = (name.split(' ')[0][0] ?? '').toUpperCase()
  const palette = ['#1B3A8C', '#E8610A', '#4BA3D3', '#2D6A4F', '#7C3AED']
  const color = palette[initials.charCodeAt(0) % palette.length]
  return <div className="tcard-avatar" style={{ background: color }}>{initials}</div>
}

const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Google review">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

export default function Testimonials({ t }: { t: Translations }) {
  const [data, setData] = useState<ReviewsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="section-label">{t.tLabel}</div>
          <h2 className="section-title">{t.tTitle1}</h2>
          {data && data.rating > 0 && (
            <div className="testimonials-rating">
              <span className="tr-stars">{'★'.repeat(Math.round(data.rating))}</span>
              <span className="tr-score">{data.rating.toFixed(1)}</span>
              <span className="tr-count">{data.total} Google {data.total === 1 ? 'review' : 'reviews'}</span>
            </div>
          )}
        </div>

        <div className="testimonials-grid">
          {loading ? (
            [1, 2, 3].map((i) => <div key={i} className="tcard tcard-skeleton" />)
          ) : data?.reviews?.length ? (
            data.reviews.map((review) => (
              <div className="tcard" key={review.author_name + review.relative_time_description}>
                <div className="tcard-top">
                  <Stars n={review.rating} />
                  <GoogleLogo />
                </div>
                <p className="tcard-quote">&ldquo;{review.text}&rdquo;</p>
                <div className="tcard-author">
                  <Avatar name={review.author_name} photo={review.profile_photo_url} />
                  <div>
                    <div className="tcard-name">{review.author_name}</div>
                    <div className="tcard-role">{review.relative_time_description}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--muted)', gridColumn: '1/-1' }}>
              Be the first to leave a review!
            </p>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a
            href="https://g.page/r/CToPmHcUsjq7EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="review-cta"
          >
            ★ Enjoyed your sessions? Leave us a Google review
          </a>
        </div>
      </div>
    </section>
  )
}
