/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import styles from './formStep1.module.css'
import { step1FormValidationSchema } from '../../helpers/Validator'

const initialValues = {
  nickname: '',
  name: '',
  surname: '',
  selectSex: '',
}

export function FormStep1() {
  const navigate = useNavigate()

  const submitHandler = (e) => {
    window.sessionStorage.setItem('myForm1', JSON.stringify(e))
    setTimeout(() => {
      navigate('/step2')
    }, 0)
  }

  const getIniteStateSS = () => {
    const dataFromSS = window.sessionStorage.getItem('myForm1')
    const preparedData = dataFromSS ? JSON.parse(dataFromSS) : initialValues
    return preparedData
  }

  const initialValuesSS = getIniteStateSS()

  const backHandler = () => {
    setTimeout(() => {
      navigate('/')
    }, 0)
  }

  return (
    <div className={styles.wrInner}>
      <div className={styles.horizontalLine}>
        <div className={styles.dotActive}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
        </div>
        <div className={styles.dot1} />
        <div className={styles.dot2} />
        <div className={styles.stepsNumber1}>1</div>
        <div className={styles.stepsNumber2}>2</div>
        <div className={styles.stepsNumber3}>3</div>
      </div>
      <Formik
        initialValues={initialValuesSS}
        validationSchema={step1FormValidationSchema}
        onSubmit={submitHandler}
      >
        <Form className={styles.form}>
          <div className={styles.nicknameBlock}>
            <label htmlFor="nickname">Nickname</label>
            <Field
              name="nickname"
              placeholder="Nickname"
              type="text"
            />
            <ErrorMessage
              component="p"
              className={styles.error}
              name="nickname"
            />
          </div>
          <div className={styles.nameBlock}>
            <label htmlFor="name">Name</label>
            <Field
              name="name"
              placeholder="Name"
              type="text"
            />
            <ErrorMessage component="p" className={styles.error} name="name" />
          </div>
          <div className={styles.surnameBlock}>
            <label htmlFor="surname">Surname</label>
            <Field
              name="surname"
              placeholder="Surname"
              type="text"
            />
            <ErrorMessage component="p" className={styles.error} name="surname" />
          </div>

          <div className={styles.sexBlock}>
            <label htmlFor="selectSex">Sex</label>
            <Field name="selectSex" as="select" className="my-select">
              <option defaultValue hidden>Не выбрано</option>
              <option value="woman">woman</option>
              <option value="man">man</option>
            </Field>
            <ErrorMessage component="p" className={styles.error} name="selectSex" />
          </div>
          <button
            className={classNames(
              styles.submitBtn,
            )}
            type="submit"
          >
            Далее
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
  )
}
