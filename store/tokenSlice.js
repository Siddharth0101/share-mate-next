const { createSlice } = require("@reduxjs/toolkit");

const TokenSlice=createSlice({
    name:"token",
    initialState:{
        isLogged:"",
        displayName:"",
        id:"",
    },
    reducers:{

    }
})
export const TokenSliceActions=TokenSlice.actions
export default TokenSlice