import { createSlice } from '@reduxjs/toolkit'


const TendersSlice = createSlice({
        name : 'Tenders',
        initialState : [],
        reducers : {
            add(state , action) {
                state = action.payload;
            }
        }
})


export const { add, remove } = TendersSlice.actions;
export default TendersSlice.reducer;