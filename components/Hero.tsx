import type { Translations } from '@/lib/i18n'
import Image from 'next/image'

interface HeroProps {
  t: Translations
  openModal: () => void
}

export default function Hero({ t, openModal }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">{t.heroBadge}</div>
        <h1 className="hero-title">
          {t.heroTitle1}<br />
          {t.heroTitle2}<br />
          <span className="orange">{t.heroTitle3}</span><br />
          {t.heroTitle4}
        </h1>
        <p className="hero-sub">{t.heroSub}</p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={openModal}>{t.bookTrialSession}</button>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById('programs')?.scrollIntoView({ block: 'start', behavior: 'smooth' })}
          >
            {t.viewPrograms}
          </button>
        </div>
        <div className="hero-trust">
          <div className="hero-trust-item">
            <div className="hero-trust-icon">✓</div>
            <span>{t.trustAll}</span>
          </div>
          <div className="hero-trust-item">
            <div className="hero-trust-icon">●</div>
            <span>{t.trustSmall}</span>
          </div>
          <div className="hero-trust-item">
            <div className="hero-trust-icon">★</div>
            <span>{t.trustBeginner}</span>
          </div>
        </div>
        <p style={{ marginTop: '20px', fontSize: '15px', color: 'var(--blue)', fontWeight: 600, letterSpacing: '.04em' }}>
          {t.chineseTag}
        </p>
      </div>

      <div className="hero-image-wrap">
        <Image
          src="/hero-graphic.png"
          alt="Happy Spin Table Tennis Academy"
          width={500}
          height={500}
          priority
          style={{ width: '100%', maxWidth: 500, height: 'auto' }}
        />
      </div>
    </section>
  )
}
