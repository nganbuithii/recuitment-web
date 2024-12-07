import React from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";

const forgotPassForm: React.FC = () => {
    return (
        <div className="flex flex-col items-start w-[600px] mx-auto">
            <h1 className="text-[36px] font-semibold text-left text-[#F26D21] mb-1 w-full tracking-tighter">
                Quên mật khẩu
            </h1>
            <p className="max-w-[360px] text-left text-base w-full mb-12">
                Vui lòng nhập địa chỉ email đã đăng kí để yêu cầu khôi phục lại mật khẩu
            </p>

            <InputField id="email" type="email" className="mb-4"
                label="Email" placeholder="Tên đăng nhập" required
            />

            <Button text="Xác nhận" />
            <a href="/login"
                className="text-base text-orange-600 hover:underline focus:outline-none underline underline-offset-1 text-right w-full mt-3"
            >
                Quay lại đăng nhập
            </a>
        </div>
    );
};

export default forgotPassForm;
