import studentsReducer from './studentsSlice'
import authReducer from './authSlide'
import businessReducer from './businessSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        students: studentsReducer,
        auth: authReducer,
        business:businessReducer
    }

})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
