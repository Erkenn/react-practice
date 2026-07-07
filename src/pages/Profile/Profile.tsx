import { useAuth } from '../../context/useAuth'

export function Profile() {
  const { user } = useAuth()

  return (
    <div className="page">
      <h1>Личный кабинет</h1>
      <p className="subtitle">Добро пожаловать, {user?.name}!</p>
      <p>Email: {user?.email}</p>
    </div>
  )
}
