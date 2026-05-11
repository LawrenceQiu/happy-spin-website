import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const PROGRAMS: Record<string, string> = {
  individual: 'Individual (1-on-1)',
  '1on2': '1-on-2',
  'group-kids': 'Group Sessions (Kids – Saturdays)',
}

export async function POST(request: Request) {
  try {
    const d = await request.json()

    const who = d.bookingFor === 'child'
      ? `${d.name} (parent) — child: ${d.childName || '—'}`
      : d.name

    const html = `
<table style="font-family:sans-serif;font-size:15px;color:#111827;max-width:560px;width:100%">
  <tr><td style="padding:24px 0 8px">
    <h2 style="margin:0;color:#1B3A8C;font-size:22px">New Trial Booking Request</h2>
  </td></tr>
  <tr><td style="border-top:2px solid #E8610A;padding-top:20px">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#6B7280;width:140px">Booking for</td><td style="padding:8px 0;font-weight:600">${who}</td></tr>
      <tr><td style="padding:8px 0;color:#6B7280">Phone</td><td style="padding:8px 0;font-weight:600">${d.phone}</td></tr>
      <tr><td style="padding:8px 0;color:#6B7280">Email</td><td style="padding:8px 0;font-weight:600">${d.email}</td></tr>
      <tr><td style="padding:8px 0;color:#6B7280">Program</td><td style="padding:8px 0;font-weight:600">${PROGRAMS[d.program] || d.program || '—'}</td></tr>
      <tr><td style="padding:8px 0;color:#6B7280">Age</td><td style="padding:8px 0;font-weight:600">${d.age || '—'}</td></tr>
      <tr><td style="padding:8px 0;color:#6B7280">Skill level</td><td style="padding:8px 0;font-weight:600">${d.level || '—'}</td></tr>
      ${d.message ? `<tr><td style="padding:8px 0;color:#6B7280;vertical-align:top">Notes</td><td style="padding:8px 0">${d.message}</td></tr>` : ''}
    </table>
  </td></tr>
  <tr><td style="padding:24px 0 0;color:#6B7280;font-size:13px">
    Sent from the Happy Spin website booking form.
  </td></tr>
</table>`

    await resend.emails.send({
      from: 'Happy Spin Bookings <onboarding@resend.dev>',
      to: 'happyspintt@gmail.com',
      replyTo: d.email,
      subject: `New Trial Enquiry — ${d.name}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Booking email error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
