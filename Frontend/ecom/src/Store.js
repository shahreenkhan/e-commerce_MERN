import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productDetailReducer, productsReducer } from './Reducers/ProductReducer';


const reducer = combineReducers({
    p:productsReducer,
    pDetail: productDetailReducer
})

let initializeState = {}

const Store = createStore(reducer,initializeState,composeWithDevTools(applyMiddleware(thunk)))

export default Store;
