/* eslint-disable jsx-a11y/control-has-associated-label */
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.css'

function ModalInner({ closeHandler, children }) {
  useEffect(() => {
    const closeModalByEscape = (e) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    }

    document.addEventListener('keydown', closeModalByEscape)

    return () => {
      document.removeEventListener('keydown', closeModalByEscape)
    }
  }, [])

  return (
    <div className={styles.modalInner}>
      {children}
    </div>
  )
}

export function Modal({ isOpen, closeHandler, children }) {
  if (!isOpen) return null

  const closeModalByClickWrapper = (e) => {
    if (e.target === e.currentTarget) { closeHandler() }
  }

  return createPortal(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onMouseDown={closeModalByClickWrapper} className={styles.modalWr}>
      <ModalInner closeHandler={closeHandler}>
        {children}
      </ModalInner>
    </div>,
    document.getElementById('modal-root'),
  )
}
