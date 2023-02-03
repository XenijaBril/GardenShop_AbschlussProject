import React from 'react'
import { load_products } from '../../requests/products_req'
import SalesProductCard from '../SalesProductCard'


export default function SalesProductContainer() {
 
    load_products();
 
    return (
    
    <div>
        <SalesProductCard />
    </div>
  )
}
