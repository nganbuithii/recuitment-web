import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from './studentsSlice'
import authReducer from './authSlide'

const store = configureStore({
    reducer: {
        students: studentsReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
