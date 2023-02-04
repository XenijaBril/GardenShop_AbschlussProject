import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import s from './index.module.css'

export default function ProductsPage() {
  return (
    <div className={s.products_containr}>
      <h2>Promotions</h2>
      <ProductsContainer />
    </div>
  )
}
