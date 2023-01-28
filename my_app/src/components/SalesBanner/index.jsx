import React from 'react'
import saleImg from './mediaa/image 2.png'
import s from './index.module.css'

export default function SalesBanner() {
  return (
    <section>
      <div className={s.sales_banner}>
        <h2 className={s.title_sale}>Sale-Finale:</h2>
        <h3 className={s.about_sale}>Up to 70% discont</h3>
        <button className={s.button_promotions}>All promotions</button>
        <button className={s.button_more}>More...</button>
        <img src={saleImg} alt="saleImg" />
      </div>

    </section>

    
  

    
  )
}
