import { createSlice } from '@reduxjs/toolkit'


const acceptSlice = createSlice({
        name : 'accept',
        initialState : [],
        reducers : {
            add(state , action) {
                state = action.payload;
            }
        }
})


export const { add, remove } = acceptSlice.actions;
export default acceptSlice.reducer;