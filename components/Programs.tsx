import type { Translations } from '@/lib/i18n'

interface ProgramsProps {
  t: Translations
  openModal: () => void
}

export default function Programs({ t, openModal }: ProgramsProps) {
  const agePill = (label: string) => (
    <span key={label} style={{ background: 'var(--section-alt)', color: 'var(--navy)', fontSize: '13px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px' }}>
      {label}
    </span>
  )

  return (
    <section className="programs" id="programs">
      <div className="programs-inner">
        <div className="programs-header">
          <div className="section-label">{t.pLabel}</div>
          <h2 className="section-title">{t.pTitle}</h2>
          <p className="section-body" style={{ margin: '14px auto 0' }}>{t.pBody}</p>
        </div>

        <div className="programs-grid" style={{ maxWidth: '1060px', margin: '0 auto' }}>
          {/* Individual — featured */}
          <div className="pcard featured">
            <div className="pcard-badge">{t.pAllAges}</div>
            <div className="pcard-icon">🏓</div>
            <div className="pcard-title">{t.p1Title}</div>
            <div className="pcard-subtitle">{t.p1Sub}</div>
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '13px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '6px' }}>{t.pAge}</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[t.pKids, t.pTeens, t.pAdults].map(agePill)}
              </div>
            </div>
            <ul className="pcard-features">
              {[t.p1F1, t.p1F2, t.p1F3, t.p1F4, t.p1F5].map((f) => <li key={f}>{f}</li>)}
            </ul>
            <button className="pcard-cta" onClick={openModal}>{t.bookTrial}</button>
          </div>

          {/* 1-on-2 */}
          <div className="pcard">
            <div className="pcard-badge">{t.pAllAges}</div>
            <div className="pcard-icon">🤝</div>
            <div className="pcard-title">{t.p2Title}</div>
            <div className="pcard-subtitle">{t.p2Sub}</div>
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '13px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '6px' }}>{t.pAge}</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[t.pKids, t.pTeens, t.pAdults].map(agePill)}
              </div>
            </div>
            <ul className="pcard-features">
              {[t.p2F1, t.p2F2, t.p2F3, t.p2F4, t.p2F5].map((f) => <li key={f}>{f}</li>)}
            </ul>
            <button className="pcard-cta" onClick={openModal}>{t.bookTrial}</button>
          </div>

          {/* Group (Kids) */}
          <div className="pcard">
            <div className="pcard-badge">{t.pKidsTeens}</div>
            <div className="pcard-icon">🧒</div>
            <div className="pcard-title">{t.p3Title}</div>
            <div className="pcard-subtitle">{t.p3Sub}</div>
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '13px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '6px' }}>{t.pAge}</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[t.pKids, t.pTeens].map(agePill)}
              </div>
            </div>
            <ul className="pcard-features">
              {[t.p3F1, t.p3F2, t.p3F3, t.p3F4, t.p3F5].map((f) => <li key={f}>{f}</li>)}
            </ul>
            <button className="pcard-cta" onClick={openModal}>{t.bookTrial}</button>
          </div>
        </div>

        {/* Table Hire — below coaching grid */}
        <div style={{ maxWidth: '1060px', margin: '20px auto 0', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid rgba(27,58,140,0.1)', padding: '28px 32px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ fontSize: '2.2rem', lineHeight: 1 }}>🏓</div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '.04em' }}>{t.p4Title}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '3px' }}>{t.p4Sub}</div>
            <p style={{ margin: '10px 0 0', fontSize: '0.95rem', color: 'var(--dark)', lineHeight: 1.5 }}>{t.p4Desc}</p>
          </div>
          <a href="tel:0433883078" style={{ display: 'inline-block', background: 'var(--section-alt)', color: 'var(--navy)', fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1rem', padding: '13px 24px', borderRadius: '10px', textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: '.02em' }}>{t.p4Cta}</a>
        </div>
      </div>
    </section>
  )
}
