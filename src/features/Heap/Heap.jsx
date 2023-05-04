import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  elementAdded,
  elementRemoved,
  modeChanged,
  selectFullHeap,
} from './heapSlice'
import { InputKnob } from '../../components/inputKnob/InputKnob'
import styles from './Heap.module.css'

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

  const nodeColors = [styles.lila, styles.pink, styles.blue]
  let tree
  let nodeColor = -1
  let i = 0,
    level = 0
  const mappedHeap = []

  while (i < heap.length) {
    const levelLength = i + 2 ** level
    const levelNodes = heap.slice(i, levelLength)
    for (let j = 0; j < levelLength - heap.length; j++) {
      levelNodes.push('-')
    }
    mappedHeap.push(
      // eslint-disable-next-line no-loop-func
      levelNodes.map((node, index) => {
        if (index % 2 === 0) {
          nodeColor++
          if (nodeColor >= nodeColors.length) {
            nodeColor = 0
          }
        }
        return (
          <button
            key={index}
            className={`${styles.node}  ${nodeColors[nodeColor]}`}
          >
            {node}
          </button>
        )
      })
    )
    i = levelLength
    level++
  }

  tree = mappedHeap.map((level, index) => (
    <div key={index} className={styles.level}>
      {level}
    </div>
  ))

  return (
    <div className={styles.heapContainer}>
      <h2 className={styles.title}>The Heap Data Structure</h2>
      <section className={styles.section}>
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

      <section className={`${styles.section}`}>
        <div className={styles.result}>
          <h4>{`The ${mode} number is: ${heap[0]}`}</h4>
        </div>
        <div className={styles.heapVisualizer}>
          <div className={styles.representationContainer}>
            <h2>Heap as an Array</h2>
            <ul className={styles.array}>
              {heap.map((element, index) => (
                <li key={index} className={styles.arrayElement}>
                  {element}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`${styles.representationContainer} ${styles.treeContainer}`}
          >
            <h2>Heap as a Tree</h2>
            <div className={styles.tree}>{tree}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
