import React from "react";

interface InputFieldProps {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    required?: boolean;
    className?: string; 
   
}

const InputField: React.FC<InputFieldProps> = ({ id, type, label, placeholder, required, className }) => {
    return (
        <div className={`w-full  ${className}`}>
            <label
                htmlFor={id}
                className={'block text-sm font-medium text-gray-700 mb-1 text-left '}
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 '}
            />
        </div>
    );
};

export default InputField;
