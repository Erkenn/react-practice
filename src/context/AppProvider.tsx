import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { AppContext } from './AppContext'
import type { User, CartItem } from './AppContext'

interface StoredUser extends User {
  password: string
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const isAuth = !!user
  const isAdmin = user?.role === 'admin'

  const login = async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const users: StoredUser[] = JSON.parse(localStorage.getItem('users') || '[]')
    const found = users.find(u => u.email === email && u.password === password)

    if (found) {
      const currentUser: User = { email: found.email, name: found.name, role: found.role || 'user' }
      setUser(currentUser)
      localStorage.setItem('user', JSON.stringify(currentUser))
      return { success: true }
    }
    return { success: false, error: 'Неверный email или пароль' }
  }

  const register = async (email: string, name: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    const users: StoredUser[] = JSON.parse(localStorage.getItem('users') || '[]')
    const exists = users.find(u => u.email === email)

    if (exists) {
      return { success: false, error: 'Пользователь с таким email уже существует' }
    }

    const newUser: StoredUser = { email, name, password, role: 'user' }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    const currentUser: User = { email, name, role: 'user' }
    setUser(currentUser)
    localStorage.setItem('user', JSON.stringify(currentUser))
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <AppContext.Provider value={{
      user, isAuth, isAdmin, login, register, logout,
      cart, addToCart, removeFromCart, clearCart, cartTotal,
    }}>
      {children}
    </AppContext.Provider>
  )
}
