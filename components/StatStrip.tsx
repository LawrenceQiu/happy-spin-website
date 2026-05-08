import type { Translations } from '@/lib/i18n'

export default function StatStrip({ t }: { t: Translations }) {
  return (
    <section className="stat-strip">
      <div className="stat-strip-inner">
        <div className="stat-item">
          <div className="stat-num"><span className="accent">{t.stat1Num}</span></div>
          <div className="stat-label">{t.stat1Label}</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">{t.stat2Num}</div>
          <div className="stat-label">{t.stat2Label}</div>
        </div>
        <div className="stat-item">
          <div className="stat-num"><span className="accent">{t.stat3Num}</span></div>
          <div className="stat-label">{t.stat3Label}</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">{t.stat4Num}</div>
          <div className="stat-label">{t.stat4Label}</div>
        </div>
      </div>
    </section>
  )
}
