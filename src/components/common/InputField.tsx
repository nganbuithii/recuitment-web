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
    value: string;
    name: string;
    error?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, type, label, placeholder, required, className, error, name, icon, noBorder, value, onChange }) => {
    return (
        <div className={`w-full ${className} `}>
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
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`bg-white w-full px-3 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10 text-black
                        ${noBorder ? 'border-none' : 'border border-gray-300'}
                         ${error ? 'border-red-500' : 'border-white'}`}
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