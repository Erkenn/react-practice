import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/useAppContext'
import { Button } from '../../UI'
import styles from './Cart.module.scss'

export function Cart() {
  const { cart, removeFromCart, clearCart, cartTotal, isAuth } = useAppContext()

  if (cart.length === 0) {
    return (
      <div className="page">
        <h1>Корзина</h1>
        <p className="subtitle">Корзина пуста</p>
        <Link to="/catalog">
          <Button>Перейти в каталог</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="page">
      <h1>Корзина</h1>

      <div className={styles.cartItems}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.cartItem__image} />
            <div className={styles.cartItem__info}>
              <h3>{item.name}</h3>
              <p>{item.price}₽ × {item.quantity}</p>
            </div>
            <Button variant="textOnly" size="sm" onClick={() => removeFromCart(item.id)}>
              Удалить
            </Button>
          </div>
        ))}
      </div>

      <div className={styles.cartTotal}>
        <h2>Итого: {cartTotal}₽</h2>
        {isAuth ? (
          <Button size="lg">Оформить заказ</Button>
        ) : (
          <p>Войдите для оформления заказа</p>
        )}
        <Button variant="secondary" size="sm" onClick={clearCart}>
          Очистить корзину
        </Button>
      </div>
    </div>
  )
}
