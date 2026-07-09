import * as yup from 'yup'

export const registerSchema = yup.object({
  name: yup
    .string()
    .required('Имя обязательно')
    .min(2, 'Минимум 2 символа'),
  username: yup
    .string()
    .required('Логин обязателен')
    .min(3, 'Минимум 3 символа'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Минимум 6 символов'),
  confirmPassword: yup
    .string()
    .required('Подтверждение пароля обязательно')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
}).required()
