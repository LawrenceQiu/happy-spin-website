import type { Translations } from '@/lib/i18n'

export default function Marquee({ t }: { t: Translations }) {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <span key={i} style={{ display: 'contents' }}>
            {t.mq.map((m, j) => (
              <span className="marquee-item" key={`${i}-${j}`}>
                {j > 0 && <span className="dot-sep">◆</span>}
                {m}
              </span>
            ))}
            <span className="marquee-item"><span className="dot-sep">◆</span></span>
          </span>
        ))}
      </div>
    </div>
  )
}
