import type { Translations } from '@/lib/i18n'

const TESTIMONIALS = [
  { name: 'Sarah M.', role: 'Parent of two kids', avatar: 'SM', color: '#1B3A8C', stars: 5, quote: "My kids absolutely love the sessions at Happy Spin! The coaches are patient and encouraging, and I've seen a huge improvement in their confidence and focus." },
  { name: 'David T.', role: 'Adult beginner', avatar: 'DT', color: '#E8610A', stars: 5, quote: "I joined with zero experience and felt completely welcome from day one. The structured approach really works — I'm actually rallying now after just a few weeks!" },
  { name: 'Michelle L.', role: 'Parent', avatar: 'ML', color: '#4BA3D3', stars: 5, quote: "A wonderful community and genuinely skilled coaches. My son has gone from nervous beginner to asking to play every day. Can't recommend Happy Spin enough." },
]

export default function Testimonials({ t }: { t: Translations }) {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="section-label">{t.tLabel}</div>
          <h2 className="section-title">
            {t.tTitle1}{t.tTitle2 ? <><br />{t.tTitle2}</> : null}
          </h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <div className="tcard" key={item.name}>
              <div className="tcard-stars">{'★'.repeat(item.stars)}</div>
              <p className="tcard-quote">&ldquo;{item.quote}&rdquo;</p>
              <div className="tcard-author">
                <div className="tcard-avatar" style={{ background: item.color }}>{item.avatar}</div>
                <div>
                  <div className="tcard-name">{item.name}</div>
                  <div className="tcard-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
