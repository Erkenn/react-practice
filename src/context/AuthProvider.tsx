import { useState } from 'react'
import type { ReactNode } from 'react'
import { AuthContext } from './AuthContext'

interface StoredUser {
  email: string
  name: string
  password: string
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  const login = async (email: string, password: string) => {
    // Имитация задержки
    await new Promise(resolve => setTimeout(resolve, 500))

    const users: StoredUser[] = JSON.parse(localStorage.getItem('users') || '[]')
    const found = users.find(u => u.email === email && u.password === password)

    if (found) {
      const currentUser = { email: found.email, name: found.name }
      setUser(currentUser)
      localStorage.setItem('user', JSON.stringify(currentUser))
      return { success: true }
    }

    return { success: false, error: 'Неверный email или пароль' }
  }

  const register = async (email: string, name: string, password: string) => {
    // Имитация задержки
    await new Promise(resolve => setTimeout(resolve, 500))

    const users: StoredUser[] = JSON.parse(localStorage.getItem('users') || '[]')
    const exists = users.find(u => u.email === email)

    if (exists) {
      return { success: false, error: 'Пользователь с таким email уже существует' }
    }

    users.push({ email, name, password })
    localStorage.setItem('users', JSON.stringify(users))

    const currentUser = { email, name }
    setUser(currentUser)
    localStorage.setItem('user', JSON.stringify(currentUser))

    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}
