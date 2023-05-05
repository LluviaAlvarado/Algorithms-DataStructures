import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  elementAdded,
  elementRemoved,
  modeChanged,
  selectFullHeap,
} from './heapSlice'
import { InputKnob } from '../../../components/inputKnob/InputKnob'
import styles from './Heap.module.css'
import { ListVisualizer } from '../../../components/listVisualizer/ListVisualizer'

export const Heap = () => {
  const [mode, setMode] = useState('min')
  const heap = useSelector(selectFullHeap)
  const [newElement, setElement] = useState(0)
  const [removeElement, setRemoveElement] = useState(0)

  const dispatch = useDispatch()
  const onElementChanged = (e) => {
    setElement(parseInt(e.target ? e.target.value : e))
  }
  const onRemoveElementChanged = (e) =>
    setRemoveElement(parseInt(e.target ? e.target.value : e))
  const onModeChanged = (e) => {
    setMode(e.target.value)
    dispatch(modeChanged(e.target.value))
  }

  const onAddElementClicked = () => {
    dispatch(elementAdded(newElement))
  }

  const onRemoveElementClicked = () => {
    dispatch(elementRemoved(removeElement))
  }

  return (
    <div className="main-container">
      <h2 className="title">The Heap Data Structure</h2>
      <section className="section">
        <div className={styles.modeKnob}>
          <label>Mode:</label>
          <input
            type="radio"
            name="mode"
            value="min"
            checked={mode === 'min'}
            onChange={onModeChanged}
          />
          <label htmlFor="min">Min</label>
          <input
            type="radio"
            name="mode"
            value="max"
            checked={mode === 'max'}
            onChange={onModeChanged}
          />
          <label htmlFor="max">Max</label>
        </div>
        <InputKnob
          id="addElement"
          name="addElement"
          type="number"
          label="Add a number to the heap:"
          value={newElement}
          onChange={onElementChanged}
          button="Add"
          onClick={onAddElementClicked}
        />
        <InputKnob
          id="removeElement"
          name="removeElement"
          type="number"
          label="Remove a number from the heap:"
          value={removeElement}
          onChange={onRemoveElementChanged}
          button="Remove"
          onClick={onRemoveElementClicked}
        />
      </section>

      <section className="section">
        <div className={styles.result}>
          <h4>{`The ${mode} number is: ${heap[0]}`}</h4>
        </div>
        <div className={styles.heapVisualizer}>
          <ListVisualizer
            className={styles.representationContainer}
            title="Heap as an Array"
            elements={heap}
            type="array"
          />
          <ListVisualizer
            className={styles.representationContainer}
            title="Heap as a Tree"
            elements={heap}
            type="binary-tree"
          />
        </div>
      </section>
    </div>
  )
}
