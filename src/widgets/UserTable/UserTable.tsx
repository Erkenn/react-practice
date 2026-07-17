import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './UserTable.module.scss'

interface User {
  id: number
  username: string
  name: string
  role: string
}

export function UserTable() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await axios.get('/api/admin/users')
        setUsers(response.data)
      } catch (error) {
        console.error('Ошибка загрузки пользователей:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return <div className={styles.loading}>Загрузка пользователей...</div>
  }

  return (
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
  )
}
