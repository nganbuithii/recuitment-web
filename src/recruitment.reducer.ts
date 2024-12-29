import { createAction, createReducer } from '@reduxjs/toolkit'
import { PostType } from './types/PostType'
import { initialValue } from './constant/blog'
// import { PostType } from '../types/PostType'
// import { PostType } from './../types/Post.types'
// import { initialValue } from '~/constants/blog'

interface BlogState {
  postList: PostType[]
  editingPost: PostType | null
}

const initialState: BlogState = {
  postList: initialValue,
  editingPost: null
}
export const addPost = createAction<PostType>('blog/addPost')
export const deletePost = createAction<number>('blog/deletePost')
export const startEditPost = createAction<number>('/blog/startEditPost')
const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const post = action.payload
      state.postList.push(post)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1)
      }
    })
    .addCase(startEditPost, (state, action) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editingPost = foundPost
    })
})
export default blogReducer