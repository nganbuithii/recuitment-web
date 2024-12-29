// import { CaretDownOutlined } from '@ant-design/icons'
import React from "react";

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostType } from '../types/PostType'
import { RootState } from '../store/store'
import { addPost, deletePost, startEditPost } from '../recruitment.reducer'
import PostItem from "../components/employer/PostItem";

const initialVale: PostType = {
    id: 0,
    Location: '',
    NamePost: ''
}
export default function BusinessDashboard() {
    const handleDelete = (PostId: number) => {
        dispatch(deletePost(PostId))
    }
    const handleStartEditingPost = (PostId: number) => dispatch(startEditPost(PostId))
    const dispatch = useDispatch()
    const postList = useSelector((state: RootState) => state.blog.postList)
    console.log('Data postList', postList)
    const [jobs, setJobs] = useState<PostType[]>([])
    const [newJob, setNewJob] = useState<PostType>({
        id: 0,
        Location: '',
        NamePost: ''
    })
    console.log(newJob)
    const closeModal = () => setIsModalOpen(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleAddJob = () => {
        if (newJob.NamePost.trim() === '') {
            alert('Vui lòng nhập tên lĩnh vực!')
            return
        }
        const newId = jobs.length > 0 ? jobs[jobs.length - 1].id + 1 : 1
        const jobWithNewId = { ...newJob, id: newId }
        setJobs([...jobs, jobWithNewId])
        closeModal()
        dispatch(addPost(jobWithNewId))
        setNewJob(initialVale)
    }
    return (
        <div className='bg-gray-100'>
            <div className='container h-full py-20 mx-auto'>
                <button
                    className='bg-[#f26d21] px-6 ml-4  py-2 text-white rounded-lg font-bold flex'
                    onClick={() => setIsModalOpen(true)}
                >                    Thêm vị trí tuyển dụng
                    <span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='size-6'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                        </svg>
                    </span>
                </button>
                {/* Modal */}
                {isModalOpen && (
                    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
                        <div className='bg-white w-[645px] h-[338px] rounded-lg shadow-lg p-6 relative'>
                            {/* Modal Header */}
                            <div className='flex justify-between items-center border-b pb-2'>
                                <h2 className='text-xl font-bold text-[#f26d21]'>Thêm vị trí tuyển dụng</h2>
                                <button onClick={() => setIsModalOpen(false)} className='text-gray-500 hover:text-gray-700'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-6 h-6'
                                    >
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className='mt-4 space-y-4'>
                                {/* Tên lĩnh vực */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700'>
                                        Tên lĩnh vực <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Công nghệ thông tin'
                                        className='w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300'
                                        value={newJob.NamePost}
                                        onChange={(event) => setNewJob((prev) => ({ ...prev, NamePost: event.target.value }))}
                                    />
                                </div>{/* Nơi làm việc */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700'>
                                        Nơi làm việc <span className='text-red-500'>*</span>
                                    </label>
                                    <div className='relative'>
                                        <select
                                            className='w-full mt-1 py-2 border rounded-lg'
                                            value={newJob.Location}
                                            onChange={(event) => setNewJob((prev) => ({ ...prev, Location: event.target.value }))}
                                        >
                                            <option value='all'>Tất cả</option>
                                            <option value='TP. Hồ Chí Minh'>TP. Hồ Chí Minh</option>
                                            <option value='Bà Rịa - Vũng Tàu'>Bà Rịa - Vũng Tàu</option>
                                        </select>
                                        {/* <span className='absolute right-[-19px] top-[26px]  -translate-y-1/2 text-[#f26d21]'>
                      <CaretDownOutlined style={{ width: '50px', fontSize: '25px' }} />
                    </span> */}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className='flex justify-end mt-6 space-x-3'>
                                <button onClick={closeModal} className='px-4 py-2 text-gray-700 bg-gray-200 rounded-lg'>
                                    Đóng
                                </button>
                                <button className='px-4 py-2 text-white bg-[#f26d21] rounded-lg' onClick={handleAddJob}>
                                    Xác nhận
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className='relative overflow-x-auto mt-5'>
                    <div className='p-4'>
                        <div className='rounded-lg border'>
                            <table className='w-full border-collapse border-spacing-y-4 text-center'>
                                <thead>
                                    <tr className='bg-orange-200 text-[#f26d21]'>
                                        <th className='px-4 py-2'>ID</th>
                                        <th className='px-4 py-2'>Lĩnh vực tuyển dụng</th>
                                        <th className='px-4 py-2'>Nơi làm việc</th>
                                        <th className='px-4 py-2'>Job Description</th>
                                        <th className='px-4 py-2'>Hành động</th>
                                    </tr>
                                </thead>
                                {postList.map((post) => (
                                    <PostItem
                                        key={post.id}
                                        post={post}
                                        handleDelete={handleDelete}
                                        handleStartEditingPost={handleStartEditingPost}
                                    />
                                ))}
                            </table>
                        </div>
                    </div>
                    {/* <Pagination align='center' defaultCurrent={1} total={50} style={{ marginTop: '10px' }} /> */}
                    {/* <Paginate /> */}
                </div>
            </div>
        </div>
    )
}