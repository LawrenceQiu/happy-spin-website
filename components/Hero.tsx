'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { Translations } from '@/lib/i18n'

interface HeroProps {
  t: Translations
  openModal: () => void
}

const VIDEO = '/videos/group-session.mp4'

// Chinese words end in full-width punctuation and need no space between them
const gap = (word: string) => (word.endsWith('。') ? '' : ' ')

export default function Hero({ t, openModal }: HeroProps) {
  const [showVideo, setShowVideo] = useState(false)

  // Skip video for reduced-motion or data-saver users — the navy backdrop stands in
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    if (!reduced && !saveData) setShowVideo(true)
  }, [])

  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        {showVideo && (
          <video className="hero-video" src={VIDEO} autoPlay muted loop playsInline preload="auto" />
        )}
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-logo">
          <Image
            src="/logo-mark.png"
            alt="Happy Spin Table Tennis Academy logo"
            width={595}
            height={631}
            sizes="130px"
            priority
          />
        </div>
        <div className="hero-badge">{t.heroBadge}</div>
        <h1 className="hero-title">
          {t.heroTitle1}{gap(t.heroTitle1)}{t.heroTitle2}<br />
          <span className="orange">{t.heroTitle3}</span>{gap(t.heroTitle3)}{t.heroTitle4}
        </h1>
        <p className="hero-sub">{t.heroSub}</p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={openModal}>{t.bookTrialSession}</button>
          <button
            className="btn-ghost"
            onClick={() => document.getElementById('programs')?.scrollIntoView({ block: 'start', behavior: 'smooth' })}
          >
            {t.viewPrograms}
          </button>
        </div>
        <ul className="hero-trust">
          <li>{t.trustAll}</li>
          <li>{t.trustSmall}</li>
          <li>{t.trustBeginner}</li>
        </ul>
        <p className="hero-tag">{t.chineseTag}</p>
      </div>
    </section>
  )
}
