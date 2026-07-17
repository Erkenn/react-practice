import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './AdminStats.module.scss'

interface Stats {
  productsCount: number
  usersCount: number
}

export function AdminStats() {
  const [stats, setStats] = useState<Stats>({ productsCount: 0, usersCount: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        const response = await axios.get('/api/admin/stats')
        setStats(response.data)
      } catch (error) {
        console.error('Ошибка загрузки статистики:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return <div className={styles.loading}>Загрузка статистики...</div>
  }

  return (
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
  )
}
