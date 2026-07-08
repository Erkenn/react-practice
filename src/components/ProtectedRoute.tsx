import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/useAppContext'
import type { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuth } = useAppContext()

  if (!isAuth) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}