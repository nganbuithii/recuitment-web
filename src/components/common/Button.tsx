import React from "react";

interface ButtonProps {
    text: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick,disabled = false , type }) => {
    return (
        <button onClick={onClick}  disabled={disabled} type={type}
        className="w-full  px-4 py-3 font-bold text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center justify-center gap-2 text-base">
            {text}
            {icon && <span>{icon}</span>} 

        </button>
    );
};

export default Button;
