/* eslint-disable max-len */
import styles from './modalErrorInner.module.css'

export function ModalErrorInner({
  closeErrorModalHandler,
}) {
  const closeHandler = () => {
    closeErrorModalHandler()
  }
  const closeModalByClickX = () => closeHandler()

  return (
    <>
      {' '}
      <div className={styles.modalHeader}>
        <p>Ошибка</p>
        <button
          onClick={closeModalByClickX}
          className={styles.closeXBtn}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.40385 0.696495C1.59911 0.501233 1.91569 0.501233 2.11095 0.696495L6.00016 4.5857L9.88921 0.696646C10.0845 0.501384 10.4011 0.501384 10.5963 0.696646L11.3034 1.40375C11.4987 1.59902 11.4987 1.9156 11.3034 2.11086L7.41437 5.99991L11.3033 9.88888C11.4986 10.0841 11.4986 10.4007 11.3033 10.596L10.5962 11.3031C10.401 11.4984 10.0844 11.4984 9.88913 11.3031L6.00016 7.41413L2.11103 11.3032C1.91577 11.4985 1.59919 11.4985 1.40393 11.3032L0.69682 10.5961C0.501558 10.4009 0.501558 10.0843 0.69682 9.88904L4.58594 5.99991L0.696739 2.11071C0.501477 1.91545 0.501477 1.59886 0.696739 1.4036L1.40385 0.696495Z" fill="#B3B3B3" />
          </svg>

        </button>
      </div>

      <div className={styles.contentWr}>
        <div className={styles.iconDecor}>
          <div className={styles.iconPredifined}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.9998 0.799805C9.4014 0.799805 0.799805 9.40141 0.799805 19.9998C0.799805 30.5982 9.4014 39.1998 19.9998 39.1998C30.5982 39.1998 39.1998 30.5982 39.1998 19.9998C39.1998 9.40141 30.5982 0.799805 19.9998 0.799805ZM12.4095 11.4835C12.7319 11.161 13.2548 11.161 13.5772 11.4835L20 17.9062L26.4225 11.4838C26.745 11.1613 27.2678 11.1613 27.5903 11.4838L28.758 12.6515C29.0805 12.974 29.0805 13.4968 28.758 13.8192L22.3355 20.2417L28.7579 26.6641C29.0804 26.9865 29.0804 27.5094 28.7579 27.8318L27.5902 28.9996C27.2677 29.322 26.7449 29.322 26.4224 28.9996L20 22.5772L13.5773 28.9998C13.2549 29.3223 12.7321 29.3223 12.4096 28.9998L11.2419 27.8321C10.9194 27.5096 10.9194 26.9868 11.2419 26.6643L17.6645 20.2417L11.2417 13.819C10.9193 13.4965 10.9193 12.9737 11.2417 12.6512L12.4095 11.4835Z" fill="#E84E58" />
            </svg>

          </div>
        </div>
      </div>

      <div className={styles.btnWr}>
        <button
          onClick={closeHandler}
          className={styles.btnMain}
          type="button"
        >
          Закрыть
        </button>
      </div>
    </>
  )
}
