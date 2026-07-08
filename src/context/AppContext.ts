import { createContext } from 'react'

// Типы
export interface User {
  email: string
  name: string
  role: 'user' | 'admin'
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface AppContextType {
  user: User | null
  isAuth: boolean
  isAdmin: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (email: string, name: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  cartTotal: number
}

export const AppContext = createContext<AppContextType | undefined>(undefined)
