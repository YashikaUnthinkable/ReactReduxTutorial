import { ActionTypes } from "../contants/actionType"
export const setProduct= (products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}
export const selectProduct = (products)=>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products   
    }
}

export const removeSelectProduct = (products)=>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,  
    }
}