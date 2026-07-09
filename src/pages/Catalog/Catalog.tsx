import { useEffect } from 'react'
import { useAppContext } from '../../context/useAppContext'
import { ProductCard } from '../../UI'
import styles from './Catalog.module.scss'

export function Catalog() {
  const { products, fetchProducts, addToCart } = useAppContext()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if (products.length === 0) {
    return (
      <div className="page">
        <h1>Каталог товаров</h1>
        <p className="subtitle">Загрузка товаров...</p>
      </div>
    )
  }

  return (
    <div className="page">
      <h1>Каталог товаров</h1>
      <p className="subtitle">Найдено товаров: {products.length}</p>

      <div className={styles.productGrid}>
        {products.map((product) => (
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
    </div>
  )
}
