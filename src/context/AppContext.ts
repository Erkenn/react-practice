import { createContext } from 'react'

export interface User {
  id: number
  username: string
  name: string
  role: 'admin' | 'user'
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number
  category: string
  image: string
  rating: number
  reviews: number
}

export type UserRole = 'guest' | 'user' | 'admin'

export interface AppContextType {
  user: User | null
  isAuth: boolean
  isAdmin: boolean
  role: UserRole
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (username: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  products: Product[]
  fetchProducts: () => Promise<void>
}

export const AppContext = createContext<AppContextType | undefined>(undefined)
