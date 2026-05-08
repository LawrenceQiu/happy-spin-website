import type { Translations } from '@/lib/i18n'

export default function Coaches({ t }: { t: Translations }) {
  return (
    <section className="coaches">
      <div className="coaches-inner">
        <div className="coaches-header">
          <div className="section-label">{t.cLabel}</div>
          <h2 className="section-title">
            {t.cTitle}<br />
            <span style={{ color: 'var(--orange)' }}>{t.cTitle2}</span>
          </h2>
          <p className="section-body" style={{ margin: '14px auto 0' }}>{t.cIntro}</p>
        </div>

        <div className="coaches-grid">
          <div className="creds-card">
            <div className="creds-eyebrow">{t.credsEyebrow}</div>
            <div className="creds-title">{t.credsTitle}</div>
            <ul className="creds-list">
              <li>
                <span className="icon">🏓</span>
                <span dangerouslySetInnerHTML={{ __html: t.cred1 }} />
              </li>
              <li>
                <span className="icon">🏅</span>
                <span dangerouslySetInnerHTML={{ __html: t.cred2 }} />
              </li>
              <li>
                <span className="icon">⭐</span>
                <span dangerouslySetInnerHTML={{ __html: t.cred3 }} />
              </li>
              <li>
                <span className="icon">🎓</span>
                <span dangerouslySetInnerHTML={{ __html: t.cred4 }} />
              </li>
            </ul>
          </div>

          <div className="vibes-card">
            <div className="vibes-eyebrow">{t.vibesEyebrow}</div>
            <div className="vibes-title">
              {t.vibesTitle}<em>{t.vibesTitleEm}</em>
            </div>
            <p className="vibes-body">{t.vibesBody}</p>
            <div className="vibes-tags">
              {[t.vibesTag1, t.vibesTag2, t.vibesTag3, t.vibesTag4, t.vibesTag5].map((tag) => (
                <span key={tag} className="vibes-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
