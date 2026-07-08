import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppProvider'
import { useAppContext } from './context/useAppContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Button, Avatar, Badge } from './UI'
import { Home } from './pages/Home/Home'
import { Catalog } from './pages/Catalog/Catalog'
import { Cart } from './pages/Cart/Cart'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { Profile } from './pages/Profile/Profile'
import './App.module.scss'

function Header() {
  const { user, logout, isAuth, cart } = useAppContext()

  return (
    <header className="header">
      <Link to="/" className="header__logo">🛍️ Shop</Link>
      <nav className="header__nav">
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/cart">
          Корзина
          {cart.length > 0 && <Badge variant="error" size="sm">{cart.length}</Badge>}
        </Link>
      </nav>
      <div className="header__actions">
        {isAuth ? (
          <>
            <Link to="/profile">
              <Avatar type="text" initials={user?.name?.charAt(0) || 'U'} size="sm" />
            </Link>
            <Button variant="textOnly" size="sm" onClick={logout}>
              Выйти
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="secondary" size="sm">Войти</Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Регистрация</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  )
}

function AppRoutes() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

function AppComponent() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  )
}

export const App = AppComponent
