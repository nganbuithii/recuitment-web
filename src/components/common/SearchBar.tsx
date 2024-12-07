import React from "react";
import {  IoSearchSharp } from "react-icons/io5";
import { FilterIcon } from "./Icons";

const SearchBar = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 py-6 mt-4">
            <div className="flex bg-white rounded-lg shadow-md w-full max-w-full">
                {/* Ô nhập liệu */}
                <div className="flex w-full items-center flex-1 px-4   sm:border-r border-gray-300 rounded-l-full">
                    <IoSearchSharp color="orange" size={20} />
                    <input
                        type="text"
                        placeholder="Nhập vị trí muốn ứng tuyển"
                        className="py-3 w-full pl-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none rounded-l-full"
                    />
                </div>

                
               

                {/* Dropdown lĩnh vực chuyên môn */}
                <div className="hidden sm:flex items-center px-4 border-r border-gray-300 rounded-l-full">
                    <select className="text-sm text-gray-700 focus:outline-none bg-white">
                        <option value="">Chọn lĩnh vực chuyên môn</option>
                        <option value="it">Công nghệ thông tin</option>
                        <option value="marketing">Marketing</option>
                        <option value="finance">Tài chính</option>
                    </select>
                </div>

                {/* Dropdown chọn công ty */}
                <div className="hidden sm:flex items-center px-4 border-r border-gray-300 rounded-l-full">
                    <select className="text-sm text-gray-700 focus:outline-none bg-white">
                        <option value="">Chọn công ty</option>
                        <option value="company-a">Công ty A</option>
                        <option value="company-b">Công ty B</option>
                    </select>
                </div>

                {/* Nút tìm việc */}
                <button className="hidden sm:flex items-center px-6 py-3 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 focus:outline-none">
                    <IoSearchSharp color="#fff" size={24} />
                    Tìm việc
                </button>
            </div>
            <button className="ml-3 sm:hidden flex items-center px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none">
                    Lọc
                    <FilterIcon />
                </button>
        </div>
    );
};

export default SearchBar;
