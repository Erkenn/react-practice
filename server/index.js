import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())

const SECRET_KEY = 'your-secret-key-change-in-production'
const DB_PATH = path.join(__dirname, 'db.json')

function loadDB() {
  const data = fs.readFileSync(DB_PATH, 'utf-8')
  return JSON.parse(data)
}

function saveDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2))
}

app.post('/api/register', async (req, res) => {
  const { username, password, name } = req.body
  
  const db = loadDB()
  const exists = db.users.find(u => u.username === username)
  
  if (exists) {
    return res.status(400).json({ message: 'Пользователь уже существует' })
  }
  
  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = {
    id: Date.now(),
    username,
    password: hashedPassword,
    name,
    role: 'user'
  }
  
  db.users.push(newUser)
  saveDB(db)
  
  const token = jwt.sign({ id: newUser.id, username: newUser.username, role: newUser.role }, SECRET_KEY, { expiresIn: '24h' })
  
  res.json({
    token,
    user: { id: newUser.id, username: newUser.username, name: newUser.name, role: newUser.role }
  })
})

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  
  const db = loadDB()
  const user = db.users.find(u => u.username === username)
  
  if (!user) {
    return res.status(401).json({ message: 'Неверный логин или пароль' })
  }
  
  const isValid = await bcrypt.compare(password, user.password)
  
  if (!isValid) {
    return res.status(401).json({ message: 'Неверный логин или пароль' })
  }
  
  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '24h' })
  
  res.json({
    token,
    user: { id: user.id, username: user.username, name: user.name, role: user.role }
  })
})

app.get('/api/products', (req, res) => {
  const db = loadDB()
  res.json(db.products)
})

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]
  
  if (!token) {
    return res.status(401).json({ message: 'Требуется авторизация' })
  }
  
  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Недействительный токен' })
  }
}

app.get('/api/profile', authMiddleware, (req, res) => {
  const db = loadDB()
  const user = db.users.find(u => u.id === req.user.id)
  
  if (!user) {
    return res.status(404).json({ message: 'Пользователь не найден' })
  }
  
  res.json({ id: user.id, username: user.username, name: user.name, role: user.role })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
