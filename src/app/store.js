import { configureStore } from '@reduxjs/toolkit'

import heapReducer from '../features/dataStructures/Heap/heapSlice.js'
import binarySearchReducer from '../features/algorithms/BinarySearch/binarySearchSlice.js'

export default configureStore({
  reducer: {
    heap: heapReducer,
    binarySearch: binarySearchReducer,
  },
})
