import React from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";

const forgotPassForm: React.FC = () => {
    return (
        <div className="flex flex-col items-start w-full max-w-[524px] mx-auto p-6">
            <h1 className="text-3xl font-semibold text-left text-[#F26D21] mb-1 w-full tracking-tighter">
                Quên mật khẩu
            </h1>
            <p className="max-w-[360px] text-left w-full mb-12">
                Vui lòng nhập địa chỉ email đã đăng kí để yêu cầu khôi phục lại mật khẩu
            </p>

            <InputField id="email" type="email" className="mb-4"
                label="Email" placeholder="Tên đăng nhập" required
            />

            <Button text="Xác nhận" />
            <a href="/nha-doanh-nghiep/login"
                className="text-sm text-orange-600 hover:underline focus:outline-none underline underline-offset-1 text-right w-full mt-3"
            >
                Quay lại đăng nhập
            </a>
        </div>
    );
};

export default forgotPassForm;
