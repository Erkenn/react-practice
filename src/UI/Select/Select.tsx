import { memo, useState, useRef, useEffect } from 'react'
import type { JSX } from 'react'
import styles from './Styles.module.scss'

type SelectSize = 'sm' | 'md' | 'lg'
type SelectStatus = 'info' | 'success' | 'warning' | 'danger'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  placeholder?: string
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  caption?: string
  required?: boolean
  disabled?: boolean
  size?: SelectSize
  status?: SelectStatus
  prefixIcon?: React.ReactNode
}

function SelectComponent({
  label,
  placeholder = 'Placeholder',
  options,
  value,
  onChange,
  caption,
  required = false,
  disabled = false,
  size = 'md',
  status = 'info',
  prefixIcon,
}: SelectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find(opt => opt.value === value)
  const displayValue = selectedOption ? selectedOption.label : placeholder

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue)
    setIsOpen(false)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange?.('')
  }

  const containerClass = `${styles.select} ${styles[`select_${size}`]} ${styles[`select_${status}`]} ${isOpen ? styles.select_opened : ''} ${disabled ? styles.select_disabled : ''}`

  return (
    <div className={styles.wrapper} ref={selectRef}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={containerClass} onClick={() => !disabled && setIsOpen(!isOpen)}>
        {prefixIcon && <span className={styles.prefixIcon}>{prefixIcon}</span>}
        <span className={`${styles.value} ${!selectedOption ? styles.value_placeholder : ''}`}>
          {displayValue}
        </span>
        {selectedOption && (
          <button className={styles.clearBtn} onClick={handleClear}>×</button>
        )}
        <span className={styles.arrow}>▼</span>
      </div>

      {isOpen && !disabled && (
        <ul className={styles.listbox}>
          {options.map(option => (
            <li
              key={option.value}
              className={`${styles.option} ${option.value === value ? styles.option_selected : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  )
}

export const Select = memo(SelectComponent)
