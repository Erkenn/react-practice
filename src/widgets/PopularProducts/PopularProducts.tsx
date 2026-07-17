import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/useAppContext'
import { ProductCard } from '../../UI'
import styles from './PopularProducts.module.scss'

export function PopularProducts() {
  const { products, fetchProducts, addToCart } = useAppContext()

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts()
    }
  }, [products.length, fetchProducts])

  const popularProducts = products.slice(0, 4)

  return (
    <section className={styles.section}>
      <div className={styles.section__header}>
        <h2 className={styles.section__title}>Популярные товары</h2>
        <Link to="/catalog" className={styles.section__link}>
          Смотреть все →
        </Link>
      </div>
      <div className={styles.productGrid}>
        {popularProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : undefined}
            rating={product.rating}
            reviews={product.reviews}
            variant="compact"
            onAddToCart={() =>
              addToCart({
                id: String(product.id),
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image,
              })
            }
          />
        ))}
      </div>
    </section>
  )
}
