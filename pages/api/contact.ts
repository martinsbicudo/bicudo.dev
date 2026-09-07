import { NextApiRequest, NextApiResponse } from 'next'

import { Resend } from 'resend'

const CONTACT_EMAIL = 'victor.mbicudo@gmail.com'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const { name, email, message, company } = req.body ?? {}

  // Honeypot: real visitors never fill this hidden field.
  if (company) return res.status(200).json({ ok: true })

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !message.trim() ||
    !EMAIL_REGEX.test(email)
  ) {
    return res.status(400).json({ ok: false, error: 'Invalid input' })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY env var')
    return res.status(500).json({ ok: false, error: 'Server not configured' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? 'bicudo.dev <onboarding@resend.dev>',
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `New message from ${name} via bicudo.dev`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })

  if (error) {
    console.error(error)
    return res.status(502).json({ ok: false, error: 'Failed to send email' })
  }

  return res.status(200).json({ ok: true })
}

export default handler
