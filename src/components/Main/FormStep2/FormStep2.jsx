/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  ErrorMessage, Field, FieldArray, Form, Formik,
} from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import styles from './formStep2.module.css'
import { step2FormValidationSchema } from '../../helpers/Validator'

const initialValues = {
  advantages: [''],
  checked: [],
  picked: '',
}

export function FormStep2() {
  const navigate = useNavigate()

  const getIniteStateSS = () => {
    const dataFromSS = window.sessionStorage.getItem('myForm2')
    const preparedData = dataFromSS ? JSON.parse(dataFromSS) : initialValues
    return preparedData
  }

  const initialValuesSS = getIniteStateSS()

  const submitHandler = (e) => {
    window.sessionStorage.setItem('myForm2', JSON.stringify(e))
    setTimeout(() => {
      navigate('/step3')
    }, 0)
  }

  const backHandler = () => {
    setTimeout(() => {
      navigate('/step1')
    }, 0)
  }

  return (
    <div className={styles.wrInner}>
      <div className={styles.horizontalLine}>
        <div className={styles.progressLine} />
        <div className={styles.dotActive1}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
        </div>
        <div className={styles.dotActive2}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
        </div>
        <div className={styles.dot2} />
        <div className={styles.stepsNumber1}>1</div>
        <div className={styles.stepsNumber2}>2</div>
        <div className={styles.stepsNumber3}>3</div>
      </div>

      <Formik
        initialValues={initialValuesSS}
        validationSchema={step2FormValidationSchema}
        onSubmit={submitHandler}
      >
        <Form className={styles.form}>
          <div className={styles.advantagesBlock}>
            <label htmlFor="advantage">Advantages</label>
            <FieldArray name="advantages">
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps
                const { values } = form
                const { advantages } = values
                return (
                  <>
                    <div>
                      {advantages.map((advantage, index) => (
                        <>
                          <div key={index} className={styles.advantagesInput}>
                            <Field
                              name={`advantages[${index}]`}
                              placeholder="Введите данные"
                              type="text"
                            />

                            <Link onClick={() => remove(index)}>
                              <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                    // eslint-disable-next-line max-len
                                  d="M3.453 15.6522L2.55826 7.15225C2.52719 6.85703 2.75867 6.5999 3.05552 6.5999H12.9447C13.2416 6.5999 13.4731 6.85703 13.442 7.15225L12.5472 15.6522C12.5205 15.9067 12.3059 16.0999 12.05 16.0999H3.95025C3.69437 16.0999 3.47979 15.9067 3.453 15.6522Z"
                                  fill="#CCCCCC"
                                />
                                <path
                                    // eslint-disable-next-line max-len
                                  d="M15.0001 4.6999H1.00012C0.72398 4.6999 0.500122 4.47605 0.500122 4.1999V3.2999C0.500122 3.02376 0.72398 2.7999 1.00012 2.7999H3.35511C3.44983 2.7999 3.54261 2.77299 3.62263 2.72231L6.37761 0.977493C6.45764 0.92681 6.55041 0.899902 6.64514 0.899902H9.35511C9.44983 0.899902 9.54261 0.92681 9.62263 0.977493L12.3776 2.72231C12.4576 2.77299 12.5504 2.7999 12.6451 2.7999H15.0001C15.2763 2.7999 15.5001 3.02376 15.5001 3.2999V4.1999C15.5001 4.47604 15.2763 4.6999 15.0001 4.6999Z"
                                  fill="#CCCCCC"
                                />
                              </svg>
                            </Link>
                          </div>
                          <ErrorMessage
                            component="p"
                            className={styles.error}
                            name={`advantages[${index}]`}
                          />
                        </>
                      ))}
                    </div>
                    <button type="button" onClick={() => push('')}>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.99998 1C6.99998 0.447715 6.55226 0 5.99998 0C5.44769 0 4.99998 0.447715 4.99998 1V4.99998H1C0.447716 4.99998 0 5.44769 0 5.99998C0 6.55226 0.447715 6.99998 1 6.99998H4.99998V11C4.99998 11.5522 5.44769 12 5.99998 12C6.55226 12 6.99998 11.5522 6.99998 11V6.99998H11C11.5522 6.99998 12 6.55226 12 5.99998C12 5.44769 11.5522 4.99998 11 4.99998H6.99998V1Z"
                          fill="#5558FA"
                        />
                      </svg>
                    </button>
                  </>
                )
              }}
            </FieldArray>
          </div>

          <div className={styles.checkBoxBlock}>
            <p className={styles.checkBoxUpLabel}>Checkbox group</p>
            <div className={styles.checkBoxWr}>
              <label>
                <Field type="checkbox" name="checked" value="1" />
                1
              </label>
            </div>
            <div className={styles.checkBoxWr}>
              <label>
                <Field type="checkbox" name="checked" value="2" />
                2
              </label>
            </div>
            <div className={styles.checkBoxWr}>
              <label>
                <Field type="checkbox" name="checked" value="3" />
                3
              </label>
            </div>
          </div>

          <div className={styles.radioBlock}>
            <p className={styles.radioUpLabel}>Radio group</p>
            <div className={styles.radioWr}>
              <label>
                <Field type="radio" name="picked" value="1" />
                1
              </label>
            </div>
            <div className={styles.radioWr}>
              <label>
                <Field type="radio" name="picked" value="2" />
                2
              </label>
            </div>
            <div className={styles.radioWr}>
              <label>
                <Field type="radio" name="picked" value="3" />
                3
              </label>
            </div>
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
