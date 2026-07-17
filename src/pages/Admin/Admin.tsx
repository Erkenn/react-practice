import { useState } from 'react'
import { useAppContext } from '../../context/useAppContext'
import { AdminStats } from '../../widgets/AdminStats/AdminStats'
import { ProductTable } from '../../widgets/ProductTable/ProductTable'
import { UserTable } from '../../widgets/UserTable/UserTable'
import styles from './Admin.module.scss'

export function Admin() {
  const { user } = useAppContext()
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'users'>('dashboard')

  return (
    <div className={styles.admin}>
      <div className={styles.header}>
        <h1 className={styles.title}>Панель администратора</h1>
        <p className={styles.subtitle}>Добро пожаловать, {user?.name}!</p>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'dashboard' ? styles.tab_active : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Статистика
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'products' ? styles.tab_active : ''}`}
          onClick={() => setActiveTab('products')}
        >
           Товары
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'users' ? styles.tab_active : ''}`}
          onClick={() => setActiveTab('users')}
        >
          👥 Пользователи
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'dashboard' && <AdminStats />}
        {activeTab === 'products' && <ProductTable />}
        {activeTab === 'users' && <UserTable />}
      </div>
    </div>
  )
}
