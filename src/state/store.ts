import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice.ts"

export const store =  configureStore({
    reducer: {
        products: productReducer,
        // Add other reducers here if needed...
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;