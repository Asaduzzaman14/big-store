
import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./cardSlice"
import productsReducer from "./ProductsSlice"

const store = configureStore({
    reducer: {
        product: productReducer,
        products: productsReducer
    }
})

export default store;