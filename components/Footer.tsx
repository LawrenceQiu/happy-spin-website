import type { Translations } from '@/lib/i18n'
import Image from 'next/image'

interface FooterProps {
  t: Translations
  openModal: () => void
}

export default function Footer({ t, openModal }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <Image src="/logo.png" alt="Happy Spin" width={56} height={56} />
            <div className="footer-brand-text">
              <div className="name">Happy Spin</div>
              <div className="sub">Table Tennis Academy · 乐旋乒乓</div>
              <p className="tagline">{t.footTagline1}<br />{t.footTagline2}</p>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>{t.footPrograms}</h4>
          <ul>
            <li><a href="#programs">{t.footInd}</a></li>
            <li><a href="#programs">{t.foot1on2}</a></li>
            <li><a href="#programs">{t.footGroup}</a></li>
            <li><a href="#programs">{t.footHire}</a></li>
            <li><a href="#schedule">{t.footView}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t.footPolicies}</h4>
          <ul>
            <li><a href="/HappySpinCodeOfConduct.pdf" target="_blank" rel="noopener noreferrer">{t.footCoc}</a></li>
            <li><a href="/HappySpinChildSafetyPolicy.pdf" target="_blank" rel="noopener noreferrer">{t.footCsp}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t.footContact}</h4>
          <ul>
            <li><a href="tel:0433883078">📞 0433 883 078</a></li>
            <li><a href="mailto:happyspintt@gmail.com">✉ happyspintt@gmail.com</a></li>
            <li><a href="#access">{t.footHere}</a></li>
            <li><a href="#faq">{t.navFaq}</a></li>
            <li>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); openModal() }}
              >
                {t.bookTrial}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{t.footRights}</span>
        <span>{t.footMade}</span>
      </div>
    </footer>
  )
}
