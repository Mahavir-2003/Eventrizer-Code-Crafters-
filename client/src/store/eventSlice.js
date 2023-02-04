import { createSlice } from '@reduxjs/toolkit'


const EventsSlice = createSlice({
        name : 'Events',
        initialState : [],
        reducers : {
            add(state , action) {
                state = action.payload;
            }
        }
})


export const { add, remove } = EventsSlice.actions;
export default EventsSlice.reducer;