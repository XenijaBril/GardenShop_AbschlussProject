import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { load_product } from '../../requests/productItem_req';


export default function ProductDescrPage() {
 
  const { product } = useParams();
  
  const dispatch = useDispatch();

  const product_item = useSelector(state => state.product_item);

  useEffect(() => {
    dispatch(load_product(product), 
    [dispatch, product])
  });
 
  const { title, description, price, discont_price, image } = product_item;

  //const discount = Math.round(((price - discont_price) / price) * 100);

  
  return (
    <div>
      <p>{title}</p>
      <div>
          <img src={`http://localhost:3333/${image}`} alt="" />
          <div>
          <p>{description}</p>
          <p>{price}€</p>
          <p>{discont_price}€</p>
          <p>-7%</p>
          <button>ADD TO CART</button>
        </div>
      </div>    
    </div>
  )
}
