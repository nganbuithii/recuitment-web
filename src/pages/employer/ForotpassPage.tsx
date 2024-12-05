import React from 'react';
import ForgotPassForm from '../../components/employer/forgotPassForm';
import Header from '../../components/employer/header';

const ForgotPassPage = () => {
    return (
        <div className=" min-h-screen flex flex-col bg-white">
            <Header title="HỆ THỐNG TUYỂN DỤNG" subtitle='VÀ QUẢN LÝ SINH VIÊN THỰC TẬP'/>

            <div className="flex justify-center items-center flex-grow gap-8 px-4 mt-2 ">
                
                <div className="w-1/2 max-w-md flex  ">
                    <ForgotPassForm/>
                </div>

                <div className=" md:flex w-1/2 max-w-sm flex justify-center  ml-20">
                    <img
                        src="/join.png"
                        alt="Join Us"
                        className="w-full object-contain "
                    />
                </div>
            </div>
        </div>
    );
};

export default ForgotPassPage;
