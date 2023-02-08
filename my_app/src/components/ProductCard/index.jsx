import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({id, title, image, price, discont_price}) {

  const product_url =`/products/${id}`

  return (
    <div className={s.product_card}>
      <Link to={product_url}><img src={`http://localhost:3333${image}`} alt={title} /></Link>
      <div className={s.price}>
        <p className={s.discount_price}>{discont_price}€</p>
        <p className={s.old_price}>{price}€</p>
        <p className={s.procent_price}>-7 %</p>
      </div>
      <p className={s.title_product}>{title}</p>
      <button className={s.product_cart_btn}>Add to cart</button>

    </div>
  )
}
