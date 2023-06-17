/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  ErrorMessage,
  Field, Form, Formik, useFormik,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import styles from './formStep3.module.css'
import { step3FormValidationSchema } from '../../helpers/Validator'
import { Modal } from '../../Modal/Modal'
import { ModalSuccessInner } from '../ModalInner/ModalSuccessInner'
import { ModalErrorInner } from '../ModalInner/ModalErrorInner'

export function FormStep3() {
  const navigate = useNavigate()

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)

  const closeSuccessModalHandler = () => {
    setIsSuccessModalOpen(false)
  }

  const openSuccessModalHandler = () => {
    setIsSuccessModalOpen(true)
  }

  const closeErrorModalHandler = () => {
    setIsErrorModalOpen(false)
  }

  const openErrorModalHandler = () => {
    setIsErrorModalOpen(true)
  }

  let initialValues = {
    about: '',
  }

  const getIniteStateSS = () => {
    const dataFromSS = window.sessionStorage.getItem('myForm3')
    const preparedData = dataFromSS ? JSON.parse(dataFromSS) : initialValues
    return preparedData
  }
  const initialValuesSS = getIniteStateSS()

  if (initialValuesSS) {
    initialValues = initialValuesSS
  } else {
    initialValues = { about: '' }
  }

  const formik = useFormik({
    initialValues,
  })

  const counter = formik.values.about.replace(/\s/g, '').length

  const { mutateAsync } = useMutation({
    mutationFn: async (data) => {
      const res = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: data,
      })

      if (res.status === 200) {
        openSuccessModalHandler()
      } else {
        throw new Error(
          `Произошла ошибка при отправке данных, код ${res.status}`,
          openErrorModalHandler(),
        )
      }
      return res.json()
    },
  })

  const submitHandler = async () => {
    window.sessionStorage.setItem('myForm3', JSON.stringify(formik.values))

    const sessionData = {}
    for (let i = 0; i < window.sessionStorage.length; i++) {
      const key = window.sessionStorage.key(i)
      const value = window.sessionStorage.getItem(key)
      sessionData[key] = value
    }

    const dataToServerArr = Object.values(sessionData)
    const finalyDataToServer = `{${dataToServerArr.join(', ').replace(/[{}]/g, '').replace(/\s/g, '')}}`

    const response = await mutateAsync(finalyDataToServer)
    console.log(response)

    // openSuccessModalHandler()
  }

  const backHandler = () => {
    setTimeout(() => {
      navigate('/step2')
    }, 0)
  }

  return (
    <main className={styles.wr}>
      <div className={styles.wrInner}>
        <div className={styles.horizontalLine}>
          <div className={styles.progressLine} />
        </div>
        <div className={styles.stepper}>
          <div className={styles.steps}>

            <div className={styles.atoms1}>
              <div className={styles.dotActive1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </div>
              <div className={styles.stepsNumber1}>1</div>
            </div>

            <div className={styles.atoms1}>
              <div className={styles.dotActive2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </div>
              <div className={styles.stepsNumber2}>2</div>
            </div>

            <div className={styles.atoms1}>
              <div className={styles.dotActive3}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
              </div>
              <div className={styles.stepsNumber3}>3</div>
            </div>

          </div>
        </div>
        <Formik
          initialValues={initialValuesSS}
          validationSchema={step3FormValidationSchema}
          onSubmit={submitHandler}
        >
          <Form className={styles.form}>

            <div className={styles.aboutBlock}>
              <label htmlFor="about">About</label>
              <Field
                maxLength="200"
                as="textarea"
                name="about"
                placeholder="Введите информацию о себе"
                rows="3"
                onChange={formik.handleChange}
                value={formik.values.about}
              />
              <ErrorMessage component="p" className={styles.error} name="about" />
              <div className={styles.counter}>
                <span className="current">
                  Кол-во:
                  {' '}
                  {counter}

                </span>
              </div>
            </div>

            <button
              className={classNames(
                styles.submitBtn,
              )}
              type="submit"
            >
              Отправить
            </button>
          </Form>
        </Formik>

        <button
          className={classNames(
            styles.backBtn,
          )}
          type="button"
          onClick={backHandler}
        >
          Назад
        </button>
      </div>
      <Modal
        isOpen={isSuccessModalOpen}
        closeHandler={closeSuccessModalHandler}
      >
        <ModalSuccessInner
          closeSuccessModalHandler={closeSuccessModalHandler}
        />
      </Modal>
      <Modal
        isOpen={isErrorModalOpen}
        closeHandler={closeErrorModalHandler}
      >
        <ModalErrorInner
          closeErrorModalHandler={closeErrorModalHandler}
        />
      </Modal>
    </main>
  )
}
