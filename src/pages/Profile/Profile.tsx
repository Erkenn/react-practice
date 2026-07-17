import { useAppContext } from '../../context/useAppContext'
import { Button, Avatar } from '../../UI'
import styles from './Profile.module.scss'

export function Profile() {
  const { user, logout, cart, clearCart } = useAppContext()

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <Avatar 
          type="text" 
          initials={user?.name?.charAt(0) || 'U'} 
          size="lg" 
        />
        <div className={styles.header__info}>
          <h1 className={styles.title}>Личный кабинет</h1>
          <p className={styles.subtitle}>Добро пожаловать, {user?.name}!</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.card__title}>Информация о пользователе</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoItem__label}>Логин:</span>
              <span className={styles.infoItem__value}>{user?.username}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoItem__label}>Имя:</span>
              <span className={styles.infoItem__value}>{user?.name}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoItem__label}>Роль:</span>
              <span className={styles.infoItem__value}>
                {user?.role === 'admin' ? '👑 Администратор' : ' Пользователь'}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.card__title}>Корзина</h2>
          {cart.length === 0 ? (
            <p className={styles.empty}>Корзина пуста</p>
          ) : (
            <>
              <div className={styles.cartSummary}>
                <div className={styles.cartSummary__item}>
                  <span>Товаров:</span>
                  <strong>{cartItemsCount}</strong>
                </div>
                <div className={styles.cartSummary__item}>
                  <span>На сумму:</span>
                  <strong className={styles.cartSummary__total}>{cartTotal} ₽</strong>
                </div>
              </div>
              <div className={styles.actions}>
                <Button variant="secondary" onClick={() => window.location.href = '/cart'}>
                  Перейти в корзину
                </Button>
                <Button variant="secondary" onClick={clearCart}>
                  Очистить корзину
                </Button>
              </div>
            </>
          )}
        </div>

        <div className={styles.actions}>
          <Button variant="secondary" onClick={logout}>
            Выйти из аккаунта
          </Button>
        </div>
      </div>
    </div>
  )
}
