import React from "react";

interface InputFieldProps {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    required?: boolean;
    className?: string; 
    icon?: React.ReactNode;  
    noBorder?: boolean; 
}

const InputField: React.FC<InputFieldProps> = ({ id, type, label, placeholder, required, className, icon, noBorder }) => {
    return (
        <div className={`w-full ${className}`}>
            <label
                htmlFor={id}
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1 text-left"
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className={`w-full px-3 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10 
                        ${noBorder ? 'border-none' : 'border border-gray-300'}`} // Kiểm tra noBorder
                />
                {icon && (
                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
                        {icon}  
                    </span>
                )}
            </div>
        </div>
    );
};

export default InputField;
