import React from "react";
import { RecIcon } from "./Icons";

interface SelectFieldProps {
    label: string;
    options: string[];
    required?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, required }) => {
    return (
        <div className="w-full md:w-[48%]">
            <label className="block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-orange-600">*</span>}
            </label>
            <div className="relative mt-2">
                <select className="block w-full appearance-none rounded-lg px-4 py-2 shadow-sm focus:ring-[#F26D21] focus:border-[#F26D21]">
                    {options.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))}
                </select>
                {/* Icon Arrow */}
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <RecIcon/>
                </div>
            </div>
        </div>
    );
};

export default SelectField;