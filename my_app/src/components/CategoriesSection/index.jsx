import React from 'react'
import CategoriesContainer from '../CategoriesContainer'
import s from './index.module.css'

export default function CategoriesSection() {
  return (
    <section>
      <div>
        <p className={s.categ_text}>Categories</p>
        <CategoriesContainer />
        
       
      </div>
    </section>
        
  )
}
