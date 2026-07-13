import { useEffect, useState, useMemo } from 'react'
import { useAppContext } from '../../context/useAppContext'
import { ProductCard, Badge, Select, RadioButton, SegmentedControl } from '../../UI'
import styles from './Catalog.module.scss'

export function Catalog() {
  const { products, fetchProducts, addToCart } = useAppContext()

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string | null>(null)
  const [sort, setSort] = useState('default')
  const [view, setView] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts()
    }
  }, [products.length, fetchProducts])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (search) {
      result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category) {
      result = result.filter(p => p.category === category)
    }

    if (sort === 'price_asc') result.sort((a, b) => a.price - b.price)
    if (sort === 'price_desc') result.sort((a, b) => b.price - a.price)
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [products, search, category, sort])

  const categories = [
    { value: 'shoes', label: 'Обувь' },
    { value: 'clothes', label: 'Одежда' },
    { value: 'accessories', label: 'Аксессуары' },
  ]

  const sortOptions = [
    { value: 'default', label: 'По умолчанию' },
    { value: 'price_asc', label: 'Сначала дешевые' },
    { value: 'price_desc', label: 'Сначала дорогие' },
    { value: 'rating', label: 'По рейтингу' },
  ]

  return (
    <div className={styles.catalog}>
      <div className={styles.header}>
        <h1 className={styles.title}>Каталог товаров</h1>
        <Badge variant="primary" size="md">
          Найдено: {filteredProducts.length}
        </Badge>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchSortRow}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="🔍 Поиск товаров..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.sortWrapper}>
            <Select
              label=""
              options={sortOptions}
              value={sort}
              onChange={(val: string) => setSort(val)}
            />
          </div>
        </div>

        <div className={styles.filtersRow}>
          <div className={styles.filters}>
            <span className={styles.filters__label}>Категории:</span>
            <div className={styles.filters__list}>
              {categories.map(cat => (
                <RadioButton
                  key={cat.value}
                  name="category"
                  label={cat.label}
                  value={cat.value}
                  checked={category === cat.value}
                  onChange={() => setCategory(category === cat.value ? null : cat.value)}
                />
              ))}
            </div>
            
            {category && (
              <button 
                className={styles.activeFilter}
                onClick={() => setCategory(null)}
                title={`Сбросить: ${categories.find(c => c.value === category)?.label}`}
              >
                <span className={styles.activeFilter__close}>×</span>
              </button>
            )}
          </div>

          <div className={styles.viewSwitcher}>
            <SegmentedControl
              options={[
                { value: 'grid', label: 'Сетка' },
                { value: 'list', label: 'Список' },
              ]}
              value={view}
              onChange={(val: string) => setView(val as 'grid' | 'list')}
            />
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className={styles.empty}>
          <p> Товары не найдены. Попробуйте изменить фильтры.</p>
        </div>
      ) : (
        <div className={`${styles.productGrid} ${styles[`productGrid_${view}`]}`}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : undefined}
              rating={product.rating}
              reviews={product.reviews}
              variant={view === 'list' ? 'detailed' : 'compact'}
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
      )}
    </div>
  )
}
