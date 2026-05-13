import type { Translations } from '@/lib/i18n'

const TESTIMONIALS = [
  { name: 'Caleb Y.', role: '', avatar: 'CY', color: '#1B3A8C', stars: 5, quote: "Lawrence has been a great coach and has really helped me improve my understanding of table tennis and match play. He's patient, encouraging and always willing to help outside of lessons as well, whether that's giving advice, organising match opportunities or helping players feel comfortable in competition environments.\n\nThe atmosphere at the club is welcoming and supportive, and you can tell there's a lot of effort going into building a good community around the sport. Really grateful for the experience so far and would definitely recommend it to players wanting to improve and enjoy their table tennis." },
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
              <div className="tcard-quote">
                {item.quote.split('\n\n').map((para, i, arr) => (
                  <p key={i} style={{ margin: i < arr.length - 1 ? '0 0 12px' : '0' }}>
                    {i === 0 && '“'}{para}{i === arr.length - 1 && '”'}
                  </p>
                ))}
              </div>
              <div className="tcard-author">
                <div className="tcard-avatar" style={{ background: item.color }}>{item.avatar}</div>
                <div>
                  <div className="tcard-name">{item.name}</div>
                  {item.role && <div className="tcard-role">{item.role}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
