import type { Translations } from '@/lib/i18n'

export default function TrustBar({ t }: { t: Translations }) {
  return (
    <section className="trust-bar">
      <div className="trust-bar-grid">
        <div className="trust-card">
          <div className="trust-icon orange">🏓</div>
          <div className="trust-title">{t.trust1Title}</div>
          <div className="trust-desc">{t.trust1Desc}</div>
        </div>
        <div className="trust-card">
          <div className="trust-icon navy">⭐</div>
          <div className="trust-title">{t.trust2Title}</div>
          <div className="trust-desc">{t.trust2Desc}</div>
        </div>
        <div className="trust-card">
          <div className="trust-icon blue">👥</div>
          <div className="trust-title">{t.trust3Title}</div>
          <div className="trust-desc">{t.trust3Desc}</div>
        </div>
        <div className="trust-card">
          <div className="trust-icon orange">🏆</div>
          <div className="trust-title">{t.trust4Title}</div>
          <div className="trust-desc">{t.trust4Desc}</div>
        </div>
      </div>
    </section>
  )
}
