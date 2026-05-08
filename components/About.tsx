import type { Translations } from '@/lib/i18n'
import Image from 'next/image'

interface AboutProps {
  t: Translations
  openModal: () => void
  openLightbox: (src: string) => void
}

export default function About({ t, openModal, openLightbox }: AboutProps) {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div>
          <div className="section-label">{t.aboutLabel}</div>
          <h2 className="section-title">
            {t.aboutTitle1}<br />
            {t.aboutTitle2}<br />
            <span style={{ color: 'var(--orange)' }}>{t.aboutTitle3}</span>
          </h2>
          <p className="section-body">{t.aboutBody}</p>
          <ul className="about-list">
            <li>{t.aboutLi1}</li>
            <li>{t.aboutLi2}</li>
            <li>{t.aboutLi3}</li>
            <li>{t.aboutLi4}</li>
            <li>{t.aboutLi5}</li>
          </ul>
          <div style={{ marginTop: '32px' }}>
            <button className="btn-primary" onClick={openModal}>{t.aboutCta}</button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            className="photo-hover-wrap"
            style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(27,58,140,.12)', cursor: 'zoom-in' }}
            onClick={() => openLightbox('/tables-1.jpg')}
          >
            <Image
              src="/tables-1.jpg"
              alt="Happy Spin table tennis hall"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div
            className="photo-hover-wrap"
            style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(27,58,140,.12)', cursor: 'zoom-in' }}
            onClick={() => openLightbox('/tables-2.jpg')}
          >
            <Image
              src="/tables-2.jpg"
              alt="Happy Spin table tennis hall"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
