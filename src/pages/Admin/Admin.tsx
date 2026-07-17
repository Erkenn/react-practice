/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useCallback } from 'react'
import { useAppContext } from '../../context/useAppContext'
import axios from 'axios'
import styles from './Admin.module.scss'

interface Product {
  id: number
  name: string
  price: number
  category: string
}

interface User {
  id: number
  username: string
  name: string
  role: string
}

interface Stats {
  productsCount: number
  usersCount: number
}

export function Admin() {
  const { user } = useAppContext()
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'users'>('dashboard')
  const [products, setProducts] = useState<Product[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [stats, setStats] = useState<Stats>({ productsCount: 0, usersCount: 0 })
  const [loading, setLoading] = useState(true)

    const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      if (activeTab === 'products') {
        const res = await axios.get('/api/admin/products')
        setProducts(res.data)
      } else if (activeTab === 'users') {
        const res = await axios.get('/api/admin/users')
        setUsers(res.data)
      } else if (activeTab === 'dashboard') {
        const res = await axios.get('/api/admin/stats')
        setStats(res.data)
      }
    } catch (error) {
      console.error('Ошибка загрузки данных:', error)
    }
    setLoading(false)
  }, [activeTab])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleDeleteProduct = async (id: number) => {
    if (!confirm('Удалить этот товар?')) return
    try {
      await axios.delete(`/api/admin/products/${id}`)
      fetchData()
    } catch (error) {
      console.error('Ошибка удаления:', error)
      alert('Не удалось удалить товар')
    }
  }

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
          📦 Товары
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'users' ? styles.tab_active : ''}`}
          onClick={() => setActiveTab('users')}
        >
          👥 Пользователи
        </button>
      </div>

      <div className={styles.content}>
        {loading ? (
          <div className={styles.loading}>Загрузка...</div>
        ) : activeTab === 'dashboard' ? (
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.stat__value}>{stats.productsCount}</div>
              <div className={styles.stat__label}>Товаров</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.stat__value}>{stats.usersCount}</div>
              <div className={styles.stat__label}>Пользователей</div>
            </div>
          </div>
        ) : activeTab === 'products' ? (
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Название</th>
                  <th>Цена</th>
                  <th>Категория</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price} ₽</td>
                    <td>{product.category}</td>
                    <td>
                      <button 
                        className={styles.btnDelete}
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Логин</th>
                  <th>Имя</th>
                  <th>Роль</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.username}</td>
                    <td>{u.name}</td>
                    <td>
                      <span className={u.role === 'admin' ? styles.badgeAdmin : styles.badgeUser}>
                        {u.role === 'admin' ? '👑 Админ' : ' Пользователь'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
