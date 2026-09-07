import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { TbX } from 'react-icons/tb'

import { ModalProps } from './interface'
import * as S from './styles'

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen || !isMounted) return null

  return createPortal(
    <S.Overlay onClick={onClose}>
      <S.Content
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <S.CloseButton onClick={onClose} aria-label="Close">
          <TbX />
        </S.CloseButton>
        {title && <S.Title>{title}</S.Title>}
        {children}
      </S.Content>
    </S.Overlay>,
    document.body,
  )
}

export default Modal
