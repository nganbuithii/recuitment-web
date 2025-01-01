import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

export default function BusinessDashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='bg-gray-100'>
            <div className='container h-full py-20 mx-auto'>
                <button
                    className='bg-[#f26d21] px-6 ml-4  py-3 text-white rounded-lg font-bold flex'
                    onClick={() => setIsModalOpen(true)}
                >
                    Thêm vị trí tuyển dụng
                    <PlusOutlined className="px-2 pt-1" />
                </button>

                {/* Modal */}
                {isModalOpen && (
                    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
                        <div className='bg-white w-[645px] h-[338px] rounded-lg shadow-lg p-6 relative'>
                            {/* Modal Header */}
                            <div className='flex justify-between items-center border-b pb-2'>
                                <h2 className='text-xl font-bold text-[#f26d21]'>Thêm vị trí tuyển dụng</h2>
                                <button onClick={closeModal} className='text-gray-500 hover:text-gray-700'>
                                    X
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className='mt-4 space-y-4'>
                                {/* Tên lĩnh vực */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700'>
                                        Tên lĩnh vực <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Công nghệ thông tin'
                                        className='w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300'
                                    />
                                </div>
                                {/* Nơi làm việc */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700'>
                                        Nơi làm việc <span className='text-red-500'>*</span>
                                    </label>
                                    <div className='relative'>
                                        <select className='w-full mt-1 py-2 border rounded-lg'>
                                            <option value='all'>Tất cả</option>
                                            <option value='TP. Hồ Chí Minh'>TP. Hồ Chí Minh</option>
                                            <option value='Bà Rịa - Vũng Tàu'>Bà Rịa - Vũng Tàu</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className='flex justify-end mt-6 space-x-3'>
                                <button onClick={closeModal} className='px-4 py-2 text-gray-700 bg-gray-200 rounded-lg'>
                                    Đóng
                                </button>
                                <button className='px-4 py-2 text-white bg-[#f26d21] rounded-lg'>
                                    Xác nhận
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className='relative overflow-x-auto mt-5'>
                    <div className='p-4'>
                        <div className='rounded-lg border'>
                            <table className='w-full border-collapse border-spacing-y-4 text-center'>
                                <thead>
                                    <tr className='bg-orange-200 text-[#f26d21]'>
                                        <th className='px-4 py-2'>ID</th>
                                        <th className='px-4 py-2'>Lĩnh vực tuyển dụng</th>
                                        <th className='px-4 py-2'>Nơi làm việc</th>
                                        <th className='px-4 py-2'>Job Description</th>
                                        <th className='px-4 py-2'>Hành động</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
