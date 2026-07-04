import { memo } from 'react'
import type { JSX } from 'react'
import styles from './Styles.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'secondaryGrey' | 'textOnly'
type ButtonStyle = 'sharp' | 'smooth'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  style?: ButtonStyle
  size?: ButtonSize
  disabled?: boolean
  onClick?: () => void
}

function ButtonComponent({
  children,
  variant = 'primary',
  style = 'sharp',
  size = 'md',
  disabled = false,
  onClick,
}: ButtonProps): JSX.Element {
  const className = `${styles.btn} ${styles[`btn_${variant}`]} ${styles[`btn_${style}`]} ${styles[`btn_${size}`]}`

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.btn__text}>{children}</span>
      <span className={styles.btn__arrow}>→</span>
    </button>
  )
}

export const Button = memo(ButtonComponent)
