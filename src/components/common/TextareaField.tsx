import React from "react";

interface TextareaFieldProps {
    id: string;
    label: string;
    placeholder: string;
    value: string;
    name: string;
    rows?: number;
    required?: boolean;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
    id,
    label,
    placeholder,
    value,
    name,
    rows = 4,
    required,
    className,
    onChange,
}) => {
    return (
        <div className={`w-full ${className}`}>
            <label
                htmlFor={id}
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1 text-left"
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                rows={rows}
                onChange={onChange}
                className="w-full px-3 py-2 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                required={required}
            ></textarea>
        </div>
    );
};

export default TextareaField;
