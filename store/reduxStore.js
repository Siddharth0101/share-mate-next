import TokenSlice from "./tokenSlice";

const { configureStore } = require("@reduxjs/toolkit");

const ReduxStore=configureStore({
    reducer:{
        token:TokenSlice.reducer
    }
})
export default ReduxStore