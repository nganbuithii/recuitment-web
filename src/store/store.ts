// import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from './studentsSlice'
import authReducer from './authSlide'
import businessReducer from './businessSlice'

// const store = configureStore({
//     reducer: {
//         students: studentsReducer,
//         auth: authReducer,
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;

import { configureStore } from '@reduxjs/toolkit'
import blogReducer from '../recruitment.reducer'
// import blogReducer from './blogSlide'

const store = configureStore({
    reducer: {
        blog: blogReducer,
        students: studentsReducer,
        auth: authReducer,
        business:businessReducer
    }

})
// lấy RooTState và AppDispatch từ store của chúng ta
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
