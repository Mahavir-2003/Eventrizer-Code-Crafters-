import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice";
import tenderReducer from "./tenderSlice";
import acceptReducer from "./acceptSlice";

const store = configureStore({
    reducer :{
        Events : eventReducer,
        accept : acceptReducer,
        Tenders : tenderReducer
    }
})

export default store;