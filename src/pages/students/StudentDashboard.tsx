import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import Footer from "../../components/common/Footer";
import SubHeader from "../../components/students/subheader";
import SelectField from "../../components/common/SelectField";
import Popup from "../../components/common/PopUp";
import QuestionDisplay from "./QuestionDisplay";
import { useNavigate } from "react-router-dom";

const StudentDashboard: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const [currentSection, setCurrentSection] = useState<"examination" | "process">("examination");
    const [selectedSubject, setSelectedSubject] = useState<string>("");
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [questions, setQuestions] = useState<any[]>([]);
    const [showQuestions, setShowQuestions] = useState<boolean>(false);
    const [completedCount, setCompletedCount] = useState<number>(0);
    const [timeLeft, setTimeLeft] = useState<number>(300); 
    const [isSubmitPopupOpen, setIsSubmitPopupOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    // Đếm ngược thời gian
    useEffect(() => {
        let timer: number; 
        if (showQuestions && timeLeft > 0) {
            timer = window.setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [showQuestions, timeLeft]);


    const handleSectionChange = (section: "examination" | "process") => {
        setCurrentSection(section);
    };

    const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSubject(e.target.value);
        setIsPopupOpen(true); 
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    const handlePopupConfirm = async () => {
        setIsPopupOpen(false);
        try {
            console.log("Loading questions...");
            const subjectsRef = collection(db, "subjects");
            const subjectsSnapshot = await getDocs(subjectsRef);

            let questionsData: any[] = [];
            for (const subjectDoc of subjectsSnapshot.docs) {
                if (subjectDoc.data().id === selectedSubject) {
                    const questionsRef = collection(db, `subjects/${subjectDoc.id}/questions`);
                    const questionsSnapshot = await getDocs(questionsRef);
                    questionsData = questionsSnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    break;
                }
            }
            setQuestions(questionsData);
            setShowQuestions(true); // Hiển thị  câu hỏi
        } catch (error) {
            console.error("Error loading questions:", error);
        }
    };
    const handleOpenSubmitPopup = () => {
        setIsSubmitPopupOpen(true);
    };
    
    const handleSubmitConfirm = () => {
        setIsSubmitPopupOpen(false); // Đóng popup
        setShowQuestions(false);     
        setSelectedSubject("");      // Reset môn thi đã chọn
        setQuestions([]);            // Xóa dữ liệu câu hỏi
        setCompletedCount(0);        // Reset số câu hoàn thành
        setTimeLeft(300);            // Reset thời gian 
    
    };
    
    return (
        <div className="flex flex-col min-h-screen bg-bgPrimary">
            <SubHeader
                onSelect={handleSectionChange}
                userAvatar={user?.fileUrl || ""}
                userName={user?.fullName || "null"}
            />

            {!showQuestions ? (
                <>
                    <div className="flex justify-center my-8">
                        <div className="flex items-center bg-white shadow-md rounded-md px-2 w-full md:w-[900px]">
                            <div className="flex-grow">
                                <SelectField
                                    label=""
                                    options={["Chọn môn thi", "backend", "frontend"]}
                                    value={selectedSubject}
                                    onChange={handleSubjectChange}
                                    name="subject"
                                    required
                                />
                            </div>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md ml-4">
                                + Tạo đề thi
                            </button>
                        </div>
                    </div>

                    {/* Pop-up  */}
                    {isPopupOpen && (
                        <Popup
                            title="Bắt đầu bài thi"
                            message="Bạn có chắc muốn bắt đầu bài thi hay không?"
                            onClose={handlePopupClose}
                            onConfirm={handlePopupConfirm}
                        />
                    )}
                </>
            ) : (
                <div className="py-6 mx-auto w-[75%] ">
                    <h2 className="text-lg font-semibold">
                        Đề thi môn <br /> <span className="text-3xl">{selectedSubject}</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-between items-center my-4 bg-white gap-6 py-3 px-3 rounded-xl">
                        <div className="flex items-center">
                            <div className="text-gray-600">
                                Tổng câu hỏi: <span className="text-bgMain font-bold text-lg">{questions.length}</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-gray-600">
                                Hoàn thành:{" "}
                                <span className="text-bgMain font-bold text-lg">
                                    {completedCount}/{questions.length}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-gray-600 flex flex-row space-x-2">
                                <img src='/clock.png' alt="clock" />
                                <p className="text-bgMain font-bold text-lg">
                                    {`${Math.floor(timeLeft / 60)
                                        .toString()
                                        .padStart(2, "0")}:${(timeLeft % 60).toString().padStart(2, "0")}`}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <button
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
                                    onClick={handleOpenSubmitPopup}
                                >
                                    Nộp bài
                                </button>
                            </div>

                            {/* Confirmation Popup */}
                            {isSubmitPopupOpen && (
                                <Popup
                                    title="Nộp bài thi"
                                    message="Bạn có chắc chắn muốn nộp bài thi không?"
                                    onClose={() => setIsSubmitPopupOpen(false)}
                                    onConfirm={handleSubmitConfirm}
                                />
                            )}
                        </div>
                    </div>

                    <QuestionDisplay
                        questions={questions}
                        onComplete={(count: number) => setCompletedCount(count)}
                    />
                </div>
            )}

            <Footer className="mt-auto" />
        </div>
    );
};

export default StudentDashboard;
