import React, { useState } from "react";
import { ArrowIconLeft } from "../../components/common/Icons";

interface QuestionDisplayProps {
    questions: { id: string; question: string; options: string[] }[];
    onComplete: (completedCount: number) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ questions, onComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<string[]>([]);

    const handleAnswerChange = (selectedOption: string) => {
        setUserAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = selectedOption;

            // Gửi số câu đã hoàn thành
            const completedCount = newAnswers.filter((answer) => answer).length;
            onComplete(completedCount);

            return newAnswers;
        });
    };

    return (
        <div className="w-full ">
            <div className="p-4  w-full  max-w-2xl  mr-auto">
                <h3 className="text-lg font-semibold mb-4">
                    Câu {currentQuestionIndex + 1}: {questions[currentQuestionIndex]?.question}
                </h3>
                <ul>
                    {questions[currentQuestionIndex]?.options.map((option, index) => (
                        <li key={index} className="mb-4 bg-white rounded-lg shadow-sm">
                            <label className="flex items-center gap-2 px-4 py-3 cursor-pointer rounded-md">
                                <label className="relative flex items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestionIndex}`}
                                        value={option}
                                        checked={userAnswers[currentQuestionIndex] === option}
                                        onChange={() => handleAnswerChange(option)}
                                        className="hidden peer" /* Ẩn radio mặc định */
                                    />
                                    <span
                                        className="w-6 h-6 border-2 border-bgMain rounded-full flex items-center justify-center 
                                    peer-checked:before:content-[''] 
                                    peer-checked:before:w-4
                                    peer-checked:before:h-4
                                peer-checked:before:bg-bgMain
                                    peer-checked:before:rounded-full"
                                    ></span>
                                </label>

                                <span>{option}</span>
                            </label>
                        </li>
                    ))}
                </ul>



            </div>
            <div className="flex justify-end  mt-4 ">
                <button
                    className="px-4 py-2 text-3xl text-bgMain "
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                >
                    <ArrowIconLeft className="transform rotate-180" />
                </button>
                <button
                    className="px-4 py-2  text-3xl text-bgMain "
                    disabled={currentQuestionIndex === questions.length - 1}
                    onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                >
                    <ArrowIconLeft />
                </button>
            </div>
        </div>
    );
};

export default QuestionDisplay;



