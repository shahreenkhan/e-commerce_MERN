import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../Constants/ProductConstant.js'


export const productsReducer = (state={products:[]},action) =>{
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return{
                loading:true,
                products:[],
            }
            case ALL_PRODUCT_SUCCESS:
            return{
                loading:false,
                products:action.payload.allproducts,
            }
            case ALL_PRODUCT_FAIL:
            return{
                loading:false,
                error:action.payload,
            }
            case CLEAR_ERRORS:
            return{
                ...state,
                error:null,
            }
    
    
        default: return state
            
    }
}

export const productDetailReducer = (state={products:[]},action) =>{
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return{
                loading:true,
                products:[],
            }
            case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                products:action.payload.productdetail,
            }
            case PRODUCT_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload,
            }
            case CLEAR_ERRORS:
            return{
                ...state,
                error:null,
            }
    
    
        default: return state
            
    }
}