import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/useAppContext'
import { Button, RadioButton, Input, Alert } from '../../UI'
import styles from './Cart.module.scss'

export function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, isAuth } = useAppContext()
  const [delivery, setDelivery] = useState('courier')
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [promoError, setPromoError] = useState('')

  const deliveryOptions = [
    { value: 'courier', label: 'Курьер (300₽)' },
    { value: 'pickup', label: 'Самовывоз (бесплатно)' },
    { value: 'post', label: 'Почта (200₽)' },
  ]

  const deliveryCost = delivery === 'courier' ? 300 : delivery === 'post' ? 200 : 0
  const discount = promoApplied ? cartTotal * 0.1 : 0
  const total = cartTotal + deliveryCost - discount

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'sale10') {
      setPromoApplied(true)
      setPromoError('')
    } else {
      setPromoApplied(false)
      setPromoError('Промокод не найден или истёк')
    }
  }

  if (cart.length === 0) {
    return (
      <div className="page">
        <h1>Корзина</h1>
        <div className={styles.empty}>
          <div className={styles.empty__icon}>🛒</div>
          <h2 className={styles.empty__title}>Корзина пуста</h2>
          <p className={styles.empty__text}>
            Добавьте товары из каталога, чтобы оформить заказ
          </p>
          <Link to="/catalog">
            <Button size="lg">Перейти в каталог</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Корзина</h1>

      <div className={styles.content}>
        <div className={styles.items}>
          {cart.map((item) => (
            <div key={item.id} className={styles.item}>
              <img src={item.image} alt={item.name} className={styles.item__image} />
              
              <div className={styles.item__info}>
                <h3 className={styles.item__name}>{item.name}</h3>
                <p className={styles.item__price}>{item.price}₽</p>
              </div>

              <div className={styles.item__quantity}>
                <button 
                  className={styles.quantityBtn}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  −
                </button>
                <span className={styles.quantityValue}>{item.quantity}</span>
                <button 
                  className={styles.quantityBtn}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <div className={styles.item__total}>
                {item.price * item.quantity}₽
              </div>

              <button 
                className={styles.removeBtn}
                onClick={() => removeFromCart(item.id)}
                title="Удалить"
              >
                ×
              </button>
            </div>
          ))}

          <button className={styles.clearAll} onClick={clearCart}>
            Очистить корзину
          </button>
        </div>

        <div className={styles.checkout}>
          <h2 className={styles.checkout__title}>Оформление заказа</h2>

          <div className={styles.section}>
            <h3 className={styles.section__title}>Способ доставки</h3>
            <div className={styles.deliveryOptions}>
              {deliveryOptions.map(option => (
                <RadioButton
                  key={option.value}
                  name="delivery"
                  label={option.label}
                  value={option.value}
                  checked={delivery === option.value}
                  onChange={() => setDelivery(option.value)}
                />
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.section__title}>Промокод</h3>
            <div className={styles.promoInput}>
              <Input
                placeholder="Введите промокод"
                value={promoCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPromoCode(e.target.value)}
                variant="none"
              />
              <Button 
                size="sm" 
                onClick={handleApplyPromo}
                disabled={promoApplied}
              >
                {promoApplied ? '✓ Применён' : 'Применить'}
              </Button>
            </div>
            {promoApplied && (
              <Alert
                title="Промокод применён!"
                description="Скидка 10% на весь заказ"
                variant="success"
                style="smooth"
              />
            )}

            {promoError && (
              <div style={{ marginTop: '12px' }}>
                <Alert
                  title="Ошибка"
                  description={promoError}
                  variant="error"
                  style="smooth"
                  onClose={() => setPromoError('')}
                />
              </div>
            )}
          </div>

          <div className={styles.total}>
            <div className={styles.total__row}>
              <span>Товары:</span>
              <span>{cartTotal}₽</span>
            </div>
            <div className={styles.total__row}>
              <span>Доставка:</span>
              <span>{deliveryCost}₽</span>
            </div>
            {discount > 0 && (
              <div className={`${styles.total__row} ${styles.total__row_discount}`}>
                <span>Скидка:</span>
                <span>-{discount.toFixed(0)}₽</span>
              </div>
            )}
            <div className={styles.total__divider}></div>
            <div className={styles.total__row}>
              <span className={styles.total__label}>Итого:</span>
              <span className={styles.total__value}>{total.toFixed(0)}₽</span>
            </div>
          </div>

          {isAuth ? (
            <Button size="lg" className={styles.checkoutBtn}>
              Оформить заказ
            </Button>
          ) : (
            <Link to="/login">
              <Button size="lg" className={styles.checkoutBtn}>
                Войти для оформления
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
