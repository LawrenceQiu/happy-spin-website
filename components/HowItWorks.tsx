import type { Translations } from '@/lib/i18n'

export default function HowItWorks({ t }: { t: Translations }) {
  return (
    <section className="hiw">
      <div className="hiw-inner">
        <div className="section-label" style={{ color: 'rgba(255,255,255,.6)' }}>{t.hLabel}</div>
        <h2 className="section-title">{t.hTitle}</h2>
        <p className="section-body">{t.hBody}</p>
        <div className="hiw-steps">
          <div className="hiw-step">
            <div className="hiw-num">1</div>
            <div className="hiw-step-title">{t.h1Title}</div>
            <p className="hiw-step-desc">{t.h1Desc}</p>
          </div>
          <div className="hiw-step">
            <div className="hiw-num">2</div>
            <div className="hiw-step-title">{t.h2Title}</div>
            <p className="hiw-step-desc">{t.h2Desc}</p>
          </div>
          <div className="hiw-step">
            <div className="hiw-num">3</div>
            <div className="hiw-step-title">{t.h3Title}</div>
            <p className="hiw-step-desc">{t.h3Desc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
