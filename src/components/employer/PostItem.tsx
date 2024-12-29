import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PostType } from '../../types/PostType'
import { RootState } from '../../store/store'

interface PostItemType {
    post: PostType
    handleDelete: (PostId: number) => void
    handleStartEditingPost: (PostId: number) => void
}
const initialVale: PostType = {
    id: 0,
    Location: '',
    NamePost: ''
}

export default function PostItem({ post, handleDelete, handleStartEditingPost }: PostItemType) {
    const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false)
    const [expandedRow, setExpandedRow] = useState<number | null>(null)
    const [isDelete, setIsDelete] = useState<boolean>(false)
    const editingPost = useSelector((state: RootState) => state.blog.editingPost)
    const [newJob, setNewJob] = useState(initialVale)
    useEffect(() => {
        setNewJob(editingPost || initialVale)
    }, [editingPost])

    const toggleExpand = (id: number) => {
        setExpandedRow((prev) => (prev === id ? null : id))
    }

    return (
        <tbody>
            <React.Fragment>
                <tr className='bg-white border'>
                    <td className=''>
                        <div className='flex items-center justify-between'>
                            <button onClick={() => toggleExpand(post.id)} className='text-[#f26d21]'>
                                {expandedRow === post.id ? (
                                    <svg
                                        className='w-6 h-6 text-[#f26d21]'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className='w-6 h-6 '
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                )}
                            </button>
                            <span>{post.id}</span>
                        </div>
                    </td>
                    <td className='px-4 py-2'>{post.NamePost}</td>
                    <td className='px-4 py-2 flex items-center justify-center gap-2'>
                        <div className='bg-gray-100 p-1 rounded-lg font-bold text-gray-500'>{post.Location}</div>
                        <div className='bg-gray-100 p-1 rounded-lg font-bold text-gray-500'>{post.Location}</div>
                    </td>
                    {/* Upload, Download CV */}
                    <td className='px-4 py-2'>
                        <div className='flex items-center justify-center gap-2 text-[#f26d21]'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-[20px] h-[20px]'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5'
                                />
                            </svg>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-[20px] h-[20px]'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
                                />
                            </svg>
                        </div>
                    </td>
                    {/* Action Icon */}
                    <td className='px-4 py-2'>
                        {/* Button Edit Post */}
                        <button className='text-blue-500 mx-1' onClick={() => setIsOpenEdit(true)}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='size-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                                />
                            </svg>
                        </button>
                        {isOpenEdit && (
                            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
                                <div className='bg-white w-[645px] h-[338px] rounded-lg shadow-lg p-6 relative'>
                                    {/* Modal Header */}
                                    <div className='flex justify-between items-center border-b pb-2'>
                                        <h2 className='text-xl font-bold text-[#f26d21]'>Chỉnh Sửa Thông Tin Tuyển Dụng</h2>
                                        <button onClick={() => setIsOpenEdit(false)} className='text-gray-500 hover:text-gray-700'>
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
                                            <label className='block text-sm font-medium text-start text-gray-700'>
                                                Tên lĩnh vực <span className='text-red-500'>*</span>
                                            </label>
                                            <input
                                                type='text'
                                                placeholder='Công nghệ thông tin'
                                                className='w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300'
                                                onChange={(e) => setNewJob({ ...newJob, Location: e.target.value })}
                                            />
                                        </div>

                                        {/* Nơi làm việc */}
                                        <div>
                                            <label className='block text-sm font-medium text-start text-gray-700'>
                                                Nơi làm việc <span className='text-red-500'>*</span>
                                            </label>
                                            <div className='relative'>
                                                <select
                                                    className='w-full mt-1 py-2 border rounded-lg'
                                                    onChange={(e) => setNewJob({ ...newJob, Location: e.target.value })}
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
                                        <button
                                            onClick={() => setIsOpenEdit(false)}
                                            className='px-4 py-2 text-gray-700 bg-gray-200 rounded-lg'
                                        >
                                            Đóng
                                        </button>
                                        <button
                                            className='px-4 py-2 text-white bg-[#f26d21] rounded-lg'
                                            onClick={() => handleStartEditingPost(post.id)}
                                        >
                                            Xác nhận
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <button className='text-orange-500 mx-1'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='size-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
                                />
                            </svg>
                        </button>
                        <button className='text-red-500 mx-1' onClick={() => setIsDelete(true)}>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='size-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                                />
                            </svg>
                        </button>
                        {isDelete && (
                            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
                                <div className='bg-white w-[645px] h-[280px] rounded-lg shadow-lg p-6 relative'>
                                    {/* Modal Header */}
                                    <div className=' border-b pb-2'>
                                        <h2 className='text-xl font-bold text-center text-[#EC3740]'>Xóa Bài Tuyển Dụng?</h2>
                                    </div>
                                    <div>
                                        <p className='text-xl text-black'>
                                            Tất cả dữ liệu về ứng viên ứng tuyển cho vị trí này đều sẽ bị xóa và sẽ không thể khôi phục được{' '}
                                            <br /> Bạn chắc chắn muốn xóa bài tuyển dụng này?
                                        </p>
                                    </div>
                                    {/* Modal Footer */}
                                    <div className='flex justify-center items-center mt-6 space-x-3'>
                                        <button
                                            onClick={() => setIsDelete(false)}
                                            className='px-4 py-2 text-gray-700 bg-gray-200 rounded-lg'
                                        >
                                            Đóng
                                        </button>
                                        <button
                                            className='px-4 py-2 text-white bg-[#EC3740] rounded-lg'
                                            onClick={() => handleDelete(post.id)}
                                        >
                                            Xác nhận
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </td>
                </tr>
                {/* Thông tin chi tiết */}
                {expandedRow === post.id && (
                    <tr>
                        <td colSpan={9} className='border border-gray-300 px-4 py-2'>
                            <div className='flex items-center justify-center'>
                                <div>
                                    <h4 className='font-bold bg-gray-100'>Tên thực tập sinh:</h4>
                                    <p className='bg-white p-5 w-full'>Nguyễn Văn A</p>
                                </div>
                                <div>
                                    <h4 className='font-bold'>Ngày Sinh</h4>
                                    <p className='bg-white p-5'>01/02/2001</p>
                                </div>
                                <div>
                                    <h4 className='font-bold'>Ngày Đăng Ký</h4>
                                    <p className='bg-white p-5'>2024/1/2</p>
                                </div>
                                <div>
                                    <h4 className='font-bold'>Điện Thoại</h4>
                                    <p className='bg-white p-5'>12345678</p>
                                </div>
                                <div>
                                    <h4 className='font-bold'>Trường Đại Học</h4>
                                    <p className='bg-white p-5'>NTT</p>
                                </div>
                                <div>
                                    <h4 className='font-bold'>Chuyên Ngành</h4>
                                    <p className='bg-white p-5'>IT</p>
                                </div>
                                <div>
                                    <h4 className='font-bold'>Địa chỉ mail</h4>
                                    <p className='bg-white p-5'>nva@email.com</p>
                                </div>
                                <div>
                                    <h4 className='font-bold'>Kiểm tra đầu vào</h4>
                                    <p className='bg-white p-5'>null</p>
                                </div>
                                <div>
                                    <h4 className='font-bold'>Download CV</h4>
                                    <p className='bg-white p-5'>null</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                )}
            </React.Fragment>
        </tbody>
    )
}
