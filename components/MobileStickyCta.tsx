import type { Translations } from '@/lib/i18n'

interface MobileStickyCtaProps {
  t: Translations
  openModal: () => void
}

export default function MobileStickyCta({ t, openModal }: MobileStickyCtaProps) {
  return (
    <div className="mobile-sticky-cta">
      <button className="btn-primary" onClick={openModal}>{t.stickyCta}</button>
    </div>
  )
}
