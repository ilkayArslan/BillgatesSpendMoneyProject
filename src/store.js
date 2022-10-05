import { configureStore } from "@reduxjs/toolkit";
import billgatesMoneySlice from "./redux/billgatesMoneySlice";
import ProductsSlice from "./redux/productSlice";
export const store = configureStore({
    reducer: {
        BillGatesMoney: billgatesMoneySlice,
        Products: ProductsSlice
    }
})