import { Link } from 'react-router-dom'
import { Button } from '../../UI'

export function Home() {
  return (
    <div className="page">
      <h1>Главная страница</h1>
      <p className="subtitle">Добро пожаловать!</p>
      <Link to="/catalog">
        <Button size="lg">Перейти в каталог</Button>
      </Link>
    </div>
  )
}
