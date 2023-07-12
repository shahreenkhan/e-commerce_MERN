import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../Constants/ProductConstant.js'
import axios from 'axios'


export const getProduct = () => async(dispatch) => {
    try {
        dispatch({type: ALL_PRODUCT_REQUEST})
        let link = 'http://localhost:3001/api/products'
        // let link = '/api/products'

        const { data } = await axios.get(link)
        console.log(data)

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload: err.respose.data.message
        })
    }
}

export const getProductDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        let link = `http://localhost:3001/api/productdetail/${id}`
        // console.log(link)

        const { data } = await axios.get(link)
        console.log(data)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload: err.respose.data.message
        })
    }
}

export const clearErrors = () => (dispatch) =>{
    dispatch({ type: CLEAR_ERRORS})
}



