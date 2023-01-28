import React from 'react'

export default function CategoriesSection({id, title, image}) {
  return (
    <section>
      <div>
      <p>Categories</p>
      <img src={image} alt={title} />
      <p>{title}</p>


        
    </div>
    </section>
        
  )
}
