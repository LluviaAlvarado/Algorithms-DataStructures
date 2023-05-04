import { createSlice } from '@reduxjs/toolkit'

const LEFT = 1
const RIGHT = 2
const goDown = (index, dir) => index * 2 + dir
const goUp = (index) => Math.floor((index - 1) / 2)

const initialState = {
  heap: [10, 15, 20],
  mode: 'min',
}

const heapifyDown = (state) => {
  //heapyfing down
  let i = 0
  let lChIndex = goDown(i, LEFT)
  let rChIndex = goDown(i, RIGHT)
  while (lChIndex < state.heap.length) {
    let smallerChIndex = lChIndex
    if (
      state.heap[rChIndex] &&
      (state.mode === 'min'
        ? state.heap[rChIndex] < state.heap[lChIndex]
        : state.heap[rChIndex] > state.heap[lChIndex])
    ) {
      smallerChIndex = rChIndex
    }
    if (
      state.mode === 'min'
        ? state.heap[i] < state.heap[smallerChIndex]
        : state.heap[i] > state.heap[smallerChIndex]
    ) {
      break
    } else {
      const parentValue = state.heap[i]
      state.heap[i] = state.heap[smallerChIndex]
      state.heap[smallerChIndex] = parentValue
    }
    i = smallerChIndex
    lChIndex = goDown(i, LEFT)
    rChIndex = goDown(i, RIGHT)
  }
}

const heapifyUp = (state) => {
  // heapifying up
  let i = state.heap.length - 1
  let parentI = goUp(i)
  while (
    i >= 0 &&
    (state.mode === 'min'
      ? state.heap[parentI] > state.heap[i]
      : state.heap[parentI] < state.heap[i])
  ) {
    const parentValue = state.heap[parentI]
    state.heap[parentI] = state.heap[i]
    state.heap[i] = parentValue
    i = parentI
    parentI = goUp(i)
  }
}

const heapSlice = createSlice({
  name: 'heap',
  initialState,
  reducers: {
    elementAdded: {
      reducer(state, action) {
        if (state.heap.includes(action.payload)) {
          // no duplicates allowed
          return
        }
        state.heap.push(action.payload)
        heapifyUp(state)
      },
    },
    elementRemoved: {
      reducer(state, action) {
        if (state.heap.splice(state.heap.indexOf(action.payload), 1)) {
          heapifyDown(state)
        } else {
          return
        }
      },
    },
    modeChanged: {
      reducer(state, action) {
        state.mode = action.payload
        const copy = state.heap
        state.heap = []
        copy.forEach((element) => {
          state.heap.push(element)
          heapifyUp(state)
        })
      },
    },
  },
})

export const { elementAdded, elementRemoved, modeChanged } = heapSlice.actions

export default heapSlice.reducer

export const selectFullHeap = (state) => state.heap.heap
