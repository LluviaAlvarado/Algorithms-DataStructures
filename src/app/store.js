import { configureStore } from '@reduxjs/toolkit'

import heapReducer from '../features/Heap/heapSlice.js'

export default configureStore({
  reducer: {
    heap: heapReducer,
  },
})
