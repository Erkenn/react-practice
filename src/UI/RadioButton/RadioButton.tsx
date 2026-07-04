import { memo, useId } from 'react'
import type { JSX } from 'react'
import styles from './Styles.module.scss'

type RadioSize = 'sm' | 'md' | 'lg'

interface RadioButtonProps {
  label?: string
  checked?: boolean
  onChange?: (value: string) => void
  disabled?: boolean
  size?: RadioSize
  name: string
  value: string
}

function RadioButtonComponent({
  label,
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  name,
  value,
}: RadioButtonProps): JSX.Element {
  const id = useId()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <label className={`${styles.wrapper} ${styles[`wrapper_${size}`]} ${disabled ? styles.wrapper_disabled : ''}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={styles.input}
      />
      <span className={`${styles.radio} ${checked ? styles.radio_checked : ''}`}>
        {checked && <span className={styles.dot} />}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}

export const RadioButton = memo(RadioButtonComponent)
