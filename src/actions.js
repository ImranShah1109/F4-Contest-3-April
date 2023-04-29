import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from "./actionTypes";
import { ADD_TO_CART,REMOVE_FROM_CART } from "./actionTypes";
import axios from "axios";

export const fetchDataRequest = () => ({
    type : FETCH_DATA_REQUEST
})

export const fetchDataSuccess = (data) => ({
    type : FETCH_DATA_SUCCESS,
    payload : data
})

export const fetchDataFailure = (error) => ({
    type : FETCH_DATA_FAILURE,
    payload: error
})


export const fetchData = () => async(dispatch) =>{
    dispatch(fetchDataRequest)

    try{
        let response = await axios.get("https://dummyjson.com/products");
        dispatch(fetchDataSuccess(response.data.products));
    }
    catch(error){
        dispatch(fetchDataFailure(error.message));
    }
}


export const addToCart = (cart) =>({
    type : ADD_TO_CART,
    cartdata : cart
})

export const removeFromCart = (cart) =>({
    type : REMOVE_FROM_CART,
    cartdata : cart
})