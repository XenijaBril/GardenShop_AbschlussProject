import React from 'react'
import s from './index.module.css'

export default function CartCard({id, title, image, price, discont_price, count}) {

  return (
    <div className={s.cart}>
        <img src={`http://localhost:3333${image}`} alt={title}/>
        <div>
            <p>{title}</p> 
            <div>
                <button>+</button>
                <p>{count}</p>
                <button>-</button>
            </div>
        </div>
        <div>
            {/* <p>{ discont_price } x { count } = { discont_price * count }</p> */}
            <p>{discont_price} $</p>
            <p>{price} $</p>
        </div>
    </div>
  )
}
