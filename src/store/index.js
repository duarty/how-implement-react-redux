
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import cartReducer from './modules/cart/reducer'
import productsReducer from './modules/products/reducer';

// Aqui combinamos todos os reducers que importamos
const reducers = combineReducers({ 
    cart: cartReducer ,
    products: productsReducer
})

// Por fim passamos esses reducers para o createStore
const store = createStore(reducers, applyMiddleware(thunk))

export default store;
        