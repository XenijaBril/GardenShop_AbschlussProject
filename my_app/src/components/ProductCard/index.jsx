import React from 'react'
import s from './index.module.css'

export default function ProductCard({id, title, image, price, discont_price}) {
  return (
    <div className={s.product_card}>
      <img src={`http://localhost:3333${image}`} alt={title} />
      <p>{discont_price} €</p>
      <p>old price {price} €</p>
      <p>{title}</p>
      <button className={s.product_cart_btn}>Add to cart</button>

    </div>
  )
}
