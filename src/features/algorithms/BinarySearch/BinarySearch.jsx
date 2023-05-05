import { useState } from 'react'
import { InputKnob } from '../../../components/inputKnob/InputKnob'
export const BinarySearch = () => {
  const [searchArr, setSearchArr] = useState([])
  const [searchNum, setSearchNum] = useState(0)

  const onSearchArrChanged = (e) => {
    setSearchArr(e.target ? e.target.value : e)
  }

  const onSearchNumChanged = (e) => {
    setSearchNum(e.target ? e.target.value : e)
  }

  const onSetArrClicked = (e) => {}
  const onSearchClicked = (e) => {}

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
          button="Set"
          onClick={onSearchClicked}
        />
      </section>
    </div>
  )
}
