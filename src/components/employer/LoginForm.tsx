import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import InputField from "../common/InputField";
import Button from "../common/Button";

const LoginForm: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full max-w-[524px] mx-auto p-6">
            <h1 className="text-3xl font-semibold text-left text-[#F26D21] mb-6 w-full tracking-tighter">
                Đăng nhập
            </h1>

            <div className="w-full mb-2">
                <label htmlFor="role"
                    className="block text-sm font-medium text-gray-700 mb-1 text-left"
                >
                    Vai trò <span className="text-red-500">*</span>
                </label>
                <select id="role" name="role"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                    <option value="Option 1" className="text-xs">Option 1</option>
                </select>
            </div>

            <InputField id="email" type="email"
                label="Email" placeholder="Tên đăng nhập" required
            />

            <InputField id="password" type="password"
                label="Mật khẩu" placeholder="Nhập mật khẩu" required />

            <div className="flex items-center justify-between w-full mb-3">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="remember"
                        className="mr-2 rounded border-orange-700 focus:ring-orange-500"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-700">
                        Ghi nhớ mật khẩu
                    </label>
                </div>
                <a href="#"
                    className="text-sm text-orange-600 hover:underline focus:outline-none underline underline-offset-1"
                >
                    Quên mật khẩu?
                </a>
            </div>

            <div className="w-full">
                <div
                    style={{
                        transform: "scale(0.85)",
                        transformOrigin: "0 0",
                    }}
                >
                    <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
                </div>
            </div>

            <Button text="Đăng nhập" />
        </div>
    );
};

export default LoginForm;
