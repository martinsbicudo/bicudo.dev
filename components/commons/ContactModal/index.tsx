import { Modal } from '@Commons'
import { FormEvent, useState } from 'react'
import { TbCheck, TbSend } from 'react-icons/tb'

import { ContactModalProps, ContactModalStatus } from './interface'
import * as S from './styles'

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [status, setStatus] = useState<ContactModalStatus>('idle')

  const handleClose = () => {
    onClose()
    setStatus('idle')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setStatus('error-validation')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          company: data.get('company'),
        }),
      })

      if (!response.ok) throw new Error('Request failed')

      setStatus('success')
    } catch {
      setStatus('error-server')
    }
  }

  const isLocked = status === 'submitting' || status === 'success'

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Send me an email">
      <S.Subtitle>I read every message and reply personally.</S.Subtitle>
      <S.Form onSubmit={handleSubmit} noValidate>
        <S.Field
          type="text"
          name="name"
          placeholder="Your name"
          disabled={isLocked}
        />
        <S.Field
          type="email"
          name="email"
          placeholder="Your email"
          disabled={isLocked}
        />
        <S.TextArea
          name="message"
          placeholder="Your message"
          rows={5}
          disabled={isLocked}
        />
        <S.Honeypot
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
        <S.SubmitButton
          type="submit"
          disabled={isLocked}
          $success={status === 'success'}
        >
          {status === 'success'
            ? 'Sent'
            : status === 'submitting'
              ? 'Sending...'
              : 'Send'}
          {status === 'success' ? <TbCheck /> : <TbSend />}
        </S.SubmitButton>
        {status === 'success' && (
          <S.SuccessMessage>
            Thanks for reaching out! I&apos;ll get back to you soon.
          </S.SuccessMessage>
        )}
        {status === 'error-validation' && (
          <S.ErrorMessage>
            Please fill in your name, email and message.
          </S.ErrorMessage>
        )}
        {status === 'error-server' && (
          <S.ErrorMessage>
            Something went wrong. Try again or email me directly at{' '}
            <a href="mailto:victor.mbicudo@gmail.com">
              victor.mbicudo@gmail.com
            </a>
            .
          </S.ErrorMessage>
        )}
      </S.Form>
    </Modal>
  )
}

export default ContactModal
