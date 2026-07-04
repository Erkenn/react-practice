import { memo } from 'react'
import type { JSX } from 'react'
import styles from './Styles.module.scss'

type BadgeVariant = 'primary' | 'error' | 'warning' | 'success'
type BadgeStyle = 'sharp' | 'smooth'
type BadgeSize = 'sm' | 'md' | 'lg'
type BadgeType = 'simple' | 'dot' | 'icons'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  style?: BadgeStyle
  size?: BadgeSize
  type?: BadgeType
  onClose?: () => void
}

function BadgeComponent({
  children,
  variant = 'primary',
  style = 'sharp',
  size = 'md',
  type = 'simple',
  onClose,
}: BadgeProps): JSX.Element {
  const className = `${styles.badge} ${styles[`badge_${variant}`]} ${styles[`badge_${style}`]} ${styles[`badge_${size}`]}`

  return (
    <span className={className}>
      {type === 'dot' && <span className={styles.badge__dot} />}
      {type === 'icons' && <span className={styles.badge__icon}>↑</span>}
      <span className={styles.badge__label}>{children}</span>
      {type === 'icons' && onClose && (
        <button className={styles.badge__close} onClick={onClose}>×</button>
      )}
    </span>
  )
}

export const Badge = memo(BadgeComponent)
