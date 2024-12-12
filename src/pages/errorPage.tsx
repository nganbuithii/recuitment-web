import React, { useState } from "react";
import Header from "../components/students/header";
import SearchBar from "../components/common/SearchBar";
import Footer from "../components/common/Footer";


const ErrorPage = () => {
  const [currentSection, setCurrentSection] = useState<"jd" | "register">("jd");

  const handleSectionChange = (section: "jd" | "register") => {
    setCurrentSection(section);
  };

  return (
    <div className=" max-h-screen-xl flex flex-col bg-white ">
      <Header onSelect={handleSectionChange} />
      <div>
        {currentSection === "jd" && (
          <section className="bg-gray-100">
            <div className="w-[343px] sm:w-[1290px] sm:h-[1080px] mx-auto">
              <SearchBar />
              <div className="flex justify-center items-center w-full bg-gray-100 my-6 ">
                <h1 className="text-black text-center font-roboto  text-2xl sm:text-[32px] font-bold leading-[130%] uppercase w-full sm:w-1/2 ">
                  TÌM
                  <span className="text-orange-500"> CÔNG VIỆC MƠ ƯỚC </span>
                  CỦA BẠN TẠI NGÔI NHÀ MỚI
                </h1>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="./BannerError.png"
                  alt=""
                  className="w-[80%] h-[80%] "
                />
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ErrorPage;
