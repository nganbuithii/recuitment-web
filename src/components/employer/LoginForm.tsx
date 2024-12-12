import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { AlertIcon, DropIcon } from "../common/Icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlide";
import { collection, getDocs, query, where } from "firebase/firestore";

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "DOANH_NGHIEP",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const recaptchaRef = useRef<any>(null);
    const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async () => {
        setError(null);
        const recaptchaValue = recaptchaRef.current.getValue();
        if (!recaptchaValue) return setError("Vui lòng xác nhận reCAPTCHA.");
    
        try {
            setLoading(true); 
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
    
            if (user.email) {
                const q = query(collection(db, "students"), where("email", "==", user.email));
                const querySnapshot = await getDocs(q);
            
                if (!querySnapshot.empty) {
                    querySnapshot.forEach((doc) => {
                        const userData = doc.data();
            
                        if (userData && userData.email && userData.role) {
                            dispatch(setUser({
                                uid: user.uid,
                                email: user.email as string, 
                                role: userData.role,
                                displayName: userData.displayName,
                                ...userData,
                            }));
            
                            if (userData.role === "STUDENT") {
                                navigate("/student-dashboard");
                            } else {
                                navigate("/");
                            }
                        } else {
                            setError("Thông tin người dùng không hợp lệ.");
                        }
                    });
                } else {
                    setError("Không tìm thấy người dùng với email này.");
                }
            } else {
                setError("Email không hợp lệ.");
            }
            
    
        } catch (err) {
            setError("Sai tên đăng nhập hoặc mật khẩu.");
            console.error(err);
        } finally {
            setLoading(false); 
        }
    };
    



    return (
        <div className="flex flex-col items-center w-[600px] mx-auto">
            <h1 className="text-[36px] font-semibold text-left text-[#F26D21] mb-6 w-full tracking-tighter">
                Đăng nhập
            </h1>

            <div className="w-full mb-2 relative">
                <label htmlFor="role" className="block text-base font-medium text-gray-700 mb-1 text-left">
                    Vai trò <span className="text-red-500">*</span>
                </label>
                <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none pr-10
            ${error ? 'border-red-500' : 'border-gray-300'}`}
                >
                    <option value="DOANH_NGHIEP" className="text-sm">Doanh nghiệp</option>
                    <option value="STUDENT" className="text-sm">Sinh viên</option>
                </select>
                <DropIcon className="absolute right-3 top-[70%] transform -translate-y-[50%] pointer-events-none" />
            </div>

            <InputField
                id="email"
                type="email"
                className="mb-2"
                label="Email"
                placeholder="Tên đăng nhập"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!error}
            />

            <InputField
                id="password"
                type="password"
                className="mb-2"
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!error}
            />

            {error && (
                <div className="text-red-500 text-base text-left mb-2 flex justify-start w-full">
                    <AlertIcon />
                    <span className="px-3">{error}</span>
                </div>
            )}


            {/* forgot password */}
            <div className="flex items-center justify-between w-full mb-3">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="remember"
                        className="mr-2 rounded border-orange-700 focus:ring-orange-500 transform scale-150"
                    />
                    <label htmlFor="remember" className="text-base text-gray-700">
                        Ghi nhớ mật khẩu
                    </label>
                </div>
                <a href="/forgot-pass" className="text-base text-orange-600 hover:underline focus:outline-none underline underline-offset-1">
                    Quên mật khẩu?
                </a>
            </div>


            {recaptchaError && (
                <div className="text-red-500 text-base text-left mb-2 flex justify-start w-full">
                    <AlertIcon />
                    <span className="px-3">{recaptchaError}</span>
                </div>
            )}
            <div className="w-full mb-3">
                <ReCAPTCHA
                    sitekey="6LfZ95UqAAAAAOaQiLr4T1AwTQTAV_pxZXEwR4ZH"
                    ref={recaptchaRef}
                />
            </div>

            <Button text="Đăng nhập" onClick={handleLogin} />
        </div>
    );
};

export default LoginForm;
