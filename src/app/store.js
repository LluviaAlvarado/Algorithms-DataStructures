import { configureStore } from '@reduxjs/toolkit'

import heapReducer from '../features/dataStructures/Heap/heapSlice.js'

export default configureStore({
  reducer: {
    heap: heapReducer,
  },
})
