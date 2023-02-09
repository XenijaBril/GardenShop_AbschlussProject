import { loadProductItem } from "../store/reducers/productItem"

export const load_product =  product => {
    return dispatch => {
    fetch(`http://localhost:3333/products/${product}`)
    .then(resp => resp.json())
    .then(json => dispatch(loadProductItem(json[0])))
    }
}
