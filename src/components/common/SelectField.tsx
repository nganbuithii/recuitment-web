import React from "react";
import { RecIcon } from "./Icons";

interface SelectFieldProps {
    label?: string;
    options: string[];
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    name: string; 
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, required, value, onChange, name }) => {
    return (
        <div className="w-full md:w-[100%]">
            <label className="block text-sm font-medium text-gray-700">
                {label} 
                {/* {required && <span className="text-orange-600">*</span>} */}
            </label>
            <div className="relative mt-2">
                <select
                    value={value}
                    onChange={onChange}
                    name={name} 
                    className="block w-full appearance-none rounded-lg px-4 py-4 shadow-sm focus:ring-[#F26D21] focus:border-[#F26D21]"
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <RecIcon />
                </div>
            </div>
        </div>
    );
};

export default SelectField;
