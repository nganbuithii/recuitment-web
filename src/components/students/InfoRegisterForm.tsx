import React, { useState } from "react";
import { CalendarIcon, PlusIcon, SendIcon, UploadIcon, XIcon } from "../common/Icons";
import SelectField from "../common/SelectField";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { createStudent, Student } from "../../store/studentsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
interface FormData {
    fullName: string;
    school: string;
    birthDate: string;
    major: string;
    position: string;
    registerType: string;
    email: string;
    phone: string;
    role: string;
    file: string | File;
    password:string,
}

const InfoRegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        school: "",
        birthDate: "",
        major: "",
        position: "Online",
        registerType: "Developer",
        email: "",
        phone: "",
        password:"",
        role: "STUDENT",
        file: "" as File | string,
    });
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState<any>({});
    const { loading } = useSelector((state: RootState) => state.students);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const errors: any = {};
        const requiredFields: (keyof FormData)[] = [
            "fullName", "school", "birthDate", "major", "position", "registerType", "email", "phone", "file","password"
        ];

        // Kiểm tra các trường bắt buộc
        requiredFields.forEach(field => {
            if (!formData[field]) {
                errors[field] = true;
            }
        });
        
 // Kiểm tra độ dài mật khẩu
 if (formData.password.length < 6) {
    errors.password = "Mật khẩu phải có ít nhất 6 ký tự";
}

        return Object.keys(errors).length === 0 ? null : errors;
    };


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            console.log("File selected:", files[0]);
            setFormData((prev) => ({ ...prev, file: files[0] }));
        } else {
            console.log("No file selected");
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors = validate();
        if (errors) {
            console.log("errors", errors);
            setFormErrors(errors);
            return;
        }
    
        const { file, email, password, ...otherFields } = formData;
    
        try {
            // Tạo tài khoản Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Firebase User Created:", userCredential.user);
    
            // Sau khi tạo tài khoản thành công, lưu thông tin Student
            const studentData: Student & { file?: File } = {
                ...otherFields,
                email,
                password,
                file: file instanceof File ? file : undefined,
            };
            
            const result = await dispatch(createStudent(studentData));
            if (createStudent.fulfilled.match(result)) {
                navigate("/login");
            }
        } catch (error) {
            console.error("Error creating Firebase user:", error);
            // Xử lý lỗi (ví dụ: thông báo người dùng)
        }
    };
    

    return (
        <div className="bg-gray-100  flex justify-center items-center pb-10">
            <div className="rounded-xl w-[343px] sm:w-[1270px]">
                <h1 className="text-[#F26D21] text-left font-roboto text-2xl sm:text-[32px] font-bold uppercase mb-3 pt-8">
                    Điền thông tin đăng ký
                </h1>

                <form onSubmit={handleSubmit}>
                    {/* Khu vực tải file */}
                    <div className="w-[50%] sm:w-[50%] flex flex-col mb-5">
                        <label className="text-sm sm:text-base font-medium text-gray-700">
                            Chọn file <span className="text-orange-600">*</span>
                        </label>
                        <div className="flex items-center mt-2">
                            <div
                                className={`rounded-lg p-4 w-56 mr-4 flex flex-col items-center justify-center border text-center bg-white ${formErrors.file ? 'border-red-500' : 'border-white'
                                    }`}
                            >
                                <UploadIcon className="mb-4" />
                                <button
                                    type="button"
                                    className="bg-[#F26D21] text-white text-xs sm:text-base px-4 py-2 rounded-lg font-medium hover:bg-[#e05c1a]"
                                    onClick={() => document.getElementById("fileInput")?.click()}
                                >
                                    Chọn file
                                </button>
                                <input
                                    type="file"
                                    id="fileInput"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />

                            </div>
                            <PlusIcon  />
                            {formData.file instanceof File && (
                                <span className="ml-4">{formData.file.name}</span>
                            )}
                        </div>
                    </div>



                    <div className="flex flex-wrap gap-x-12 gap-y-4">
                        <div className="w-full md:w-[48%]">
                            <InputField
                                id="fullName"
                                name="fullName"
                                type="text"
                                label="Họ và tên"
                                placeholder="Nhập họ và tên"
                                required
                                // noBorder={true}
                                value={formData.fullName}
                                onChange={handleChange}
                                error={formErrors.fullName}
                            />
                            {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}

                        </div>
                        <div className="w-full md:w-[48%]">
                            <InputField
                                id="password"
                                name="password"
                                type="password"
                                label="Mật khẩu"
                                placeholder="Nhập mật khẩu"
                                required
                                // noBorder={true}
                                value={formData.password}
                                onChange={handleChange}
                                error={formErrors.password}
                            />
                            {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}

                        </div>

                        {/* Trường đang học */}
                        <div className="w-full md:w-[48%]">
                            <InputField
                                id="school"
                                name="school"
                                type="text"
                                label="Trường đang học"
                                placeholder="Nhập trường đang học"
                                required
                                value={formData.school}
                                onChange={handleChange}
                                error={formErrors.school}
                            />
                        </div>

                        {/* Ngày sinh */}
                        <div className="w-full md:w-[48%]">
                            <label className="block text-base font-medium text-gray-700">
                                Ngày sinh <span className="text-orange-600">*</span>
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <CalendarIcon />
                                </div>
                                <input
                                    type="date"
                                    className={`block w-full pl-10 pr-10 rounded-lg bg-white px-4 py-4 shadow-sm focus:border-orange-500 focus:ring-orange-500 border ${formErrors.birthDate ? 'border-red-500' : 'border-white'}`}
                                    placeholder="dd/mm/yyyy"
                                    value={formData.birthDate}
                                    onChange={handleChange}
                                    name="birthDate"

                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    <XIcon />
                                </button>
                            </div>
                        </div>

                        {/* Chuyên ngành */}
                        <div className="w-full md:w-[48%]">
                            <InputField
                                id="major"
                                name="major"
                                type="text"
                                label="Chuyên ngành"
                                placeholder="Nhập chuyên ngành"
                                required
                                // noBorder={true}
                                value={formData.major}
                                onChange={handleChange}
                                error={formErrors.major}
                            />
                        </div>

                        <SelectField
                            label="Chọn vị trí ứng tuyển"
                            options={["Developer", "Designer"]}
                            required
                            value={formData.position}
                            onChange={handleChange}
                            name="position"
                        />
                        <SelectField
                            label="Hình thức đăng ký"
                            options={["Online", "Offline"]}
                            required
                            value={formData.registerType}
                            onChange={handleChange}
                            name="registerType"
                        />
                        <div className="w-full md:w-[48%]">
                            <InputField
                                id="email"
                                name="email"
                                type="email"
                                label="Địa chỉ email"
                                placeholder="Nhập email"
                                required
                                // noBorder={true}
                                value={formData.email}
                                onChange={handleChange}
                                error={formErrors.email}
                            />
                        </div>

                        <div className="w-full md:w-[48%]">
                            <InputField
                                id="phone"
                                name="phone"
                                type="tel"
                                label="Điện thoại"
                                placeholder="Nhập số điện thoại"
                                required
                                // noBorder={true}
                                value={formData.phone}
                                onChange={handleChange}
                                error={formErrors.phone}
                            />
                        </div>
                    </div>
                    <p className="py-2 text-[13px] text-[#6D6D6D]">
                        <span className="text-orange-500">*</span> là những trường thông tin bắt buộc
                    </p>
                    <div className="w-[130px] sm:w-[140px] flex justify-center mt-4">
                        <Button text="Gửi" icon={<SendIcon />} />
                    </div>
                    {loading && (
                        <div className="absolute inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
                            <div className="text-white">Đang xử lý...</div>
                        </div>
                    )}
                    {/* {error && <p className="text-red-500">{error}</p>} */}
                </form>
            </div>
        </div>
    );
};

export default InfoRegisterForm;
