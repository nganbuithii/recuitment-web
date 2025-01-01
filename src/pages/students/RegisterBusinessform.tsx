import React from "react";
import { Form, Input, notification } from "antd";
import Button from "../../components/common/Button";
import { SendIcon } from "../../components/common/Icons";
import { useDispatch, useSelector } from "react-redux";
import { saveBusiness } from "../../store/businessSlice";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../services/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const RegisterBusinessForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error } = useSelector((state: RootState) => state.business);
    const navigate = useNavigate();

    const handleSubmit = async (values: any) => {
        const processedValues = {
            ...values,
            managerPhone: values.managerPhone || "",
        };

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                values.contactEmail,
                values.password
            );
            const user = userCredential.user;

            await setDoc(doc(db, "businesses", user.uid), {
                ...processedValues,
                role: "DOANH_NGHIEP",
            });

            notification.success({
                message: "Thành công",
                description: "Doanh nghiệp đã được đăng ký thành công!",
            });

            form.resetFields();
            navigate("/login");
        } catch (error) {
            console.error(error);
            notification.error({
                message: "Lỗi",
                description: "Đăng ký doanh nghiệp không thành công.",
            });
        }
    };

    return (
        <div className="bg-gray-50">
            <div className="max-w-screen-md mx-auto px-40 sm:px-8 py-8">
                <h1 className="text-2xl font-bold text-orange-500 mb-6">ĐIỀN THÔNG TIN ĐĂNG KÝ</h1>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-x-10"
                >
                    <Form.Item
                        label="Email liên hệ"
                        name="contactEmail"
                        rules={[{ required: true, message: "Vui lòng nhập email liên hệ!" }]}
                    >
                        <Input className="py-2 border-none bg-white shadow-sm" placeholder="Nhập email liên hệ" />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
                    >
                        <Input.Password className="py-2 border-none bg-white shadow-sm" placeholder="Nhập mật khẩu" />
                    </Form.Item>

                    <Form.Item
                        label="Địa chỉ công ty"
                        name="companyAddress"
                        rules={[{ required: true, message: "Vui lòng nhập địa chỉ công ty!" }]}
                    >
                        <Input className="py-2 border-none bg-white shadow-sm" placeholder="Nhập địa chỉ công ty" />
                    </Form.Item>

                    <Form.Item
                        label="Tên doanh nghiệp"
                        name="companyName"
                        rules={[{ required: true, message: "Vui lòng nhập tên doanh nghiệp!" }]}
                    >
                        <Input className="py-2 border-none bg-white shadow-sm" placeholder="Nhập tên doanh nghiệp" />
                    </Form.Item>

                    <Form.Item
                        label="Người quản lý"
                        name="managerName"
                        rules={[{ required: true, message: "Vui lòng nhập tên người quản lý!" }]}
                    >
                        <Input className="py-2 border-none bg-white shadow-sm" placeholder="Nhập tên người quản lý" />
                    </Form.Item>

                    <Form.Item
                        label="Điện thoại công ty"
                        name="companyPhone"
                        rules={[{ required: true, message: "Vui lòng nhập điện thoại công ty!" }]}
                    >
                        <Input className="py-2 border-none bg-white shadow-sm" placeholder="Nhập điện thoại công ty" />
                    </Form.Item>

                    <Form.Item
                        label="Điện thoại người quản lý"
                        name="managerPhone"
                    >
                        <Input className="py-2 border-none bg-white shadow-sm" placeholder="Nhập điện thoại người quản lý" />
                    </Form.Item>

                    <p className="col-span-2 text-sm text-gray-500">* là những trường thông tin bắt buộc</p>

                    <Form.Item className="w-[130px] sm:w-[140px] flex justify-center mt-4">
                        <Button text="Gửi" icon={<SendIcon />} loading={loading} />
                    </Form.Item>

                    {error && <p className="text-red-500">{error}</p>}
                </Form>
            </div>
        </div>
    );
};

export default RegisterBusinessForm;
