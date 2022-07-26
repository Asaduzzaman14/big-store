import { createSlice } from "@reduxjs/toolkit"

const initialState = []




const productSlice = createSlice({
    name: " card",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)


        },
        remove(state, action) {
            state = state.filter((item) => item.id !== action.payload)
        }
    }
})


export const { add, remove } = productSlice.actions

export default productSlice.reducer
