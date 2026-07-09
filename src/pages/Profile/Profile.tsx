import { useAppContext } from '../../context/useAppContext'
import { Button } from '../../UI'
import styles from './Profile.module.scss'

export function Profile() {
  const { user, cart, cartTotal, clearCart, role } = useAppContext()

  return (
    <div className="page">
      <h1>Личный кабинет</h1>
      <p className="subtitle">Добро пожаловать, {user?.name}!</p>

      <div className={styles.profileInfo}>
        <p><strong>Логин:</strong> {user?.username}</p>
        <p><strong>Роль:</strong> {role === 'admin' ? 'Администратор' : 'Пользователь'}</p>
      </div>

      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <p><strong>Товаров:</strong> {cart.length}</p>
          <p><strong>Сумма:</strong> {cartTotal}₽</p>
          <Button variant="secondary" size="sm" onClick={clearCart}>
            Очистить корзину
          </Button>
        </>
      )}
    </div>
  )
}
