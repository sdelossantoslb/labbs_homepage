import { configureStore } from '@reduxjs/toolkit'
import postReducer from './reducers/post.reducer'

const store = configureStore({
  reducer: {
    posts: postReducer
  },
})

export default store