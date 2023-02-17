import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import s from './index.module.css'

export default function SaleProductsPage() {
  return (
    <div>
      <p className={s.title_sale}>Sale</p>
      <ProductsContainer />
    </div>
  )
}
