import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice.ts"



export const store = configureStore({
    reducer: {
        user: userReducer, //? here we will manage user state
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch