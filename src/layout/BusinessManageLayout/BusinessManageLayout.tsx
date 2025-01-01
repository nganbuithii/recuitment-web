// import Footer from '~/Components/Footer'
// import HeaderDNLogined from '~/Components/HeaderDNLogined'
import React from "react";
// import Footer from "../../components/common/Footer"
import Header from "../../components/employer/header"
import Footer from "../../components/common/Footer";
import { LogoutIcon } from "../../components/common/Icons";
import { CaretDownOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../store/authSlide";


interface BusinessLoggedProps {
  children: React.ReactNode
}
export default function BusinessLoggedLayout({ children }: BusinessLoggedProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/login");
  };
  return (
    <div className='flex flex-col h-screen mx-auto'>
      <header className="bg-transparent sm:h-[102px] py-2 px-6 pt-5">
        <div className="flex items-center ">
          <div className="w-[20%]">

          </div>
          <div className="flex items-center space-x-6 w-[50%] ">
            <img src="/logo.png" alt="Logo 1" className="h-[35px] sm:h-[52px]" />

          </div>

          <div className="flex items-center space-x-2 px-8">
            <h1 className="text-orange-600 text-lg font-bold relative">
              Yêu cầu tuyển dụng
              <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
            </h1>
          </div>


          <div className="flex items-center space-x-4">
            <button className="flex items-center text-orange-600 border border-orange-600 px-3 py-1 rounded-md">
              <span className="mr-1">VIE</span>
              <CaretDownOutlined />
            </button>
            <button className="text-orange-600" onClick={handleLogout}>
              <LogoutIcon />
            </button>
          </div>
        </div>
      </header>
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  )
}