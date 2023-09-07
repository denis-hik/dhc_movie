import {configureStore} from "@reduxjs/toolkit";
import baseReducer from "./reducer";
export const store = configureStore({
    reducer: {
        base: baseReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
