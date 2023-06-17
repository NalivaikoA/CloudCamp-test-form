/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import MaskedInput from 'react-text-mask'
import styles from './main.module.css'
import { MainFormValidationSchema } from '../helpers/Validator'

const initialValues = {
  telephone: '',
  email: '',
}

export function Main() {
  const navigate = useNavigate()

  const phoneNumberMask = [
    '+',
    '7',
    ' ',
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ]

  const getIniteStateSS = () => {
    const dataFromSS = window.sessionStorage.getItem('myForm')
    const preparedData = dataFromSS ? JSON.parse(dataFromSS) : initialValues
    return preparedData
  }

  const initialValuesSS = getIniteStateSS()

  const submitHandler = (e) => {
    window.sessionStorage.setItem('myForm', JSON.stringify(e))
    setTimeout(() => {
      navigate('/step1')
    }, 0)
  }

  return (
    <div className={styles.wrInner}>
      <div className={styles.avatar}>
        <p>АИ</p>
      </div>
      <div className={styles.blockA}>
        <div className={styles.fio}>
          <h3>Иван Иванов</h3>
        </div>
        <nav className={styles.links}>
          <a href="#">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.710016
                  1.96935L2.08181 0.524489C2.15733 0.444944 2.26221
                  0.399902 2.37189 0.399902H4.83441C4.9405 0.399902 5.04224 0.442045
                  5.11725 0.51706L6.48294 1.88275C6.55795 1.95776 6.6597 1.9999
                  6.76578 1.9999H12.4344C12.5405
                  1.9999 12.6422 2.04205 12.7173 2.11706L13.2829 2.68275C13.358 2.75776 13.4001
                  2.8595
                  13.4001 2.96559V10.6342C13.4001 10.7403 13.358 10.842 13.2829 10.9171L12.7173
                  11.4827C12.6422 11.5578 12.5405 11.5999 12.4344 11.5999H1.59C1.46983 11.5999
                  1.35602 11.5459 1.28005 11.4528L0.690151 10.7296C0.631907 10.6582 0.600098
                  10.5689 0.600098 10.4768V2.24476C0.600098 2.14227 0.639443 2.04368
                  0.710016 1.96935Z"
                fill="#CCCCCC"
              />
            </svg>
            <p>Telegram</p>
          </a>
          <a href="https://github.com/NalivaikoA" target="_blanc">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.710016
                  1.96935L2.08181 0.524489C2.15733 0.444944 2.26221
                  0.399902 2.37189 0.399902H4.83441C4.9405 0.399902 5.04224 0.442045
                  5.11725 0.51706L6.48294 1.88275C6.55795 1.95776 6.6597 1.9999
                  6.76578 1.9999H12.4344C12.5405
                  1.9999 12.6422 2.04205 12.7173 2.11706L13.2829 2.68275C13.358 2.75776 13.4001
                  2.8595
                  13.4001 2.96559V10.6342C13.4001 10.7403 13.358 10.842 13.2829 10.9171L12.7173
                  11.4827C12.6422 11.5578 12.5405 11.5999 12.4344 11.5999H1.59C1.46983 11.5999
                  1.35602 11.5459 1.28005 11.4528L0.690151 10.7296C0.631907 10.6582 0.600098
                  10.5689 0.600098 10.4768V2.24476C0.600098 2.14227 0.639443 2.04368
                  0.710016 1.96935Z"
                fill="#CCCCCC"
              />
            </svg>
            <p>Github</p>
          </a>
          <a href="https://disk.yandex.ru/i/Yaj4c1HjH7Gw1g" target="_blanc">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.710016
                  1.96935L2.08181 0.524489C2.15733 0.444944 2.26221
                  0.399902 2.37189 0.399902H4.83441C4.9405 0.399902 5.04224 0.442045
                  5.11725 0.51706L6.48294 1.88275C6.55795 1.95776 6.6597 1.9999
                  6.76578 1.9999H12.4344C12.5405
                  1.9999 12.6422 2.04205 12.7173 2.11706L13.2829 2.68275C13.358 2.75776 13.4001
                  2.8595
                  13.4001 2.96559V10.6342C13.4001 10.7403 13.358 10.842 13.2829 10.9171L12.7173
                  11.4827C12.6422 11.5578 12.5405 11.5999 12.4344 11.5999H1.59C1.46983 11.5999
                  1.35602 11.5459 1.28005 11.4528L0.690151 10.7296C0.631907 10.6582 0.600098
                  10.5689 0.600098 10.4768V2.24476C0.600098 2.14227 0.639443 2.04368
                  0.710016 1.96935Z"
                fill="#CCCCCC"
              />
            </svg>
            <p>Resume</p>
          </a>
        </nav>
      </div>
      <div className={styles.border} />

      <Formik
        initialValues={initialValuesSS}
        validationSchema={MainFormValidationSchema}
        onSubmit={submitHandler}
      >
        {(props) => {
          const {
            touched,
            errors,
            handleChange,
            handleBlur,
          } = props
          return (
            <Form className={styles.form}>
              <div className={styles.telBlock}>
                <label htmlFor="telephone">Номер телефона</label>
                <Field
                  render={({ field }) => (
                    <MaskedInput
                      {...field}
                      mask={phoneNumberMask}
                      id="phone"
                      placeholder="Enter your phone number"
                      type="tel"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                          errors.phone && touched.phone
                            ? 'text-input error'
                            : 'text-input'
                        }
                    />
                  )}
                  name="telephone"
                  mask={phoneNumberMask}
                  placeholder="+7 999 999-99-99"
                  type="tel"
                />
                <ErrorMessage
                  component="p"
                  className={styles.error}
                  name="telephone"
                />
              </div>
              <div className={styles.emailBlock}>
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  placeholder="tim.jennings@example.com"
                  type="email"
                />
                <ErrorMessage component="p" className={styles.error} name="email" />
              </div>
              <button
                className={classNames(
                  styles.submitBtn,
                )}
                type="submit"
              >
                Начать
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
