import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../../schemas/registerSchema'
import { useAppContext } from '../../context/useAppContext'
import { Input, Button, Alert } from '../../UI'
import styles from './Register.module.scss'
import { useState } from 'react'

interface RegisterForm {
  name: string
  username: string
  password: string
  confirmPassword: string
}

export function Register() {
  const navigate = useNavigate()
  const { register: registerUser } = useAppContext()
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterForm) => {
    const result = await registerUser(data.username, data.password, data.name)
    if (result.success) {
      navigate('/')
    } else {
      setError(result.error || 'Ошибка регистрации')
    }
  }

  return (
    <div className={styles.form}>
      <h2>Регистрация</h2>

      {error && (
        <div className={styles.alert}>
          <Alert
            title="Ошибка регистрации"
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
            label="Имя"
            placeholder="Ваше имя"
            variant={errors.name ? 'error' : 'none'}
            {...register('name')}
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <Input
            label="Логин"
            placeholder="Придумайте логин"
            variant={errors.username ? 'error' : 'none'}
            {...register('username')}
          />
          {errors.username && <p className={styles.errorMessage}>{errors.username.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <Input
            label="Пароль"
            placeholder="Минимум 6 символов"
            type="password"
            variant={errors.password ? 'error' : 'none'}
            {...register('password')}
          />
          {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <Input
            label="Подтверждение пароля"
            placeholder="Повторите пароль"
            type="password"
            variant={errors.confirmPassword ? 'error' : 'none'}
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className={styles.errorMessage}>{errors.confirmPassword.message}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          style="smooth"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
        </Button>
      </form>

      <div className={styles.formFooter}>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </div>
    </div>
  )
}
