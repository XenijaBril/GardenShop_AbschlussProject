import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../../components/CartCard';
import { clearCard } from '../../store/reducers/cart';
import s from './index.module.css'

export default function CartPage() {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const clear_cart = () => dispatch(clearCard());


  //console.log(cart);

  return (
    <div className={s.cart}>
      {
        cart.length === 0 
        ? <p>The cart is empty...</p>
        : <div>
            {
              cart.map(el => <CartCard key={el.id} {...el}/>)
            }
          </div>
      }
      
      <div>
        <p>Total: </p>
        <input type='number' placeholder='Phone number' />
        <button>Order</button>
        <button onClick={clear_cart}>Clear card</button>
      </div>
    </div>
  )
}
