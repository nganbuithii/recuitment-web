// store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Cấu trúc AuthState mới, mở rộng user để chứa nhiều thông tin
interface User {
    uid: string;
    email: string;
    role: string;
    displayName?: string;
    [key: string]: any; // Cho phép lưu các trường tùy chỉnh khác
}

interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // setUser nhận payload là thông tin user đầy đủ
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

export const { setUser, clearUser, setError } = authSlice.actions;
export default authSlice.reducer;
