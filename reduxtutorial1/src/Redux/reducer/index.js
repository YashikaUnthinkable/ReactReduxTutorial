import {combineReducers} from "redux";
import {productReducer, selectedProductReducer} from "./productReduce";
import { selectProduct } from "../actions/productAction";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})

export default reducers;