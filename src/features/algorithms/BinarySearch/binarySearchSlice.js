import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const LEFT = 1
const RIGHT = 2
const goDown = (index, dir) => index * 2 + dir
const goUp = (index) => Math.floor((index - 1) / 2)

const heapifyUp = (state) => {
  // heapifying up
  let i = state.heap.length - 1
  let parentI = goUp(i)
  while (i >= 0 && state.heap[parentI] > state.heap[i]) {
    const parentValue = state.heap[parentI]
    state.heap[parentI] = state.heap[i]
    state.heap[i] = parentValue
    i = parentI
    parentI = goUp(i)
  }
}

const binarySearchSlice = createSlice({
  name: 'binarySearch',
  initialState,
  reducers: {
    elementsChanged: {
      reducer(state, action) {
        if (action.payload.length) {
          action.payload.forEach((element) => {
            state.heap.push(parseInt(element))
            heapifyUp(state)
          })
        }
      },
    },
    performSearch: {
      reducer(state, action) {
        let i = 0
        while (i < state.length && state[i] !== action.payload) {
          if (state[i] > action.payload) {
            i = goDown(i, LEFT)
          } else {
            i = goDown(i, RIGHT)
          }
        }
        if (i < state.length) {
          return state[i]
        } else {
          return null
        }
      },
    },
  },
})

export default binarySearchSlice.reducer
export const selectFullTree = (state) => state
