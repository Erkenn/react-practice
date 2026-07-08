import { useAppContext } from '../../context/useAppContext'
import { Button } from '../../UI'

export function Profile() {
  const { user, cart, cartTotal, clearCart } = useAppContext()

  return (
    <div className="page">
      <h1>Личный кабинет</h1>
      <p className="subtitle">Добро пожаловать, {user?.name}!</p>
      
      <div className="profile-info">
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Роль:</strong> {user?.role === 'admin' ? 'Администратор' : 'Пользователь'}</p>
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
