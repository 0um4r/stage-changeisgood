import { configureStore } from "@reduxjs/toolkit";
import birthdayReducer from "./BirthdaySlice";

export const store = configureStore({
    reducer: {
        birthdays: birthdayReducer,
    }
});