import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { load_product } from '../../requests/productItem_req';


export default function ProductDescrPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load_product(id))
  }, []);

  const { id } = useParams();

  const product = useSelector(state => state.product_item);

  const { title, description, price, discont_price,image } = product;

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
