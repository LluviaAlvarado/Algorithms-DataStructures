import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  steps: [{ list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }],
  result: '',
}

const search = (state, target, start, end) => {
  if (
    start > end ||
    start > state.steps[0].length ||
    end > state.steps[0].length
  ) {
    state.result = `${target} not found :c`
    return
  }
  const middle = Math.floor((start + end) / 2)
  if (state.steps[0].list[middle] === target) {
    state.result = `Found ${target} at index ${middle} :D`
    return
  }
  if (state.steps[0].list[middle] > target) {
    state.steps.push({ list: state.steps[0].list.slice(start, middle) })
    return search(state, target, start, middle - 1)
  }
  if (state.steps[0].list[middle] < target) {
    state.steps.push({ list: state.steps[0].list.slice(middle, end + 1) })
    return search(state, target, middle + 1, end)
  }
}

const binarySearchSlice = createSlice({
  name: 'binarySearch',
  initialState,
  reducers: {
    elementsChanged: {
      reducer(state, action) {
        state.steps = []
        state.result = ''
        state.steps.push({ list: action.payload.sort((a, b) => a - b) })
      },
    },
    searchNumber: {
      reducer(state, action) {
        state.steps = [state.steps[0]]
        search(state, action.payload, 0, state.steps[0].list.length - 1)
      },
    },
  },
})
export const { elementsChanged, searchNumber } = binarySearchSlice.actions

export default binarySearchSlice.reducer

export const selectAllSteps = (state) => state.binarySearch.steps
export const selectResult = (state) => state.binarySearch.result
