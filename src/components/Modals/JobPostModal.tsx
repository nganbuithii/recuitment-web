import React from "react";
import { Modal, Form, Input, notification } from "antd";
interface JobPost {
    NamePost: string;
    Location: string;
    id?: string;
}
interface JobPostModalProps {
    isModalOpen: boolean;
    closeModal: () => void;
    handleSaveJob: () => void;
    newJob: JobPost;
    setNewJob: React.Dispatch<React.SetStateAction<JobPost>>;
    jobToEdit: JobPost | null;
}

const JobPostModal: React.FC<JobPostModalProps> = ({
    isModalOpen,
    closeModal,
    handleSaveJob,
    newJob,
    setNewJob,
    jobToEdit
}) => {
    return (
        <Modal
            title={
                <div className="modal-title text-orange-500 text-lg text-center font-bold">
                    {jobToEdit ? "Chỉnh sửa vị trí tuyển dụng" : "Tạo mới vị trí tuyển dụng"}
                </div>
            }
            visible={isModalOpen}
            onOk={handleSaveJob}
            onCancel={closeModal}
            footer={null} // Ẩn footer mặc định để custom nút
        >
            <Form layout="vertical">
                <Form.Item label="Lĩnh vực ứng tuyển">
                    <Input
                        value={newJob.NamePost}
                        onChange={(e) =>
                            setNewJob((prev) => ({ ...prev, NamePost: e.target.value }))
                        }
                    />
                </Form.Item>
                <Form.Item label="Nơi làm việc">
                    <Input
                        value={newJob.Location}
                        onChange={(e) =>
                            setNewJob((prev) => ({ ...prev, Location: e.target.value }))
                        }
                    />
                </Form.Item>
            </Form>

            {/* Custom footer */}
            <div className="flex justify-center space-x-4 mt-6">
                <button
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    onClick={closeModal}
                >
                    Đóng
                </button>
                <button
                    className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                    onClick={handleSaveJob}
                >
                    Xác nhận
                </button>
            </div>
        </Modal>
    );
};

export default JobPostModal;
