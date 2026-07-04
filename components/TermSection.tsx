'use client'
import { useState } from 'react'
import type { Translations } from '@/lib/i18n'

interface TermSectionProps {
  t: Translations
  openModal: () => void
}

const MONTHS = [
  { name: 'July', dates: [18, 25] },
  { name: 'August', dates: [1, 8, 15, 22, 29] },
  { name: 'September', dates: [5, 12] },
]

const phases = [
  {
    num: '01',
    title: 'Warm-Up & Stretching',
    desc: 'Dynamic warm-up to get the body ready and reduce injury risk before training begins.',
  },
  {
    num: '02',
    title: 'Fundamentals Practice',
    desc: 'Forehand-to-forehand, backhand-to-backhand, and cross-court rallying to build stroke consistency and technique.',
  },
  {
    num: '03',
    title: 'Multiball Drills',
    desc: 'Targeted repetition with multiball — footwork patterns, transitions, and stroke development under realistic pressure.',
  },
  {
    num: '04',
    title: 'Match Play & Games',
    desc: 'Students rotate 1-on-1 with the coach for focused game practice. While waiting, players use other tables to compete and stay active.',
  },
]

const programDetails = [
  { label: 'Starts', value: '18 July 2026' },
  { label: 'Duration', value: '9 weeks' },
  { label: 'Day', value: 'Every Saturday' },
  { label: 'Time', value: 'TBA — based on group numbers' },
  { label: 'Group size', value: 'Max 4 students per coach' },
  { label: 'Level', value: 'All levels welcome' },
  { label: 'Location', value: '140 Mahoneys Rd, Forest Hill VIC' },
]

const bring = [
  { item: 'Table tennis racket', note: 'Spare rackets available — let us know when booking' },
  { item: 'Athletic clothing & closed-toe shoes', note: 'Comfortable, allows free movement' },
  { item: 'Water bottle', note: 'Stay hydrated throughout the session' },
]

export default function TermSection({ t, openModal }: TermSectionProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="term" id="term-program">
      <div className="term-inner">
        <div className="term-layout">

          <div className="term-text">
            <div className="term-eyebrow">{t.gtLabel}</div>
            <h2 className="term-title">{t.gtTitle}</h2>
            <p className="term-chip">{t.gtChip}</p>
            <p className="term-tagline">{t.gtTagline}</p>
            <div className="term-features">
              {([t.gtF1, t.gtF2, t.gtF3, t.gtF4] as string[]).map((f) => (
                <span key={f} className="term-feature">{f}</span>
              ))}
            </div>
            <p className="term-note">{t.gtNote}</p>
            <div className="term-actions">
              <button onClick={openModal} className="term-cta">{t.gtCta}</button>
              <button
                onClick={() => setExpanded(!expanded)}
                className="term-learn"
                aria-expanded={expanded}
              >
                {expanded ? 'Hide details ↑' : `${t.gtLearn}`}
              </button>
            </div>
          </div>

          <div className="term-cal">
            <div className="term-cal-header">
              <span className="term-cal-label">Term 3 · 2026</span>
              <span className="term-cal-sat">Every Saturday</span>
            </div>
            <div className="term-cal-body">
              {MONTHS.map(({ name, dates }, i) => (
                <div key={name} className={`term-cal-month${i < MONTHS.length - 1 ? ' term-cal-month--divider' : ''}`}>
                  <div className="term-cal-month-name">{name}</div>
                  <div className="term-cal-dates">
                    {dates.map((d) => (
                      <div key={d} className="term-cal-date">
                        <span className="term-cal-date-num">{d}</span>
                        <span className="term-cal-date-day">Sat</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="term-cal-footer">9 sessions · 1.5 hrs each</div>
          </div>

        </div>

        {/* Expandable detail section */}
        <div className={`term-expand${expanded ? ' term-expand--open' : ''}`}>
          <div className="term-expand-inner">
            <div className="term-expand-divider" />

            {/* Session structure */}
            <p className="term-expand-heading">How each session runs</p>
            <div className="term-phases">
              {phases.map((p) => (
                <div key={p.num} className="term-phase">
                  <div className="term-phase-dot">{p.num}</div>
                  <div className="term-phase-title">{p.title}</div>
                  <p className="term-phase-desc">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Details + Bring */}
            <div className="term-expand-cols">
              <div className="term-expand-box">
                <p className="term-expand-heading">Program details</p>
                {programDetails.map((d) => (
                  <div key={d.label} className="term-detail-row">
                    <span className="term-detail-label">{d.label}</span>
                    <span className="term-detail-value">{d.value}</span>
                  </div>
                ))}
              </div>
              <div className="term-expand-box">
                <p className="term-expand-heading">What to bring</p>
                {bring.map((b) => (
                  <div key={b.item} className="term-bring-item">
                    <div className="term-bring-check">✓</div>
                    <div>
                      <div className="term-bring-title">{b.item}</div>
                      <div className="term-bring-note">{b.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enrol CTA */}
            <div className="term-expand-cta">
              <p className="term-expand-cta-text">Limited spots — get in touch to secure your place for Term 3.</p>
              <button onClick={openModal} className="term-cta">Enquire Now →</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
