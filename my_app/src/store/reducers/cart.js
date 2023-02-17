const defaultState = [];

const ADD_TO_CARD = 'ADD_TO_CARD';

export const AddToCart = payload => ({ type: ADD_TO_CARD, payload});

const checkProduct = (state, payload) => {

 const productInState = state.find(el => el.id === payload.id);
    if (productInState) {
        productInState.count++
        return [...state]
    } else {
        return [...state, {
            ...payload,
            count:1
        }]
    }   
}

export const cartReducer = (state = defaultState, action) => {
  if (action.type === ADD_TO_CARD){
    return checkProduct(state, action.payload)
  } else {
    return state
  }
}