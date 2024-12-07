import React, { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const ResetPassForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(prev => !prev);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);

    return (
        <div className="flex flex-col items-start w-[600px] mx-auto ">
            <h1 className="text-[36px] font-semibold text-left text-[#F26D21] mb-12 w-full tracking-tighter">
                Tạo lại mật khẩu
            </h1>

            <InputField
                id="password"
                type={showPassword ? "text" : "password"} 
                className="mb-2 "
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                required
                noBorder={true}
                icon={
                    <span
                        onClick={togglePasswordVisibility}
                        className="cursor-pointer"
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash color="gray" />} 
                    </span>
                }
            />
            <InputField
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                className="mb-4"
                label="Mật khẩu"
                placeholder="Nhập lại mật khẩu"
                required
                noBorder={true}
                icon={
                    <span
                        onClick={toggleConfirmPasswordVisibility}
                        className="cursor-pointer"
                    >
                        {showConfirmPassword ? <FaEye /> : <FaEyeSlash color="gray" />}
                    </span>
                }
            />
            <Button text="Xác nhận" />
            <a
                href="/login"
                className="text-base text-orange-600 hover:underline focus:outline-none underline underline-offset-1 text-right w-full mt-3"
            >
                Quay lại đăng nhập
            </a>
        </div>
    );
};

export default ResetPassForm;
