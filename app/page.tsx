'use client'

import { useState, useEffect, useCallback } from 'react'
import I18N, { type Lang } from '@/lib/i18n'
import Nav from '@/components/Nav'
import MobileMenu from '@/components/MobileMenu'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import StatStrip from '@/components/StatStrip'
import TrustBar from '@/components/TrustBar'
import About from '@/components/About'
import Coaches from '@/components/Coaches'
import Testimonials from '@/components/Testimonials'
import Programs from '@/components/Programs'
import HowItWorks from '@/components/HowItWorks'
import HolidaySection from '@/components/HolidaySection'
import Schedule from '@/components/Schedule'
import Access from '@/components/Access'
import MidCta from '@/components/MidCta'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'
import MobileStickyCta from '@/components/MobileStickyCta'
import Lightbox from '@/components/Lightbox'

export default function Page() {
  const [lang, setLangState] = useState<Lang>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [formStep, setFormStep] = useState<'form' | 'success'>('form')
  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', program: '', message: '',
    bookingFor: 'myself', childName: '', age: '', level: '',
  })

  // Read language preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('hs-lang') as Lang | null
    if (saved === 'zh' || saved === 'en') setLangState(saved)
  }, [])

  // Keep <html lang> in sync
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en'
  }, [lang])

  // Close lightbox / modal on Esc
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setLightboxSrc(null)
        setModalOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Prevent body scroll when modal/menu open
  useEffect(() => {
    document.body.style.overflow = (modalOpen || menuOpen || lightboxSrc !== null) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen, menuOpen, lightboxSrc])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem('hs-lang', l)
  }, [])

  const openModal = useCallback(() => {
    setFormStep('form')
    setFormData({ name: '', phone: '', email: '', program: '', message: '', bookingFor: 'myself', childName: '', age: '', level: '' })
    setModalOpen(true)
  }, [])

  const openModalHoliday = useCallback(() => {
    setFormStep('form')
    setFormData({ name: '', phone: '', email: '', program: 'holiday', message: '', bookingFor: 'myself', childName: '', age: '', level: '' })
    setModalOpen(true)
  }, [])

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has('enquire')) {
      openModal()
    }
  }, [openModal])

  const closeModal = useCallback(() => setModalOpen(false), [])

  const openLightbox = useCallback((src: string) => setLightboxSrc(src), [])
  const closeLightbox = useCallback(() => setLightboxSrc(null), [])

  const t = I18N[lang]

  return (
    <>
      <Nav t={t} lang={lang} setLang={setLang} openModal={openModal} onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu t={t} lang={lang} setLang={setLang} open={menuOpen} onClose={() => setMenuOpen(false)} openModal={openModal} />
      <Hero t={t} openModal={openModal} />
      <Marquee t={t} />
      <StatStrip t={t} />
      <TrustBar t={t} />
      <HolidaySection t={t} openModal={openModalHoliday} />
      <About t={t} openModal={openModal} openLightbox={openLightbox} />
      <Programs t={t} openModal={openModal} />
      <HowItWorks t={t} />
      <Schedule t={t} openModal={openModal} />
      <Coaches t={t} />
      <Testimonials t={t} />
      <Access t={t} openLightbox={openLightbox} />
      <MidCta t={t} openModal={openModal} />
      <Faq t={t} faqOpen={faqOpen} setFaqOpen={setFaqOpen} />
      <FinalCta t={t} openModal={openModal} />
      <Footer t={t} openModal={openModal} />
      <MobileStickyCta t={t} openModal={openModal} />
      <BookingModal
        t={t}
        open={modalOpen}
        onClose={closeModal}
        formStep={formStep}
        setFormStep={setFormStep}
        formData={formData}
        setFormData={setFormData}
      />
      <Lightbox src={lightboxSrc} onClose={closeLightbox} />
    </>
  )
}
