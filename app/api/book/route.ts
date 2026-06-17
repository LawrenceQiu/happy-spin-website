import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const PROGRAMS: Record<string, string> = {
  individual: 'Individual (1-on-1)',
  '1on2': '1-on-2',
  'group-kids': 'Group Sessions (Saturdays)',
}

const LEVELS: Record<string, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

function esc(val: unknown): string {
  return String(val ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .slice(0, 1000)
}

export async function POST(request: Request) {
  try {
    const d = await request.json()

    const name = esc(d.name).trim()
    const phone = esc(d.phone).trim()
    const email = esc(d.email).trim()
    const childName = esc(d.childName).trim()
    const age = esc(d.age).trim()
    const message = esc(d.message).trim()

    if (!name || !phone || !email) {
      return NextResponse.json({ ok: false }, { status: 400 })
    }

    const who = d.bookingFor === 'child'
      ? `${name} (parent) — child: ${childName || '—'}`
      : name

    const program = PROGRAMS[d.program] || esc(d.program) || '—'
    const level = LEVELS[d.level] || esc(d.level) || '—'

    const html = `
<table style="font-family:sans-serif;font-size:15px;color:#111827;max-width:560px;width:100%">
  <tr><td style="padding:24px 0 8px">
    <h2 style="margin:0;color:#1B3A8C;font-size:22px">New Trial Booking Request</h2>
  </td></tr>
  <tr><td style="border-top:2px solid #E8610A;padding-top:20px">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#6B7280;width:140px">Booking for</td><td style="padding:8px 0;font-weight:600">${who}</td></tr>
      <tr><td style="padding:8px 0;color:#6B7280">Phone</td><td style="padding:8px 0;font-weight:600">${phone}</td></tr>
      <tr><td style="padding:8px 0;color:#6B7280">Email</td><td style="padding:8px 0;font-weight:600">${email}</td></tr>
      <tr><td style="padding:8px 0;color:#6B7280">Program</td><td style="padding:8px 0;font-weight:600">${program}</td></tr>
      <tr><td style="padding:8px 0;color:#6B7280">Age</td><td style="padding:8px 0;font-weight:600">${age || '—'}</td></tr>
      <tr><td style="padding:8px 0;color:#6B7280">Skill level</td><td style="padding:8px 0;font-weight:600">${level}</td></tr>
      ${message ? `<tr><td style="padding:8px 0;color:#6B7280;vertical-align:top">Notes</td><td style="padding:8px 0">${message}</td></tr>` : ''}
    </table>
  </td></tr>
  <tr><td style="padding:24px 0 0;color:#6B7280;font-size:13px">
    Sent from the Happy Spin website booking form.
  </td></tr>
</table>`

    await resend.emails.send({
      from: 'Happy Spin Bookings <bookings@happyspin.com.au>',
      to: 'happyspintt@gmail.com',
      replyTo: d.email,
      subject: `New Trial Enquiry — ${name}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Booking email error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
