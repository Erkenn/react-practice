import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Button, Badge, Alert, ProductCard } from '../../UI'
import { useAppContext } from '../../context/useAppContext'
import styles from './Home.module.scss'

export function Home() {
  const { role, isAuth, products, fetchProducts, addToCart, user } = useAppContext()

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts()
    }
  }, [products.length, fetchProducts])

  const popularProducts = products.slice(0, 4)

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <div className={styles.hero__badgeWrapper}>
            <Badge variant="primary" size="md">
              Новая коллекция 2026
            </Badge>
          </div>
          <h1 className={styles.hero__title}>
            {role === 'guest' && 'Стиль начинается здесь'}
            {role === 'user' && `С возвращением, ${user?.name || 'друг'}!`}
            {role === 'admin' && 'Панель управления'}
          </h1>
          <p className={styles.hero__subtitle}>
            Откройте для себя лучшие товары по лучшим ценам. 
            Качественные бренды, быстрая доставка, гарантия возврата.
          </p>
          <div className={styles.hero__actions}>
            <Link to="/catalog">
              <Button size="lg">Перейти в каталог</Button>
            </Link>
            {!isAuth && (
              <Link to="/register">
                <Button variant="secondary" size="lg">Создать аккаунт</Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <Alert
          title="Скидка 20% на первый заказ!"
          description="Зарегистрируйтесь сегодня и получите промокод на скидку. Предложение ограничено."
          variant="success"
          style="smooth"
        />
      </section>

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

      <section className={styles.section}>
        <h2 className={styles.section__title}>Категории</h2>
        <div className={styles.categories}>
          <Link to="/catalog" className={styles.categoryCard}>
            <div className={`${styles.categoryCard__icon} ${styles.categoryCard__icon_shoes}`}>
              👟
            </div>
            <h3 className={styles.categoryCard__title}>Обувь</h3>
            <p className={styles.categoryCard__text}>Кроссовки, туфли, ботинки</p>
          </Link>

          <Link to="/catalog" className={styles.categoryCard}>
            <div className={`${styles.categoryCard__icon} ${styles.categoryCard__icon_clothes}`}>
              👕
            </div>
            <h3 className={styles.categoryCard__title}>Одежда</h3>
            <p className={styles.categoryCard__text}>Футболки, куртки, джинсы</p>
          </Link>

          <Link to="/catalog" className={styles.categoryCard}>
            <div className={`${styles.categoryCard__icon} ${styles.categoryCard__icon_accessories}`}>
              ⌚
            </div>
            <h3 className={styles.categoryCard__title}>Аксессуары</h3>
            <p className={styles.categoryCard__text}>Часы, сумки, очки</p>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.section__title}>Почему выбирают нас</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.feature__icon}>🚚</div>
            <h3 className={styles.feature__title}>Быстрая доставка</h3>
            <p className={styles.feature__text}>Доставим заказ за 1-3 дня в любой город</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.feature__icon}>✅</div>
            <h3 className={styles.feature__title}>Гарантия качества</h3>
            <p className={styles.feature__text}>Только оригинальные товары от проверенных брендов</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.feature__icon}>💳</div>
            <h3 className={styles.feature__title}>Удобная оплата</h3>
            <p className={styles.feature__text}>Принимаем карты, электронные кошельки и наличные</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.feature__icon}>🔄</div>
            <h3 className={styles.feature__title}>Возврат 30 дней</h3>
            <p className={styles.feature__text}>Не подошёл товар — вернём деньги без вопросов</p>
          </div>
        </div>
      </section>
    </div>
  )
}
