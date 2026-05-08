import type { Translations } from '@/lib/i18n'

interface MidCtaProps {
  t: Translations
  openModal: () => void
}

export default function MidCta({ t, openModal }: MidCtaProps) {
  return (
    <section className="mid-cta">
      <h2>{t.midTitle}</h2>
      <p>{t.midBody}</p>
      <button className="btn-white" onClick={openModal}>{t.midCta}</button>
    </section>
  )
}
