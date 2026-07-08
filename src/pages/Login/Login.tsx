import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../schemas/loginSchema'
import { useAppContext } from '../../context/useAppContext'
import { Input, Button, Alert } from '../../UI'
import styles from './Login.module.scss'
import { useState } from 'react'

interface LoginForm {
  email: string
  password: string
}

export function Login() {
  const navigate = useNavigate()
  const { login } = useAppContext()
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (data: LoginForm) => {
    const result = await login(data.email, data.password)

    if (result.success) {
      navigate('/')
    } else {
      setError(result.error || 'Ошибка входа')
    }
  }

  return (
    <div className={styles.form}>
      <h2>Вход в аккаунт</h2>

      {error && (
        <div className={styles.alert}>
          <Alert
            title="Ошибка входа"
            description={error}
            variant="error"
            style="smooth"
            onClose={() => setError(null)}
          />
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <Input
            label="Email"
            placeholder="your@email.com"
            type="email"
            variant={errors.email ? 'error' : 'none'}
            {...register('email')}
          />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <Input
            label="Пароль"
            placeholder="Введите пароль"
            type="password"
            variant={errors.password ? 'error' : 'none'}
            {...register('password')}
          />
          {errors.password && (
            <p className={styles.errorMessage}>{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          style="smooth"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? 'Вход...' : 'Войти'}
        </Button>
      </form>

      <div className={styles.formFooter}>
        Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
      </div>
    </div>
  )
}
