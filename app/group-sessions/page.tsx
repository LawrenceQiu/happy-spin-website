import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kids\' Group Sessions — Term 3 2026 | Happy Spin Table Tennis',
  description: 'Join our 9-week kids\' group training term starting 18 July 2026. Small groups, multiball drills, match play, and dedicated coaching every Saturday in Forest Hill.',
}

const phases = [
  {
    num: '01',
    title: 'Warm-Up & Stretching',
    desc: 'Every session starts with a dynamic warm-up to get the body ready and reduce injury risk.',
  },
  {
    num: '02',
    title: 'Fundamentals Practice',
    desc: 'Forehand to forehand, backhand to backhand, cross-court rallying — building consistency and stroke mechanics.',
  },
  {
    num: '03',
    title: 'Multiball Drills',
    desc: 'Targeted repetition with multiball training — footwork patterns, transitions, and stroke development under pressure.',
  },
  {
    num: '04',
    title: 'Match Play & Games',
    desc: 'Students rotate 1-on-1 with the coach for focused game practice. While waiting, players use spare tables to compete and help pick up balls — keeping everyone active.',
  },
]

const details = [
  { label: 'Starts', value: '18 July 2026' },
  { label: 'Duration', value: '9 weeks' },
  { label: 'Day', value: 'Every Saturday' },
  { label: 'Time', value: 'TBA — based on group numbers' },
  { label: 'Group size', value: 'Max 4 students per coach' },
  { label: 'Level', value: 'All levels welcome' },
  { label: 'Location', value: '140 Mahoneys Rd, Forest Hill VIC' },
]

const bring = [
  { item: 'Table tennis racket', note: 'Spare rackets available if needed — let us know when booking' },
  { item: 'Athletic clothing', note: 'Comfortable, allows free movement' },
  { item: 'Closed-toe shoes', note: 'Court or sports shoes — no thongs or sandals' },
  { item: 'Water bottle', note: 'Stay hydrated throughout the session' },
]

export default function GroupSessionsPage() {
  return (
    <>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(140deg, #1B3A8C 0%, #0f2460 100%)',
        padding: '80px 5vw 72px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block', background: '#E8610A', color: 'white',
            borderRadius: '50px', padding: '6px 18px', fontSize: '11px', fontWeight: 700,
            letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '20px',
          }}>
            Term 3 · 2026
          </div>
          <h1 style={{
            fontFamily: 'var(--font-barlow-condensed), "Barlow Condensed", sans-serif',
            fontSize: 'clamp(48px, 7vw, 72px)', fontWeight: 900, color: 'white',
            letterSpacing: '-.02em', lineHeight: 1, margin: '0 0 16px',
          }}>
            Kids&apos; Group Sessions
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,.75)', fontWeight: 500, margin: '0 0 12px' }}>
            Structured coaching in a small, fun group environment
          </p>
          <p style={{ fontSize: '15px', color: '#E8610A', fontWeight: 700, margin: '0 0 36px' }}>
            Starting 18 July 2026 · 9 Weeks · Every Saturday
          </p>
          <Link
            href="/?enquire=1"
            style={{
              display: 'inline-block', background: '#E8610A', color: 'white',
              borderRadius: '50px', padding: '14px 36px', fontSize: '16px',
              fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(232,97,10,.45)',
            }}
          >
            Enquire Now
          </Link>
        </div>
      </section>

      {/* How each session runs */}
      <section style={{ padding: '80px 5vw', background: 'white' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
            color: '#E8610A', marginBottom: '10px',
          }}>
            Session Structure
          </p>
          <h2 style={{
            fontFamily: 'var(--font-barlow-condensed), "Barlow Condensed", sans-serif',
            fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, color: '#1B3A8C',
            letterSpacing: '-.02em', margin: '0 0 48px',
          }}>
            What happens each week
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {phases.map((p) => (
              <div key={p.num} style={{
                background: '#F8F9FF', borderRadius: '16px', padding: '28px',
                borderTop: '3px solid #E8610A',
              }}>
                <div style={{
                  fontFamily: 'var(--font-barlow-condensed), "Barlow Condensed", sans-serif',
                  fontSize: '42px', fontWeight: 900, color: '#EEF0F8', lineHeight: 1, marginBottom: '12px',
                }}>
                  {p.num}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1B3A8C', margin: '0 0 8px' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program details + What to bring */}
      <section style={{ padding: '0 5vw 80px', background: 'white' }}>
        <div style={{
          maxWidth: '860px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px',
        }}>
          {/* Program details */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-barlow-condensed), "Barlow Condensed", sans-serif',
              fontSize: '28px', fontWeight: 900, color: '#1B3A8C', margin: '0 0 20px',
            }}>
              Program Details
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {details.map((d) => (
                <div key={d.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  borderBottom: '1px solid #EEF0F8', paddingBottom: '12px', gap: '16px',
                }}>
                  <span style={{ fontSize: '14px', color: '#6B7280', whiteSpace: 'nowrap' }}>{d.label}</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827', textAlign: 'right' }}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to bring */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-barlow-condensed), "Barlow Condensed", sans-serif',
              fontSize: '28px', fontWeight: 900, color: '#1B3A8C', margin: '0 0 20px',
            }}>
              What to Bring
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {bring.map((b) => (
                <div key={b.item} style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: '#E8610A', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#111827' }}>{b.item}</div>
                    <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>{b.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to enrol */}
      <section style={{
        padding: '64px 5vw', background: '#F8F9FF', textAlign: 'center',
      }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-barlow-condensed), "Barlow Condensed", sans-serif',
            fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, color: '#1B3A8C', margin: '0 0 16px',
          }}>
            How to Enrol
          </h2>
          <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.6, margin: '0 0 32px' }}>
            Fill out our enquiry form and we&apos;ll get back to you within 24 hours to confirm your spot and session time. Spots are limited so get in early.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link
              href="/?enquire=1"
              style={{
                display: 'inline-block', background: '#E8610A', color: 'white',
                borderRadius: '50px', padding: '14px 36px', fontSize: '16px',
                fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(232,97,10,.35)',
              }}
            >
              Enquire Now
            </Link>
            <a href="tel:0433883078" style={{ color: '#1B3A8C', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>
              or call 0433 883 078
            </a>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div style={{ padding: '28px 5vw', background: 'white', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>
          ← Back to Happy Spin
        </Link>
      </div>
    </>
  )
}
