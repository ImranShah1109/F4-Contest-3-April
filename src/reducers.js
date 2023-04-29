import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from "./actionTypes";
import { ADD_TO_CART,REMOVE_FROM_CART } from "./actionTypes";
import { combineReducers } from "redux";

const initialState = {
    loading : true,
    data : [],
    error : ""
}

const initialCartState = {
    items : 0,
    cart : []
}



const dataReducer = (state=initialState,action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return{
                ...state,
                loading : true
            }
        
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                loading : false,
                data : action.payload
            } 

        case FETCH_DATA_FAILURE:
            return{
                ...state,
                loading : false,
                error : action.payload
            }
    
        default:
            return state;  
    }
}


const cartReducer = (state=initialCartState,action) => {
        switch (action.type) {
            case ADD_TO_CART:
                return({
                    ...state,
                    items : state.items + 1,
                    cart : action.cartdata
                })
            
            case REMOVE_FROM_CART:
                return({
                    ...state,
                    items : state.items - 1,
                    cart : action.cartdata
                })

            default:
                return state
        }
}

const rootReducers = combineReducers({
    data : dataReducer,
    cart : cartReducer
})

export default rootReducers;

