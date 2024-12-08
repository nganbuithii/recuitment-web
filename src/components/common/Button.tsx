import React from "react";

interface ButtonProps {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick,disabled = false  }) => {
    return (
        <button onClick={onClick}  disabled={disabled}
        className="w-full  px-4 py-3 font-bold text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center justify-center gap-2 text-[18px]">
            {text}
            {icon && <span>{icon}</span>} 

        </button>
    );
};

export default Button;
