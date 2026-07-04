import { memo, useState } from 'react'
import type { JSX } from 'react'
import styles from './Styles.module.scss'

type SegmentedStyle = 'sharp' | 'smooth'

interface SegmentOption {
  value: string
  label?: string
  icon?: React.ReactNode
}

interface SegmentedControlProps {
  options: SegmentOption[]
  value?: string
  onChange?: (value: string) => void
  style?: SegmentedStyle
  showIcon?: boolean
  onlyIcon?: boolean
  disabled?: boolean
}

function SegmentedControlComponent({
  options,
  value,
  onChange,
  style = 'smooth',
  showIcon = false,
  onlyIcon = false,
  disabled = false,
}: SegmentedControlProps): JSX.Element {
  const [activeValue, setActiveValue] = useState(value || options[0]?.value)

  const handleClick = (optionValue: string) => {
    if (disabled) return
    setActiveValue(optionValue)
    onChange?.(optionValue)
  }

  const getSegmentPosition = (index: number): 'leading' | 'middle' | 'trailing' => {
    if (index === 0) return 'leading'
    if (index === options.length - 1) return 'trailing'
    return 'middle'
  }

  return (
    <div className={`${styles.control} ${styles[`control_${style}`]} ${disabled ? styles.control_disabled : ''}`}>
      {options.map((option, index) => {
        const position = getSegmentPosition(index)
        const isActive = activeValue === option.value

        return (
          <button
            key={option.value}
            className={`
              ${styles.segment}
              ${styles[`segment_${position}`]}
              ${styles[`segment_${style}`]}
              ${isActive ? styles.segment_active : ''}
            `}
            onClick={() => handleClick(option.value)}
            disabled={disabled}
          >
            {!onlyIcon && showIcon && option.icon && (
              <span className={styles.segment__icon}>{option.icon}</span>
            )}
            {!onlyIcon && option.label && (
              <span className={styles.segment__label}>{option.label}</span>
            )}
            {onlyIcon && option.icon && (
              <span className={styles.segment__icon}>{option.icon}</span>
            )}
          </button>
        )
      })}
    </div>
  )
}

export const SegmentedControl = memo(SegmentedControlComponent)
