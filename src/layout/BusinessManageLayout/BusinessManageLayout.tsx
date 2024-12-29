// import Footer from '~/Components/Footer'
// import HeaderDNLogined from '~/Components/HeaderDNLogined'
import React from "react";
// import Footer from "../../components/common/Footer"
import Header from "../../components/employer/header"
import Footer from "../../components/common/Footer";

interface BusinessLoggedProps {
  children: React.ReactNode
}
export default function BusinessLoggedLayout({ children }: BusinessLoggedProps) {
  return (
    <div className='flex flex-col h-screen mx-auto'>
      <Header title="Yêu cầu tuyển dụng" />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  )
}