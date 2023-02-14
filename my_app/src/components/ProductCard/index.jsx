import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({id, title, image, price, discont_price}) {

  const product_url =`/products/${id}`

  const discount = Math.round(((price - discont_price) / price) * 100);

  return (
    <div className={s.product_card}>
      <div>
         <Link to={product_url}><img src={`http://localhost:3333${image}`} alt={title} /></Link>
         <button>Add to cart</button>
      </div>
      <div className={s.price}>
        <p>{discont_price}€</p>
        <p>{price}€</p>
        <p>{discount}%</p>
      </div> 
      <h3>{title}</h3>   
    </div>
  )
}
