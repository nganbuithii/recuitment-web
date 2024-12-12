import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../services/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import axios from "axios";

export interface Student {
    fullName: string;
    school: string;
    birthDate: string;
    major: string;
    position: string;
    registerType: string;
    email: string;
    phone: string;
    role:string;
    fileUrl?: string; 
    password:string;
}

interface StudentsState {
    students: Student[];
    loading: boolean;
    error: string | null;
}

const initialState: StudentsState = {
    students: [],
    loading: false,
    error: null,
};
export const createStudent = createAsyncThunk(
    "students/createStudent",
    async (student: Student & { file?: File }, { rejectWithValue }) => {
        try {
            console.log("Start creating student:", student);
            let fileUrl = "";

            if (student.file) {
                const formData = new FormData();
                formData.append("file", student.file);
                formData.append("upload_preset", "recuitment");
                formData.append("cloud_name", "dp0daqkme");

                const response = await axios.post(
                    `https://api.cloudinary.com/v1_1/dp0daqkme/image/upload`, 
                    formData
                );

                fileUrl = response.data.secure_url;
            }

            // Loại bỏ file khỏi object trước khi lưu vào Firestore
            const { file, ...studentToSave } = student;

            // Gửi URL tệp vào Firestore 
            const docRef = await addDoc(collection(db, "students"), {
                ...studentToSave,
                fileUrl: fileUrl || studentToSave.fileUrl || "",
            });

            return { 
                id: docRef.id, 
                ...studentToSave, 
                fileUrl 
            };
        } catch (error) {
            console.error("Error creating student:", error);
            return rejectWithValue(
                error instanceof Error ? error.message : "Unknown error"
            );
        }
    }
);

const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createStudent.pending, (state) => {
                state.loading = true;
                console.log("Bắt đầu tạo sinh viên...");
            })
            .addCase(createStudent.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.students.push(payload); 
                console.log("Thêm sinh viên thành công");
            })
            .addCase(createStudent.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload as string; 
                console.log("Lỗi khi tạo sinh viên:", payload);
            });
    },
});

export default studentsSlice.reducer;
