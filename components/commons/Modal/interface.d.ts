import { ReactNode } from 'react'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  eyebrow?: string
  title?: string
  children: ReactNode
}
