import { createSlice } from "@reduxjs/toolkit";

const billGatesMoneySlice = createSlice({
    name: "BillGatesMoney",
    initialState: {
        remainMoney: 100000000000,
        sellMoney: 0,
        allMoney: 100000000000,

    },
    reducers: {
        buySomething: (state, action) => {
            if (state.remainMoney >= action.payload) {
                state.remainMoney -= action.payload
                state.sellMoney += action.payload
            }
        },
        sellSomething: (state, action) => {
            state.remainMoney += action.payload
            state.sellMoney -= action.payload



        }
    }


})

export default billGatesMoneySlice.reducer;
export const { buySomething, sellSomething } = billGatesMoneySlice.actions