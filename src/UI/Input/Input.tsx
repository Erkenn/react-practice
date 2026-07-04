import { memo } from 'react'
import type { JSX } from 'react'
import styles from './Styles.module.scss'

type InputVariant = 'none' | 'error' | 'warning' | 'success'
type InputStyle = 'sharp' | 'smooth'

interface InputProps {
  label?: string
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  helperText?: string
  error?: string
  warning?: string
  success?: string
  disabled?: boolean
  variant?: InputVariant
  style?: InputStyle
  icon?: React.ReactNode
}

function InputComponent({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  helperText,
  error,
  warning,
  success,
  disabled = false,
  variant = 'none',
  style = 'sharp',
  icon,
}: InputProps): JSX.Element {
  const inputClassName = `${styles.input} ${styles[`input_${variant}`]} ${styles[`input_${style}`]}`
  const helperClassName = `${styles.helper} ${styles[`helper_${variant}`]}`

  const displayHelperText = error || warning || success || helperText

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputContainer}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          type={type}
          className={inputClassName}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      {displayHelperText && (
        <p className={helperClassName}>
          <span className={styles.helperIcon}>ⓘ</span>
          {displayHelperText}
        </p>
      )}
    </div>
  )
}

export const Input = memo(InputComponent)
