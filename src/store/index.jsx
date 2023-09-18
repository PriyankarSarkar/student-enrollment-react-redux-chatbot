import {configureStore} from "@reduxjs/toolkit";
import UserDataSliceReducer from "./Slices/UserDataSlice";

const store = configureStore({
    reducer:{
        UserDataSliceReducer
    }
});

export default store;