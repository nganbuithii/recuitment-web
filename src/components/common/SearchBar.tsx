import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { DropIcon } from "./Icons";

interface SearchBarProps {
    companies: string[];
    onCompanySelect: (company: string) => void;
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ companies, onCompanySelect, searchTerm, onSearchChange }: SearchBarProps) => {
    return (
        <div className="flex items-center justify-center bg-gray-100 py-6 mt-4">
            <div className="flex bg-white rounded-lg shadow-md w-full max-w-full">
                {/* Ô nhập liệu tìm kiếm công việc */}
                <div className="flex w-full items-center flex-1 px-4 sm:border-r border-gray-300 rounded-l-full">
                    <IoSearchSharp color="orange" size={20} />
                    <input
                        type="text"
                        placeholder="Tìm kiếm công việc"
                        value={searchTerm}
                        onChange={onSearchChange}
                        className="py-3 w-full pl-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none rounded-l-full"
                    />
                </div>
                {/* Dropdown lĩnh vực chuyên môn */}
                <div className="hidden sm:flex items-center px-4 border-r border-gray-300 relative">
                    <select
                        className="appearance-none text-base text-gray-700 focus:outline-none bg-white pr-8"
                    >
                        <option className="py-2 px-5" value="">Chọn lĩnh vực chuyên môn</option>
                        <option className="py-2 px-5" value="it">Công nghệ thông tin</option>
                        <option className="py-2 px-5" value="marketing">Marketing</option>
                        <option className="py-2 px-5" value="finance">Tài chính</option>
                    </select>
                    <DropIcon className="absolute right-2 text-orange-500 pointer-events-none" />
                </div>
                <div className="hidden sm:flex items-center px-4 border-r border-gray-300 relative">
                    <select
                        className="appearance-none text-base text-gray-700 focus:outline-none bg-white pr-8"
                        onChange={(e) => onCompanySelect(e.target.value)}
                    >
                        <option value="">Chọn công ty</option>
                        {companies.map((company, index) => (
                            <option key={index} value={company}>{company}</option>
                        ))}
                    </select>
                    <DropIcon className="absolute right-2 text-orange-500 pointer-events-none" />
                </div>

                {/* Nút tìm việc */}
                <button className="hidden sm:flex items-center text-base px-6 py-3 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 focus:outline-none">
                    <IoSearchSharp color="#fff" size={24} />
                    Tìm việc
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
