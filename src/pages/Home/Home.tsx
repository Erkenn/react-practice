import { Link } from 'react-router-dom'
import { Button } from '../../UI'
import { useAppContext } from '../../context/useAppContext'
import styles from './Home.module.scss'

export function Home() {
  const { role, isAuth } = useAppContext()

  return (
    <div className="page">
      <div className={styles.hero}>
        <h1>Добро пожаловать в Shop</h1>
        <p className={styles.subtitle}>
          {role === 'guest' && 'Лучшие товары по лучшим ценам!'}
          {role === 'user' && 'Рады видеть вас снова!'}
          {role === 'admin' && 'Панель администратора доступна в меню.'}
        </p>
        
        <div className={styles.actions}>
          <Link to="/catalog">
            <Button size="lg">Перейти в каталог</Button>
          </Link>
          {!isAuth && (
            <Link to="/register">
              <Button variant="secondary" size="lg">Зарегистрироваться</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
