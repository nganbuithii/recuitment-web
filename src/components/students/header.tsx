import React, { useState } from "react";

const Header = () => {
    const [selected, setSelected] = useState<"jd" | "register" | null>("jd");

    const handleJDClick = () => {
        setSelected(selected === "jd" ? null : "jd");
    };

    const handleRegisterClick = () => {
        setSelected(selected === "register" ? null : "register");
    };

    return (
        <header className="bg-white py-2 px-6 pt-5">
            <div className="flex items-center">
                <div className="w-[20%]"></div>
                <div className="flex items-center space-x-6 w-[50%]">
                    <img src="/logo.png" alt="Logo 1" className="h-10" />
                </div>

                <div className="w-[60%] flex gap-8 flex-row relative">
                    {/* Xem JD yêu cầu tuyển dụng */}
                    <div
                        className="flex flex-col items-center cursor-pointer"
                        onClick={handleJDClick}
                    >
                        <div
                            className={`flex items-center gap-2 ${
                                selected === "jd" ? "text-[#F26D21]" : "text-gray-400"
                            } transition-all duration-300`}
                        >
                            
                            <p className="text-center font-roboto text-base font-medium leading-normal">
                                Xem JD yêu cầu tuyển dụng
                            </p>
                        </div>
                        {selected === "jd" && (
                            <div className="w-2 h-2 rounded-full bg-[#F26D21] mt-1"></div>
                        )}
                    </div>

                    {/* Đăng ký tuyển dụng */}
                    <div
                        className="flex flex-col items-center cursor-pointer"
                        onClick={handleRegisterClick}
                    >
                        <div
                            className={`flex items-center gap-2 ${
                                selected === "register"
                                    ? "text-[#F26D21]"
                                    : "text-gray-400"
                            } transition-all duration-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                            >
                                <path
                                    d="M10.5 19.8333H13.4167M10.5 15.1667H16.3333M10.5 10.5H11.6667M15.1667 3.5H9.56666C8.25987 3.5 7.60648 3.5 7.10735 3.75432C6.66831 3.97802 6.31135 4.33498 6.08765 4.77402C5.83333 5.27315 5.83333 5.92654 5.83333 7.23333V20.7667C5.83333 22.0735 5.83333 22.7269 6.08765 23.226C6.31135 23.665 6.66831 24.022 7.10735 24.2457C7.60648 24.5 8.25987 24.5 9.56666 24.5H11.6667M15.1667 3.5L22.1667 10.5M15.1667 3.5V6.76667C15.1667 8.07346 15.1667 8.72685 15.421 9.22598C15.6447 9.66502 16.0016 10.022 16.4407 10.2457C16.9398 10.5 17.5932 10.5 18.9 10.5H22.1667M22.1667 10.5V11.6667M16.3333 24.5L18.6958 24.0275C18.9018 23.9863 19.0048 23.9657 19.1008 23.928C19.1861 23.8946 19.2671 23.8512 19.3422 23.7989C19.4268 23.7398 19.5011 23.6656 19.6496 23.517L24.5 18.6667C25.1443 18.0223 25.1443 16.9777 24.5 16.3333C23.8557 15.689 22.811 15.689 22.1667 16.3333L17.3163 21.1837C17.1678 21.3322 17.0935 21.4065 17.0345 21.4911C16.9821 21.5662 16.9387 21.6473 16.9053 21.7325C16.8676 21.8285 16.847 21.9315 16.8058 22.1375L16.3333 24.5Z"
                                    stroke={
                                        selected === "register"
                                            ? "#F26D21"
                                            : "#6D6D6D"
                                    }
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p className="text-center font-roboto text-base font-medium leading-normal">
                                Đăng ký tuyển dụng
                            </p>
                        </div>
                        {selected === "register" && (
                            <div className="w-2 h-2 rounded-full bg-[#F26D21] mt-1"></div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
