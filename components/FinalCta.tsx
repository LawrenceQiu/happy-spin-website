import type { Translations } from '@/lib/i18n'

interface FinalCtaProps {
  t: Translations
  openModal: () => void
}

export default function FinalCta({ t, openModal }: FinalCtaProps) {
  return (
    <section className="final-cta">
      <div className="section-label">{t.finLabel}</div>
      <h2>
        {t.finTitle1}<br />{t.finTitle2}
      </h2>
      <p style={{ marginBottom: '8px' }}>{t.finBody}</p>
      <div className="contact-line">
        <a href="tel:0433883078">📞 0433 883 078</a>
        <span style={{ color: '#D1D5DB' }}>|</span>
        <a href="mailto:happyspintt@gmail.com">✉ happyspintt@gmail.com</a>
      </div>
      <button
        className="btn-primary"
        style={{ fontSize: '18px', padding: '18px 48px' }}
        onClick={openModal}
      >
        {t.bookTrialSession}
      </button>
    </section>
  )
}
