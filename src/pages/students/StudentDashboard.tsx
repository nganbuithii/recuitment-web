import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Footer from "../../components/common/Footer";
import SubHeader from "../../components/students/subheader";

const StudentDashboard: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const [currentSection, setCurrentSection] = useState<"examination" | "process">("examination");
    console.log("USERRRRR", user);
    const handleSectionChange = (section: "examination" | "process") => {
        setCurrentSection(section);
    };

    return (
        <div className="flex flex-col min-h-screen bg-bgPrimary">
            <SubHeader
                onSelect={handleSectionChange}
                userAvatar={user?.fileUrl || ""} 
                userName={user?.fullName || "null"}  
            />

<main className="flex-grow container mx-auto mt-8 w-full  box-border">
                <h1 className="text-3xl font-semibold text-center text-orange-600 mb-8">
                    Xin chào {user ? user.fullName : "null"}
                </h1>


                <div className="flex justify-center mb-8">
                    <div className="w-full sm:w-[600px] md:w-[700px] bg-white shadow-lg p-6 rounded-md">
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-base font-medium text-gray-700 mb-2">
                                Chọn môn thi
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option value="">Chọn môn thi</option>
                                <option value="subject1">Môn 1</option>
                                <option value="subject2">Môn 2</option>
                            </select>
                        </div>

                        <div className="flex justify-between items-center">
                            <button className="text-sm text-orange-600 bg-orange-100 py-2 px-4 rounded-md hover:bg-orange-200">
                                + Tạo đề thi
                            </button>
                            <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                                Lưu lại
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer className="mt-auto" />
        </div>
    );
};

export default StudentDashboard;
