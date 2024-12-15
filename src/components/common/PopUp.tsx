// components/common/ConfirmationPopup.tsx
import React from "react";

interface PopupProps {
    title:string;
    message: string;
    onClose: () => void;
    onConfirm: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose, onConfirm , title}) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-[460px]">
                <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
                <p className="text-center mb-4">{message}</p>
                <div className="flex justify-center gap-4">
                    <button className="bg-gray-300 px-6 py-2 rounded-md" onClick={onClose}>
                        Đóng
                    </button>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-md" onClick={onConfirm}>
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
