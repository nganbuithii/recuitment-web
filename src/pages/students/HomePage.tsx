import React from 'react';
import Header from '../../components/students/header';
import SearchBar from '../../components/common/SearchBar';
import Footer from '../../components/common/Footer';
import JobCard from '../../components/common/JobCard';

const HomePage = () => {
    return (
        <div className=" min-h-screen flex flex-col bg-white">
            <Header />
            <section className='bg-gray-100'>
                <div className=" w-[1000px]  mx-auto">
                    <SearchBar />

                    <div className="flex justify-center items-center w-full bg-gray-100 ">
                        <h1 className="text-black text-center font-roboto text-2xl font-bold leading-[130%] uppercase w-1/2">
                            TÌM
                            <span className="text-orange-500"> CÔNG VIỆC MƠ ƯỚC </span>
                            CỦA BẠN TẠI NGÔI NHÀ MỚI
                        </h1>
                    </div>

                    {/* Job Cards */}
                    <div className="flex w-full items-center content-center gap-4 flex-wrap">
                        <JobCard
                            title="Thiết Kế UI/UX (Figma)"
                            company="Alta Software"
                            requirements="Có tối thiểu 1 năm kinh nghiệm ReactJS, TypeScript"
                            email="tuyendung@alta.com.vn"
                            phone="0282 240 9960"
                        />
                        <JobCard
                            title="Thiết Kế UI/UX (Figma)"
                            company="Alta Plastic"
                            requirements="Có tối thiểu 1 năm kinh nghiệm ReactJS, TypeScript"
                            email="tuyendung@alta.com.vn"
                            phone="0282 240 9960"
                        />
                        <JobCard
                            title="Thiết Kế UI/UX (Figma)"
                            company="Unigons"
                            requirements="Có tối thiểu 1 năm kinh nghiệm ReactJS, TypeScript"
                            email="tuyendung@alta.com.vn"
                            phone="0282 240 9960"
                        />
                    </div>

                </div>
            </section>


            <Footer />
        </div>
    );
};

export default HomePage;
