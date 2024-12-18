import React, { useState } from 'react';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import SelectField from '../../components/common/SelectField';
import InputField from '../../components/common/InputField';
import TextareaField from '../../components/common/TextareaField';
import Button from '../../components/common/Button';
import { SendIcon } from '../../components/common/Icons';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const ProcessLessonForm: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [linkFile, setLinkFile] = useState<string>('');
    const [reportContent, setReportContent] = useState<string>('');
    const user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate(); 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) {
            navigate('/');
            return;
        }

        try {
            await addDoc(collection(db, 'reports'), {
                userId: user.uid,  
                selectedOption,
                linkFile,
                reportContent,
                createdAt: Timestamp.fromDate(new Date()) 
            });

            console.log("Dữ liệu đã được gửi thành công");
            setSelectedOption('');
            setLinkFile('');
            setReportContent('');

        } catch (error) {
            console.error("Lỗi khi gửi báo cáo:", error);
        }
    };

    const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="items-center justify-center min-h-screen bg-gray-100">
            <div className="py-10 items-center w-full ml-80 max-w-lg">
                <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
                    Xin chào <span className="text-bgMain">{user?.fullName || 'Người dùng'}</span>
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <SelectField
                            label="Chọn lớp / Chọn nhóm thực tập"
                            options={["Lớp 1 -Nhóm 1", "Lớp 2- Nhóm 2", "Lớp 3- Nhóm 3 "]}
                            value={selectedOption}
                            onChange={handleSubjectChange}
                            name="class"
                            required
                        />
                    </div>

                    <InputField
                        id="linkFile"
                        type="text"
                        label="Link file"
                        placeholder="Nhập link file"
                        required={true}
                        value={linkFile}
                        name="linkFile"
                        onChange={(e) => setLinkFile(e.target.value)}
                    />

                    <TextareaField
                        id="reportContent"
                        label="Nội dung báo cáo"
                        placeholder="Nhập trường đang học"
                        value={reportContent}
                        name="reportContent"
                        rows={4}
                        required={true}
                        onChange={(e) => setReportContent(e.target.value)}
                    />

                    <div className="text-left w-1/4">
                        <Button
                            text="Gửi" 
                            icon={<SendIcon />} 
                            type="submit" 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProcessLessonForm;
