import { memo } from 'react'
import type { JSX } from 'react'
import { Badge } from '../../UI'
import styles from './Styles.module.scss'

interface ProductCardProps {
  image: string
  title: string
  price: number
  oldPrice?: number
  discount?: number
  rating?: number
  reviews?: number
  variant?: 'compact' | 'detailed'
  onAddToCart?: () => void
}

function ProductCardComponent({
  image,
  title,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
  variant = 'compact',
  onAddToCart,
}: ProductCardProps): JSX.Element {
  return (
    <div className={`${styles.card} ${styles[`card_${variant}`]}`}>
      <div className={styles.card__imageWrapper}>
        <img src={image} alt={title} className={styles.card__image} />
        {discount && (
          <span className={styles.card__badge}>
            <Badge variant="error" size="sm" style="smooth">
              -{discount}%
            </Badge>
          </span>
        )}
      </div>

      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>

        {rating !== undefined && (
          <div className={styles.card__rating}>
            <span className={styles.card__stars}>★ {rating}</span>
            {reviews && <span className={styles.card__reviews}>{reviews} Reviews</span>}
          </div>
        )}

        <div className={styles.card__price}>
          <span className={styles.card__currentPrice}>${price.toFixed(2)}</span>
          {oldPrice && (
            <span className={styles.card__oldPrice}>${oldPrice.toFixed(2)}</span>
          )}
        </div>

        <button className={styles.card__cartButton} onClick={onAddToCart}>
          🛒
        </button>
      </div>
    </div>
  )
}

export const ProductCard = memo(ProductCardComponent)
