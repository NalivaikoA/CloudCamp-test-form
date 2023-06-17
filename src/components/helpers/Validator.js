import * as Yup from 'yup'

export const MainFormValidationSchema = Yup.object({
  telephone: Yup.string()
    .min(8)
    .required('Введите номер телефона'),
  email: Yup.string()
    .email('Некорректный формат почты')
    .required('Введите email'),
})

export const step1FormValidationSchema = Yup.object({
  nickname: Yup.string()
    .max(30, 'Поле должно содержать не более 30 символов')
    .matches(/^[\w, А-Яа-яЁё]+$/, 'должны быть только буквы и цифры')
    .required('Заполните поле'),
  name: Yup.string()
    .max(50, 'Поле должно содержать не более 50 символов')
    .matches(/^[a-zA-Z, А-Яа-яЁё]+$/, 'должны быть только буквы')
    .required('Заполните поле'),
  surname: Yup.string()
    .max(50, 'Поле должно содержать не более 40 символов')
    .matches(/^[a-zA-Z, А-Яа-яЁё]+$/, 'должны быть только буквы')
    .required('Заполните поле'),
  selectSex: Yup.string()
    .required('Заполните поле'),
})

export const step2FormValidationSchema = Yup.object({
  advantages: Yup.array().of(
    Yup.string()
      .max(30, 'Поле должно содержать не более 30 символов')
      .matches(/^[\w, А-Яа-яЁё]+$/, 'должны быть только буквы и цифры')
      .required('Заполните поле'),
  ),
})

export const step3FormValidationSchema = Yup.object({
  about: Yup.string()
    .max(200, 'Поле должно содержать не более 200 символов'),
})
