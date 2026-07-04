import { memo } from 'react'
import type { JSX } from 'react'
import styles from './Styles.module.scss'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type AvatarType = 'image' | 'text'
type AvatarIndicator = 'none' | 'online' | 'number'
type AvatarShape = 'circle' | 'square'

interface AvatarProps {
  src?: string
  alt?: string
  initials?: string
  size?: AvatarSize
  type?: AvatarType
  indicator?: AvatarIndicator
  number?: number
  shape?: AvatarShape
  onClick?: () => void
}

function AvatarComponent({
  src,
  alt = 'Avatar',
  initials = 'AB',
  size = 'md',
  type = 'image',
  indicator = 'none',
  number = 0,
  shape = 'circle',
  onClick,
}: AvatarProps): JSX.Element {
  const avatarClass = `${styles.avatar} ${styles[`avatar_${size}`]} ${styles[`avatar_${shape}`]}`

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={avatarClass}>
        {type === 'image' && src ? (
          <img src={src} alt={alt} className={styles.avatar__image} />
        ) : (
          <span className={styles.avatar__text}>{initials}</span>
        )}
      </div>

      {indicator === 'online' && (
        <span className={`${styles.indicator} ${styles[`indicator_${size}`]} ${styles.indicator_online}`} />
      )}

      {indicator === 'number' && number > 0 && (
        <span className={`${styles.indicator} ${styles[`indicator_${size}`]} ${styles.indicator_number}`}>
          {number > 99 ? '99+' : number}
        </span>
      )}
    </div>
  )
}

export const Avatar = memo(AvatarComponent)
