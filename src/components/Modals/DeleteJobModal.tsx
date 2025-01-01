import React from "react";
import { Button, Modal, notification } from "antd";

interface DeleteJobModalProps {
    isDeleteModalOpen: boolean;
    closeDeleteModal: () => void;
    handleDeleteJob: () => void;
}

const DeleteJobModal: React.FC<DeleteJobModalProps> = ({
    isDeleteModalOpen,
    closeDeleteModal,
    handleDeleteJob,
}) => {
    return (
        <Modal
            title={<span className="text-center text-xl text-red-500 font-bold">Xóa bài tuyển dụng?</span>}
            open={isDeleteModalOpen}
            onOk={handleDeleteJob}
            onCancel={closeDeleteModal}
            okText="Xóa"
            cancelText="Đóng"
            okButtonProps={{ danger: true }}
            className="text-center"
            footer={null}
        >
            <div className="flex flex-col items-center text-center">
                <p className="mb-4 text-lg">Tất cả dữ liệu về ứng viên ứng tuyển cho vị trí này đều sẽ bị xóa và sẽ không thể khôi phục được.</p>
                <p className="text-lg">Bạn chắc chắn muốn xóa bài tuyển dụng này?</p>
            </div>

            <div className="flex justify-center space-x-4">
                <Button onClick={closeDeleteModal} type="default">
                    Đóng
                </Button>
                <Button onClick={handleDeleteJob} type="primary" danger>
                    Xóa
                </Button>
            </div>
        </Modal>
    );
};

export default DeleteJobModal;
