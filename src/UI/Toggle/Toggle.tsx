import { memo, useId } from 'react'
import type { JSX } from 'react'
import styles from './Styles.module.scss'

type ToggleSize = 'sm' | 'md' | 'lg'

interface ToggleProps {
  label?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  size?: ToggleSize
  name?: string
}

function ToggleComponent({
  label,
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  name,
}: ToggleProps): JSX.Element {
  const id = useId()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked)
  }

  return (
    <label className={`${styles.wrapper} ${styles[`wrapper_${size}`]} ${disabled ? styles.wrapper_disabled : ''}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={styles.input}
        role="switch"
        aria-checked={checked}
      />
      <span className={`${styles.track} ${checked ? styles.track_checked : ''}`}>
        <span className={styles.thumb} />
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}

export const Toggle = memo(ToggleComponent)
