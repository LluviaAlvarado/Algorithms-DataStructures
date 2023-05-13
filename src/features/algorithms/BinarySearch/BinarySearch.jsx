import { useState } from 'react'
import { InputKnob } from '../../../components/inputKnob/InputKnob'
import { ListVisualizer } from '../../../components/listVisualizer/ListVisualizer'
import { useDispatch, useSelector } from 'react-redux'
import {
  elementsChanged,
  searchNumber,
  selectAllSteps,
  selectResult,
} from './binarySearchSlice'
import styles from './BinarySearch.module.css'

export const BinarySearch = () => {
  const [searchArr, setSearchArr] = useState([])
  const [searchNum, setSearchNum] = useState(0)
  let stepsList = useSelector(selectAllSteps)
  let result = useSelector(selectResult)

  const dispatch = useDispatch()
  const onSearchArrChanged = (e) => {
    setSearchArr(e.target ? e.target.value : e)
  }

  const onSearchNumChanged = (e) => {
    setSearchNum(e.target ? e.target.value : e)
  }

  const onSetArrClicked = (e) => {
    dispatch(elementsChanged(searchArr.split(',').map((num) => parseInt(num))))
  }

  const onSearchClicked = (e) => {
    dispatch(searchNumber(parseInt(searchNum)))
  }

  return (
    <div className="main-container">
      <h2 className="title">The Binary Search Algorithm</h2>
      <section className="section">
        <InputKnob
          id="searchArray"
          name="searchArray"
          label="Enter the numbers to search in separated by commas:"
          value={searchArr}
          onChange={onSearchArrChanged}
          button="Set"
          onClick={onSetArrClicked}
        />
        <InputKnob
          id="searchArray"
          name="searchArray"
          type="number"
          label="Enter the number to search:"
          value={searchNum}
          onChange={onSearchNumChanged}
          button="Search"
          onClick={onSearchClicked}
        />
      </section>
      <section className={`section ${styles.stepsContainer}`}>
        <h3>{result}</h3>
        {stepsList.map((step, index) => (
          <ListVisualizer
            key={index}
            title={`Step ${index}`}
            elements={step.list}
            type="array"
            direction="row"
            className={styles.divisionStep}
          />
        ))}
      </section>
    </div>
  )
}
