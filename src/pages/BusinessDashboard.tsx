import React, { useState, useEffect, useCallback } from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { collection, addDoc, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { notification, Pagination } from "antd";
import DeleteJobModal from "../components/Modals/DeleteJobModal";
import JobPostModal from "../components/Modals/JobPostModal";
import { DownIcon, UpIcon } from "../components/common/Icons";

interface JobPost {
    NamePost: string;
    Location: string[];
    id?: string;
    userId?: string;
}

const postsPerPage = 5;

export default function BusinessDashboard() {
    const user = useSelector((state: RootState) => state.auth.user);

    const [posts, setPosts] = useState<JobPost[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [jobToDelete, setJobToDelete] = useState<string | null>(null);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [jobToEdit, setJobToEdit] = useState<JobPost | null>(null);
    const [newJob, setNewJob] = useState<JobPost>({ NamePost: '', Location: [] });

    const closeDeleteModal = () => {
        setJobToDelete(null);
        setIsDeleteModalOpen(false);
    };

    const closeModal = () => {
        setJobToEdit(null);
        setNewJob({ NamePost: '', Location: [] });
        setIsModalOpen(false);
    };
    const fetchPosts = useCallback(async () => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsList: JobPost[] = querySnapshot.docs
            .map((doc) => ({ id: doc.id, ...doc.data() }) as JobPost)
            .filter((post) => post.userId === user?.uid);

        setPosts(postsList);
    }, [user]);
    useEffect(() => {
        if (user) {
            fetchPosts();
        }
    }, [fetchPosts, user]);


    const openDeleteModal = (jobId: string) => {
        setJobToDelete(jobId);
        setIsDeleteModalOpen(true);
    };

    const openModal = (job?: JobPost) => {
        if (job) {
            setJobToEdit(job);
            setNewJob({
                NamePost: job.NamePost,
                Location: job.Location,
            });
        } else {
            setNewJob({ NamePost: '', Location: [] });
        }
        setIsModalOpen(true);
    };

    const handleSaveJob = async () => {
        if (newJob.NamePost.trim() === '' || newJob.Location.length === 0) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }

        try {
            if (jobToEdit) {
                // Cập nhật job
                const jobDocRef = doc(db, "posts", jobToEdit.id!);
                await setDoc(jobDocRef, { ...newJob }, { merge: true });

                notification.success({
                    message: 'Thành công!',
                    description: 'Vị trí tuyển dụng đã được cập nhật.',
                });
            } else {
                // Tạo mới job
                await addDoc(collection(db, "posts"), {
                    NamePost: newJob.NamePost,
                    Location: newJob.Location,
                    userId: user?.uid,
                    companyName: user?.companyName || 'Công ty chưa đăng ký',
                    companyEmail: user?.email || 'Email chưa có',
                    companyPhone: user?.managerPhone || 'Số điện thoại chưa có',
                });

                notification.success({
                    message: 'Thành công!',
                    description: 'Vị trí tuyển dụng đã được tạo thành công.',
                });
            }

            closeModal();

            // const querySnapshot = await getDocs(collection(db, "posts"));
            // const postsList: JobPost[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as JobPost);
            // setPosts(postsList);
            fetchPosts();


        } catch (e) {
            console.error("Error saving document: ", e);
            notification.error({
                message: 'Lỗi',
                description: 'Đã có lỗi xảy ra khi lưu vị trí tuyển dụng.',
            });
        }
    };

    const handleDeleteJob = async () => {
        if (!jobToDelete) return;

        try {
            const jobDocRef = doc(db, "posts", jobToDelete);
            await deleteDoc(jobDocRef);

            notification.success({
                message: 'Thành công!',
                description: 'Vị trí tuyển dụng đã được xóa.',
            });

            // const querySnapshot = await getDocs(collection(db, "posts"));
            // const postsList: JobPost[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as JobPost);
            // setPosts(postsList);
            fetchPosts()
        } catch (e) {
            console.error("Error deleting document: ", e);
            notification.error({
                message: 'Lỗi',
                description: 'Đã có lỗi xảy ra khi xóa vị trí tuyển dụng.',
            });
        } finally {
            closeDeleteModal();
        }
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    console.log("USER DOANH NGHIEP", user)

    return (
        <div className="bg-gray-100">
            <div className="container h-full py-20 mx-auto">
                <button
                    className="bg-[#f26d21] px-6 ml-4 py-3 text-white rounded-lg font-bold flex"
                    onClick={() => openModal()}
                >
                    Thêm vị trí tuyển dụng
                    <PlusOutlined className="px-2 pt-1" />
                </button>

                <JobPostModal
                    isModalOpen={isModalOpen}
                    closeModal={closeModal}
                    handleSaveJob={handleSaveJob}
                    newJob={newJob}
                    setNewJob={setNewJob}
                    jobToEdit={jobToEdit}
                />

                <DeleteJobModal
                    isDeleteModalOpen={isDeleteModalOpen}
                    closeDeleteModal={closeDeleteModal}
                    handleDeleteJob={handleDeleteJob}
                />

                <div className="relative overflow-x-auto mt-5">
                    <div className="p-4">
                        <div className="rounded-lg border">
                            <table className="w-full border-collapse border-spacing-y-4 text-center">
                                <thead>
                                    <tr className="bg-orange-200 text-[#f26d21]">
                                        <th className="px-4 py-2">ID</th>
                                        <th className="px-4 py-2">Lĩnh vực tuyển dụng</th>
                                        <th className="px-4 py-2">Nơi làm việc</th>
                                        <th className="px-4 py-2">Job Description</th>
                                        <th className="px-4 py-2">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentPosts.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-4 py-2 text-center text-gray-500">
                                                Chưa có công việc nào được đăng
                                            </td>
                                        </tr>
                                    ) : (
                                        currentPosts.map((post, index) => (
                                            <tr key={post.id}>
                                                <td className="px-4 py-2">{index + 1}</td>
                                                <td className="px-4 py-2">{post.NamePost}</td>
                                                <td className="px-4 py-2">
                                                    {Array.isArray(post.Location) ? (
                                                        post.Location.map((location, i) => (
                                                            <span
                                                                key={i}
                                                                className="bg-orange-100 text-orange-600 text-sm px-2 py-1 rounded-full mr-2 inline-block"
                                                            >
                                                                {location}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        <span className="text-gray-500 italic">Không có dữ liệu</span>
                                                    )}
                                                </td>


                                                <td className="px-4 py-2">
                                                    <div className="flex items-center justify-center gap-2 text-[#f26d21]">
                                                        <UpIcon />
                                                        <DownIcon />
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2">
                                                    <button
                                                        className="bg-transparent text-white px-4 py-2"
                                                        onClick={() => openModal(post)}
                                                    >
                                                        <EditOutlined className="text-xl text-blue-500" />
                                                    </button>
                                                    <button
                                                        className="bg-transparent text-white px-4 py-2"
                                                        onClick={() => openDeleteModal(post.id!)}
                                                    >
                                                        <DeleteOutlined className="text-red-500 text-xl" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>


                {posts.length > 0 && (
                    <Pagination
                        align="center"
                        current={currentPage}
                        total={posts.length}
                        pageSize={postsPerPage}
                        onChange={handlePageChange}
                        showSizeChanger={false}
                        className="mt-5 text-center custom-pagination"
                    />
                )}
            </div>
        </div>
    );
}
