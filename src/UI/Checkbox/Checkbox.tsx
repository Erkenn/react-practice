import { memo, useId } from 'react'
import type { JSX } from 'react'
import styles from './Styles.module.scss'

type CheckboxSize = 'sm' | 'md' | 'lg'

interface CheckboxProps {
  label?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  size?: CheckboxSize
  name?: string
}

function CheckboxComponent({
  label,
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  name,
}: CheckboxProps): JSX.Element {
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
      />
      <span className={`${styles.box} ${checked ? styles.box_checked : ''}`}>
        {checked && <span className={styles.checkmark}>✓</span>}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}

export const Checkbox = memo(CheckboxComponent)
