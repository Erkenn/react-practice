import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const session = localStorage.getItem('auth_session')
  if (session) {
    const { token } = JSON.parse(session)
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_session')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
