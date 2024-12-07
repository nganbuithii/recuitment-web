import React from 'react';
import Header from '../../components/employer/header';
import ResetPassForm from '../../components/employer/ResetPassForm';

const ResetPassPage = () => {
    return (
        <div className=" min-h-screen flex flex-col bg-gray-100">
            <Header title="HỆ THỐNG TUYỂN DỤNG" subtitle='VÀ QUẢN LÝ SINH VIÊN THỰC TẬP'/>

            <div className="flex justify-center items-center flex-grow gap-8 px-4 mt-2 bg-gray-100 ">
                
                <div className="flex  ">
                    <ResetPassForm/>
                </div>

                <div className="  flex justify-center  ml-20">
                    <img
                        src="/join.png"
                        alt="Join Us"
                        className="w-full object-contain "
                        width={1000}
                    />
                </div>
            </div>
        </div>
    );
};

export default ResetPassPage;
