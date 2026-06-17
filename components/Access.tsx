import type { Translations } from '@/lib/i18n'
import Image from 'next/image'

interface AccessProps {
  t: Translations
  openLightbox: (src: string) => void
}

export default function Access({ t, openLightbox }: AccessProps) {
  return (
    <section className="access" id="access">
      <div className="access-inner">
        <div>
          <div className="section-label">{t.aLabel}</div>
          <h2 className="section-title">
            {t.aTitle1}<br />{t.aTitle2}
          </h2>
          <p className="section-body" style={{ marginBottom: '28px' }}>{t.aBody}</p>

          <div className="access-address">
            <div className="access-address-icon">📍</div>
            <div className="access-address-text">
              <div className="label">{t.aAddr}</div>
              <div className="value">{t.aAddrVal1}<br />{t.aAddrVal2}</div>
            </div>
          </div>

          <div className="access-routes">
            <div className="access-route">
              <div className="access-route-num">A</div>
              <div>
                <div className="access-route-title">{t.aR1Title}</div>
                <div className="access-route-desc">{t.aR1Desc}</div>
              </div>
            </div>
            <div className="access-route">
              <div className="access-route-num" style={{ background: 'var(--blue)' }}>B</div>
              <div>
                <div className="access-route-title">{t.aR2Title}</div>
                <div className="access-route-desc">{t.aR2Desc}</div>
              </div>
            </div>
          </div>

          <a
            className="access-maps-btn"
            href="https://www.google.com/maps/place/Happy+Spin+Table+Tennis+Academy/data=!4m2!3m1!1s0x0:0xbb3ab21477980f3a"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.aMaps}
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="access-photo">
            <div
              className="photo-hover-wrap"
              style={{ cursor: 'zoom-in' }}
              onClick={() => openLightbox('/building.jpg')}
            >
              <Image
                src="/building.jpg"
                alt="Happy Spin building at Mahoneys Reserve"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div style={{ padding: '14px 18px', background: 'var(--section-alt)', borderTop: '2px solid #E5E7EB' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '3px' }}>
                {t.aPhoto1Title}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{t.aPhoto1Desc}</div>
            </div>
          </div>

          <div className="access-photo">
            <div
              className="photo-hover-wrap"
              style={{ cursor: 'zoom-in' }}
              onClick={() => openLightbox('/site-map.png')}
            >
              <Image
                src="/site-map.png"
                alt="Satellite view of Mahoneys Reserve, Forest Hill"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div style={{ padding: '14px 18px', background: 'var(--section-alt)', borderTop: '2px solid #E5E7EB' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '3px' }}>
                {t.aPhoto2Title}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{t.aPhoto2Desc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
