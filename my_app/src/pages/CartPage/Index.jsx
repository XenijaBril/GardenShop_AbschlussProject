import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../../components/CartCard';

export default function CartPage() {

  const cart = useSelector(state => state.cart)

  //console.log(cart);

  return (
    <div>
        {
          cart.map(el => <CartCard key={el.id} {...el}/>)
        }
    </div>
  )
}
