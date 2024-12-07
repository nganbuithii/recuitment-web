import React from "react";
import { CalendarIcon, PlusIcon, SendIcon, UploadIcon, XIcon } from "../common/Icons";
import SelectField from "../common/SelectField";
import InputField from "../common/InputField";
import Button from "../common/Button";

const InfoRegisterForm: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className=" rounded-xl  w-full max-w-5xl p-10">
                <h1 className="text-[#F26D21] text-left font-roboto text-2xl font-bold uppercase mb-3">
                    Điền thông tin đăng ký
                </h1>

                <form >
                    {/* Khu vực tải file */}
                    <div className="w-full md:w-[50%] flex flex-col mb-5">
                        <label className="text-sm font-medium text-gray-700">
                            Chọn file <span className="text-orange-600">*</span>
                        </label>
                        <div className="flex items-center mt-2">
                            <div className="rounded-lg p-4 w-56 flex flex-col items-center justify-center text-center bg-white">
                                <UploadIcon className="mb-4" />
                                <button
                                    type="button"
                                    className="bg-[#F26D21] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#e05c1a]"
                                >
                                    Chọn file
                                </button>
                            </div>
                            <div className="flex items-center justify-center ml-4 ">
                                <PlusIcon className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                        <div className="w-full md:w-[48%]">
                            <InputField
                                id="fullName"
                                type="text"
                                label="Họ và tên"
                                placeholder="Nhập họ và tên"
                                required
                                noBorder={true}

                            />
                        </div>

                        {/* Trường đang học */}
                        <div className="w-full md:w-[48%]">
                            <InputField
                                id="school"
                                type="text"
                                label="Trường đang học"
                                placeholder="Nhập trường đang học"
                                required
                                noBorder={true}
                            />
                        </div>

                        {/* Ngày sinh */}
                        <div className="w-full md:w-[48%]">
                            <label className="block text-sm font-medium text-gray-700">
                                Ngày sinh <span className="text-orange-600">*</span>
                            </label>
                            <div className="relative mt-2">
                                {/* Icon lịch ở bên trái */}
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <CalendarIcon />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-10 rounded-lg  bg-white px-4 py-2 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                                    placeholder="dd/mm/yyyy"
                                    value="10/10/2021"
                                    readOnly
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    <XIcon />
                                </button>
                            </div>
                        </div>

                        {/* Chuyên ngành */}
                        <div className="w-full md:w-[48%]">
                            <InputField
                                id="major"
                                type="text"
                                label="Chuyên ngành"
                                placeholder="Nhập chuyên ngành"
                                required
                                noBorder={true}
                            />

                        </div>

                        <SelectField
                            label="Chọn vị trí ứng tuyển"
                            options={["Developer", "Designer"]}
                            required
                        />
                        <SelectField
                            label="Hình thức đăng ký"
                            options={["Online", "Offline"]}
                            required
                        />
                        <div className="w-full md:w-[48%]">
                            <InputField
                                id="email"
                                type="email"
                                label="Địa chỉ email"
                                placeholder="Nhập email"
                                required
                                noBorder={true}
                            />
                        </div>

                        <div className="w-full md:w-[48%]">
                            <InputField
                                id="phone"
                                type="tel"
                                label="Điện thoại"
                                placeholder="Nhập số điện thoại"
                                required
                                noBorder={true}
                            />
                        </div>
                    </div>
                    <p className="py-2 text-xs text-[#6D6D6D]"> <span className="text-orange-500">*</span> là những trường thông tin bắt buộc</p>
                    <div className="w-full flex justify-center mt-4">
                    <Button text="Đăng nhập" icon={<SendIcon/>}/>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default InfoRegisterForm;
