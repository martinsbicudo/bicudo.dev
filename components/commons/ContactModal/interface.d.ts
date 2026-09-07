export interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export type ContactModalStatus = 'idle' | 'submitting' | 'success' | 'error'
