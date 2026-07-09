import { useAppContext } from '../../context/useAppContext'
import styles from './Admin.module.scss'

export function Admin() {
  const { user } = useAppContext()

  return (
    <div className="page">
      <h1>Панель администратора</h1>
      <p className="subtitle">Добро пожаловать, {user?.name}!</p>

      <div className={styles.adminPanel}>
        <h2>Управление</h2>
        <ul>
          <li>Управление товарами</li>
          <li>Управление заказами</li>
          <li>Управление пользователями</li>
        </ul>
      </div>
    </div>
  )
}
