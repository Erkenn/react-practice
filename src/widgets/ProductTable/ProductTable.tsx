/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import styles from './ProductTable.module.scss'

interface Product {
  id: number
  name: string
  price: number
  category: string
}

export function ProductTable() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/admin/products')
      setProducts(response.data)
    } catch (error) {
      console.error('Ошибка загрузки товаров:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleDeleteProduct = async (id: number) => {
    if (!confirm('Удалить этот товар?')) return
    try {
      await axios.delete(`/api/admin/products/${id}`)
      fetchProducts()
    } catch (error) {
      console.error('Ошибка удаления:', error)
      alert('Не удалось удалить товар')
    }
  }

  if (loading) {
    return <div className={styles.loading}>Загрузка товаров...</div>
  }

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Категория</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price} ₽</td>
              <td>{product.category}</td>
              <td>
                <button 
                  className={styles.btnDelete}
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
