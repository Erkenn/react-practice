import { memo, useState } from 'react'
import type { JSX } from 'react'
import styles from './Styles.module.scss'

type AlertVariant = 'info' | 'error' | 'warning' | 'success'
type AlertStyle = 'sharp' | 'smooth'
type AlertLayout = 'desktop' | 'mobile'

interface AlertProps {
  title: string
  description?: string
  linkText?: string
  linkHref?: string
  variant?: AlertVariant
  style?: AlertStyle
  layout?: AlertLayout
  onClose?: () => void
  showIcon?: boolean
}

function AlertComponent({
  title,
  description,
  linkText,
  linkHref = '#',
  variant = 'info',
  style = 'sharp',
  layout = 'desktop',
  onClose,
  showIcon = true,
}: AlertProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  if (!isVisible) return <></>

  const getIcon = () => {
    switch (variant) {
      case 'error':
        return '✕'
      case 'warning':
        return '!'
      case 'success':
        return '✓'
      default:
        return 'i'
    }
  }

  const alertClass = `${styles.alert} ${styles[`alert_${variant}`]} ${styles[`alert_${style}`]} ${styles[`alert_${layout}`]}`

  return (
    <div className={alertClass} role="alert">
      {showIcon && (
        <span className={styles.alert__icon}>{getIcon()}</span>
      )}
      
      <div className={styles.alert__content}>
        <h4 className={styles.alert__title}>{title}</h4>
        {description && (
          <p className={styles.alert__description}>{description}</p>
        )}
        {linkText && (
          <a href={linkHref} className={styles.alert__link}>
            {linkText} →
          </a>
        )}
      </div>

      {onClose && (
        <button
          className={styles.alert__close}
          onClick={handleClose}
          aria-label="Close alert"
        >
          ×
        </button>
      )}
    </div>
  )
}

export const Alert = memo(AlertComponent)
