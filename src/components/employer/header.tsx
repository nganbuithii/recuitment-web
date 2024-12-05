import React from "react";

interface HeaderProps {
    title: string;
    subtitle: string
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <header className="bg-white py-2 px-6 pt-5">
            <div className="flex items-center ">
                <div className="w-[20%]">

                </div>
                <div className="flex items-center space-x-6 w-[50%] ">
                    <img src="/logo.png" alt="Logo 1" className="h-10" />
                </div>

                <div className="w-[40%]">
                    <h1 className="text-orange-600 text-lg font-bold w-2/3 justify-center text-left ">
                        {title}
                    </h1>
                    <h2 className="text-orange-600 text-lg font-bold w-2/3 justify-center text-left mt-1">
                        {subtitle}
                    </h2>
                </div>
            </div>
        </header>
    );
};

export default Header;