import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/useAppContext'
import { Button, Avatar, Badge } from '../../UI'
import styles from './Header.module.scss'

export function Header() {
  const { user, logout, isAuth, cart, role } = useAppContext()

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to="/" className={styles.header__logo}>
          <span className={styles.header__logoIcon}>🛍️</span>
          <span className={styles.header__logoText}>Shop</span>
        </Link>

        <nav className={styles.header__nav}>
          <Link to="/" className={styles.header__link}>
            Главная
          </Link>
          <Link to="/catalog" className={styles.header__link}>
            Каталог
          </Link>
          <Link to="/cart" className={styles.header__link}>
            Корзина
            {cart.length > 0 && (
              <Badge variant="error" size="sm">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </Badge>
            )}
          </Link>
          {role === 'admin' && (
            <Link to="/admin" className={styles.header__link}>
              Админ
            </Link>
          )}
        </nav>

        <div className={styles.header__actions}>
          {isAuth ? (
            <>
              <Link to="/profile" className={styles.header__profile}>
                <Avatar 
                  type="text" 
                  initials={user?.name?.charAt(0) || 'U'} 
                  size="md" 
                />
                <span className={styles.header__userName}>{user?.name}</span>
              </Link>
              <Button 
                variant="textOnly" 
                size="sm" 
                onClick={logout}
                className={styles.header__logout}
              >
                Выйти
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="secondary" size="sm">
                  Войти
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">
                  Регистрация
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
