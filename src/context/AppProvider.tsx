import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import axios, { AxiosError } from 'axios'
import { AppContext } from './AppContext'
import type { CartItem, Product, UserRole, User } from './AppContext'

interface AuthSession {
  token: string
  user: User
}

interface ErrorResponse {
  message?: string
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(() => {
    const saved = localStorage.getItem('auth_session')
    return saved ? JSON.parse(saved) : null
  })

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const user = session?.user || null
  const isAuth = !!session
  const isAdmin = user?.role === 'admin'
  const role: UserRole = !isAuth ? 'guest' : isAdmin ? 'admin' : 'user'

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('/api/login', { username, password })
      const newSession: AuthSession = {
        token: response.data.token,
        user: response.data.user,
      }
      setSession(newSession)
      localStorage.setItem('auth_session', JSON.stringify(newSession))
      return { success: true as const }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      return {
        success: false as const,
        error: axiosError.response?.data?.message || 'Ошибка входа',
      }
    }
  }

  const register = async (username: string, password: string, name: string) => {
    try {
      const response = await axios.post('/api/register', { username, password, name })
      const newSession: AuthSession = {
        token: response.data.token,
        user: response.data.user,
      }
      setSession(newSession)
      localStorage.setItem('auth_session', JSON.stringify(newSession))
      return { success: true as const }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>
      return {
        success: false as const,
        error: axiosError.response?.data?.message || 'Ошибка регистрации',
      }
    }
  }

  const logout = () => {
    setSession(null)
    localStorage.removeItem('auth_session')
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

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity } : i))
  }

  const clearCart = () => {
    setCart([])
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products')
      setProducts(response.data)
    } catch (error) {
      console.error('Ошибка загрузки товаров:', error)
    }
  }

  return (
    <AppContext.Provider value={{
      user, isAuth, isAdmin, role, login, register, logout,
      cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal,
      products, fetchProducts,
    }}>
      {children}
    </AppContext.Provider>
  )
}
