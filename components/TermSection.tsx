import type { Translations } from '@/lib/i18n'
import Link from 'next/link'

interface TermSectionProps {
  t: Translations
  openModal: () => void
}

const MONTHS = [
  { name: 'July', dates: [18, 25] },
  { name: 'August', dates: [1, 8, 15, 22, 29] },
  { name: 'September', dates: [5, 12] },
]

export default function TermSection({ t, openModal }: TermSectionProps) {
  return (
    <section className="term" id="term-program">
      <div className="term-inner">
        <div className="term-layout">

          <div className="term-text">
            <div className="term-eyebrow">{t.gtLabel}</div>
            <h2 className="term-title">{t.gtTitle}</h2>
            <p className="term-tagline">{t.gtTagline}</p>
            <div className="term-features">
              {([t.gtF1, t.gtF2, t.gtF3, t.gtF4] as string[]).map((f) => (
                <span key={f} className="term-feature">{f}</span>
              ))}
            </div>
            <p className="term-note">{t.gtNote}</p>
            <div className="term-actions">
              <button onClick={openModal} className="term-cta">{t.gtCta}</button>
              <Link href="/group-sessions" className="term-learn">{t.gtLearn}</Link>
            </div>
          </div>

          <div className="term-cal">
            <div className="term-cal-header">
              <span className="term-cal-label">Term 3 · 2026</span>
              <span className="term-cal-sat">Every Saturday</span>
            </div>
            <div className="term-cal-body">
              {MONTHS.map(({ name, dates }, i) => (
                <div key={name} className={`term-cal-month${i < MONTHS.length - 1 ? ' term-cal-month--divider' : ''}`}>
                  <div className="term-cal-month-name">{name}</div>
                  <div className="term-cal-dates">
                    {dates.map((d) => (
                      <div key={d} className="term-cal-date">
                        <span className="term-cal-date-num">{d}</span>
                        <span className="term-cal-date-day">Sat</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="term-cal-footer">9 sessions · 1.5 hrs each</div>
          </div>

        </div>
      </div>
    </section>
  )
}
