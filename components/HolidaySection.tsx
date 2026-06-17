import type { Translations } from '@/lib/i18n'

const DATES = [
  { day: 'Tuesday', num: '30', month: 'June' },
  { day: 'Thursday', num: '2', month: 'July' },
  { day: 'Saturday', num: '4', month: 'July' },
]

interface HolidaySectionProps {
  t: Translations
  openModal: () => void
}

export default function HolidaySection({ t, openModal }: HolidaySectionProps) {
  return (
    <section className="holiday" id="holiday-program">
      <div className="holiday-inner">
        <div className="holiday-layout">

          <div className="holiday-text">
            <div className="holiday-eyebrow">{t.hpLabel}</div>
            <h2 className="holiday-title">{t.hpTitle}</h2>
            <p className="holiday-tagline">{t.hpTagline}</p>
            <div className="holiday-chips">
              <span className="holiday-chip">⏰ {t.hpTime}</span>
              <span className="holiday-chip">🏓 {t.hpLevel}</span>
              <span className="holiday-chip">💰 {t.hpPrice}</span>
            </div>
            <div className="holiday-features">
              {([t.hpF1, t.hpF2, t.hpF3, t.hpF4] as string[]).map((f) => (
                <span key={f} className="holiday-feature">{f}</span>
              ))}
            </div>
            <p className="holiday-note">{t.hpNote}</p>
            <div className="holiday-actions">
              <button onClick={openModal} className="holiday-cta">{t.hpCta}</button>
              <a href="tel:0433883078" className="holiday-phone">Or call 0433 883 078</a>
            </div>
          </div>

          <div className="holiday-card">
            <div className="holiday-card-header">School Holidays 2026</div>
            <div className="holiday-card-dates">
              {DATES.map(({ day, num, month }) => (
                <div key={num + month} className="hcd-row">
                  <span className="hcd-day">{day}</span>
                  <span className="hcd-num">{num}</span>
                  <span className="hcd-month">{month}</span>
                </div>
              ))}
            </div>
            <div className="holiday-card-time">4:00 PM – 6:00 PM each day</div>
          </div>

        </div>
      </div>
    </section>
  )
}
