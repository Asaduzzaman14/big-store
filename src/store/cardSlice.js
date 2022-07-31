import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const cardSlice = createSlice({
    name: " card",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },

        remove(state, action) {
            return state.filter((item) => item._id !== action.payload)

        },
        update(state, action) {
            const { id, title } = action.payload;
            const isExist = state.data.filter(item => item.id === id);
            // console.log(isExist);
            // if (isExist) {
            //     isExist[0].title = title

            // }
        }



    }
})


export const { add, remove, update } = cardSlice.actions

export default cardSlice.reducer
