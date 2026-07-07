import { memo, forwardRef } from 'react'
import type { JSX, InputHTMLAttributes } from 'react'
import styles from './Styles.module.scss'

type InputVariant = 'none' | 'error' | 'warning' | 'success'
type InputStyle = 'sharp' | 'smooth'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'style'> {
  label?: string
  helperText?: string
  error?: string
  warning?: string
  success?: string
  variant?: InputVariant
  style?: InputStyle
  icon?: React.ReactNode
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
      ...rest
    },
    ref
  ): JSX.Element => {
    const inputClassName = `${styles.input} ${styles[`input_${variant}`]} ${styles[`input_${style}`]}`
    const helperClassName = `${styles.helper} ${styles[`helper_${variant}`]}`

    const displayHelperText = error || warning || success || helperText

    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.inputContainer}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <input
            ref={ref}
            type={type}
            className={inputClassName}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            {...rest}
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
)

InputComponent.displayName = 'Input'

export const Input = memo(InputComponent)
