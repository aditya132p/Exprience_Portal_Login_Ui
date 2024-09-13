import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loader: false
}
export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        handleLoader: (state, action) => {
            // const loader = action.payload;
            state.loader = action.payload
        }
    }
})

// if you make more reducer you need to add a action here 
export const { handleLoader } = authSlice.actions

export default authSlice.reducer