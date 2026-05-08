import type { Translations } from '@/lib/i18n'

interface FaqProps {
  t: Translations
  faqOpen: number | null
  setFaqOpen: (i: number | null) => void
}

export default function Faq({ t, faqOpen, setFaqOpen }: FaqProps) {
  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <div className="section-label">{t.fLabel}</div>
          <h2 className="section-title">{t.fTitle}</h2>
        </div>
        {t.faqs.map((faq, i) => (
          <div className="faq-item" key={i}>
            <button
              className="faq-q"
              onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              aria-expanded={faqOpen === i}
            >
              {faq.q}
              <div className={`faq-icon${faqOpen === i ? ' open' : ''}`}>+</div>
            </button>
            <div className={`faq-a${faqOpen === i ? ' open' : ''}`} aria-hidden={faqOpen !== i}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
