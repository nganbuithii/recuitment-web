import React, { useState } from "react";
import { NoteIcon, UserIcon } from "../common/Icons";
interface HeaderProps {
    onSelect: (section: "examination" | "process") => void;
    userAvatar: string;  
    userName: string;
}

const SubHeader: React.FC<HeaderProps> = ({ onSelect, userAvatar, userName }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selected, setSelected] = useState<"examination" | "process" | null>("examination");

    const handleExaminationClick = () => {
        setSelected(selected === "examination" ? null : "examination");
        onSelect("examination");
    };

    const handleRegisterClick = () => {
        setSelected(selected === "process" ? null : "process");
        onSelect("process");
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
                <div
                    className="flex flex-col items-center cursor-pointer relative"
                    onClick={handleExaminationClick}
                >
                    <div
                        className={`flex items-center gap-2 ${
                            selected === "examination" ? "text-[#F26D21]" : "text-gray-400"
                        } transition-all duration-300`}
                    >
                        <UserIcon color={selected === "examination" ? "#F26D21" : "#6D6D6D"} />
                        <p className="text-sm sm:text-lg font-medium ">Thi trắc nghiệm</p>
                    </div>
                    {selected === "examination" && (
                        <div className="w-2 h-2 rounded-full bg-[#F26D21] mt-1 sm:block hidden absolute bottom-[-12px]"></div>
                    )}
                </div>

                <div
                    className="flex flex-col items-center cursor-pointer relative"
                    onClick={handleRegisterClick}
                >
                    <div
                        className={`flex items-center gap-2 ${
                            selected === "process" ? "text-[#F26D21]" : "text-gray-400"
                        } transition-all duration-300`}
                    >
                        <NoteIcon color={selected === "process" ? "#F26D21" : "#6D6D6D"} />
                        <p className="text-sm sm:text-lg font-medium text-center">Tiến trình học tập</p>
                    </div>
                    {selected === "process" && (
                        <div className="w-2 h-2 rounded-full bg-[#F26D21] mt-1 sm:block hidden absolute bottom-[-12px]"></div>
                    )}
                </div>

                {/* User Avatar */}
                <div className="flex space-x-2 bg-bgMain px-4 py-2 rounded-lg">
                    <img src={userAvatar} alt="avatar" className="h-10 w-10 rounded-full" />
                    <p className="text-white text-xl">{userName}</p>
                </div>
            </div>
        </header>
    );
};

export default SubHeader;