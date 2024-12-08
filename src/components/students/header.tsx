import React, { useState } from "react";
import { NoteIcon, UserIcon } from "../common/Icons";
interface HeaderProps {
    onSelect: (section: "jd" | "register") => void;
}
const Header: React.FC<HeaderProps> = ({ onSelect }) => {
    const [menuOpen, setMenuOpen] = useState(false); // State để điều khiển menu toggle
    const [selected, setSelected] = useState<"jd" | "register" | null>("jd");

    const handleJDClick = () => {
        setSelected(selected === "jd" ? null : "jd");
        onSelect("jd");
    };

    const handleRegisterClick = () => {
        setSelected(selected === "register" ? null : "register");
        onSelect("register"); 
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white py-4 px-4 sm:px-6 h-auto sm:h-[102px] flex flex-col sm:flex-row items-center">
            {/* Logo */}
            <div className="w-[18%] sm:block"></div>

            <div className="w-full sm:w-[40%] flex justify-between sm:justify-start items-center">
                <img src="/logo.png" alt="Logo 1" className="h-[35px] sm:h-[52px]" />
                
                {/* Toggle menu icon for mobile */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="p-2 focus:outline-none">
                        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
                        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
                        <div className="w-6 h-0.5 bg-gray-600"></div>
                    </button>
                </div>
            </div>

            {/* Navigation Menu */}
            <div
                className={`${
                    menuOpen ? "flex" : "hidden"
                } sm:flex w-full sm:w-[60%] flex-col sm:flex-row items-center justify-center gap-4 mt-4 sm:mt-0`}
            >
                {/* Xem JD yêu cầu tuyển dụng */}
                <div
                    className="flex flex-col items-center cursor-pointer relative"
                    onClick={handleJDClick}
                >
                    <div
                        className={`flex items-center gap-2 ${
                            selected === "jd" ? "text-[#F26D21]" : "text-gray-400"
                        } transition-all duration-300`}
                    >
                        <UserIcon color={selected === "jd" ? "#F26D21" : "#6D6D6D"} />
                        <p className="text-sm sm:text-lg font-medium ">Xem JD yêu cầu tuyển dụng</p>
                    </div>
                    {selected === "jd" && (
                        <div className="w-2 h-2 rounded-full bg-[#F26D21] mt-1 sm:block hidden absolute bottom-[-12px]"></div>
                    )}
                </div>

                {/* Đăng ký tuyển dụng */}
                <div
                    className="flex flex-col items-center cursor-pointer relative"
                    onClick={handleRegisterClick}
                >
                    <div
                        className={`flex items-center gap-2 ${
                            selected === "register" ? "text-[#F26D21]" : "text-gray-400"
                        } transition-all duration-300`}
                    >
                        <NoteIcon color={selected === "register" ? "#F26D21" : "#6D6D6D"} />
                        <p className="text-sm sm:text-lg font-medium text-center">Đăng ký trực tuyến</p>
                    </div>
                    {selected === "register" && (
                        <div className="w-2 h-2 rounded-full bg-[#F26D21] mt-1 sm:block hidden absolute bottom-[-12px]"></div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
