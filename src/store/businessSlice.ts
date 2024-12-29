import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

interface BusinessState {
    loading: boolean;
    error: string | null;
}

const initialState: BusinessState = {
    loading: false,
    error: null,
};

export const saveBusiness = createAsyncThunk(
    "business/saveBusiness",
    async (businessData: any, { rejectWithValue }) => {
        try {
            const docRef = await addDoc(collection(db, "businesses"), businessData);
            return docRef.id;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const businessSlice = createSlice({
    name: "business",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveBusiness.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(saveBusiness.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(saveBusiness.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default businessSlice.reducer;
