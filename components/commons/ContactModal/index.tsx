import { Modal } from '@Commons'
import { FormEvent, useState } from 'react'

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

    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          company: data.get('company'),
        }),
      })

      if (!response.ok) throw new Error('Request failed')

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Send me an email">
      {status === 'success' ? (
        <S.SuccessMessage>
          Thanks for reaching out! I&apos;ll get back to you soon.
        </S.SuccessMessage>
      ) : (
        <S.Form onSubmit={handleSubmit}>
          <S.Field type="text" name="name" placeholder="Your name" required />
          <S.Field
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
          <S.TextArea
            name="message"
            placeholder="Your message"
            rows={5}
            required
          />
          <S.Honeypot
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
          <S.SubmitButton type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Send'}
          </S.SubmitButton>
          {status === 'error' && (
            <S.ErrorMessage>
              Something went wrong. Try again or email me directly at{' '}
              <a href="mailto:victor.mbicudo@gmail.com">
                victor.mbicudo@gmail.com
              </a>
              .
            </S.ErrorMessage>
          )}
        </S.Form>
      )}
    </Modal>
  )
}

export default ContactModal
