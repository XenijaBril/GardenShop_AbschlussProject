import React from 'react'
import logo from './media/image 1.png'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className={s.nav_field}>

        <div className={s.header_style} >
            <header >
                <img src={logo} alt="logo" className={s.img_logo}/>
                <button>Catalog</button>
                
            </header>
        </div>

        <div>
            <nav className={s.nav_menu}>
                <Link to='/'>Categories</Link>
                <Link to='/coupon'>Coupon</Link>
                <Link to='/promotions'>Promotions</Link>
                <Link to='/contacts'>Contacts</Link>
                <Link to='/cart'>Cart</Link>   
            </nav>
        </div>
    </div>
  )
}
