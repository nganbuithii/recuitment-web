import React from 'react';
import ForgotPassForm from '../../components/employer/forgotPassForm';
import Header from '../../components/employer/header';

const ForgotPassPage = () => {
    return (
        <div className="  flex flex-col bg-gray-100 min-h-screen">
            <Header title="HỆ THỐNG TUYỂN DỤNG" subtitle='VÀ QUẢN LÝ SINH VIÊN THỰC TẬP'/>

            <div className="flex justify-center items-center flex-grow gap-8 px-4 mt-32 ">
                
                <div className="   ">
                    <ForgotPassForm/>
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

export default ForgotPassPage;
