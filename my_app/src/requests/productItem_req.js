import { json } from "react-router-dom"
import { loadProductItem } from "../store/reducers/productItem"

export const load_product =  id => {
    return dispatch => {
    fetch(`http://localhost:3333/products/${id}`)
    .then(resp => resp.json())
    .then(json => {
        const [product_data] = json;
        const {title, description, price, image, discont_price} = product_data
        dispatch(loadProductItem({title, description, price, image, discont_price}))
    })
    }
}
