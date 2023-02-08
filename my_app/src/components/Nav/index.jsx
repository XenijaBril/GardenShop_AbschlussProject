import React from 'react'
import logo from './media/image 1.png'
import s from './index.module.css'
import { ShoppingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className={s.nav_field}>

        <div className={s.header_style} >
            <header >
                <Link to='/'><img src={logo} alt="logo" className={s.img_logo}/></Link>
                <Link to='categories'><button>Catalog</button></Link>
                
            </header>
        </div>

        <div>
            <nav className={s.nav_menu}>
                <Link to='categories'>Categories</Link>
                <Link to='/'>Coupon</Link>
                <Link to='/products'>Sale</Link>
                <Link to='/contacts'>Contacts</Link>
                <Link to='/cart' className={s.cart_style}><ShoppingOutlined /></Link>  

            </nav>
        </div>
    </div>
  )
}
