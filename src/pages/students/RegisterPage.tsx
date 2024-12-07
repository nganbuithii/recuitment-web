import React, { useState, useEffect } from 'react';
import Header from '../../components/students/header';
import Footer from '../../components/common/Footer';
import InfoRegisterForm from '../../components/students/InfoRegisterForm';

const RegisterPage = () => {
    // Khai báo state để lưu độ rộng và chiều cao màn hình
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // Cập nhật kích thước màn hình khi cửa sổ thay đổi kích thước
    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Gắn sự kiện khi thay đổi kích thước cửa sổ
        window.addEventListener('resize', handleResize);

        // Dọn dẹp sự kiện khi component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div >
                <InfoRegisterForm />
            </div>

            {/* Hiển thị độ rộng và chiều cao màn hình */}
            <div className="text-center mt-4">
                <p>Độ rộng màn hình hiện tại: {screenSize.width}px</p>
                <p>Chiều cao màn hình hiện tại: {screenSize.height}px</p>
            </div>

            <Footer />
        </div>
    );
};

export default RegisterPage;
