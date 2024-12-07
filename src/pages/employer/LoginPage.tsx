import React from 'react';
import LoginForm from '../../components/employer/LoginForm';
import Header from '../../components/employer/header';

const LoginPage = () => {
    return (
        <div className=" flex flex-col bg-white">
            <Header title="HỆ THỐNG TUYỂN DỤNG" subtitle='VÀ QUẢN LÝ SINH VIÊN THỰC TẬP'/>

            <div className="flex justify-center items-center flex-grow  px-4 mt-12 ">
                
                <div className=" flex  ">
                    <LoginForm />
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

export default LoginPage;
