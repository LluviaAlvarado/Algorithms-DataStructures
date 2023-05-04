import { useState } from 'react'
import styles from './NumberInput.module.css'

export const NumberInput = (props) => {
  const [value, setValue] = useState(props.value || 0)

  const onUp = (e) => {
    setValue(value + 1)
    props.onChange(value + 1)
  }

  const onDown = (e) => {
    setValue(value - 1)
    props.onChange(value - 1)
  }

  const onValueChange = (e) => {
    setValue(e.target.value)
    props.onChange(e)
  }

  return (
    <div className={`${props.className} ${styles.inputContainer}`}>
      <input
        type="number"
        name={props.name}
        id={props.id}
        value={value}
        onChange={onValueChange}
        className={styles.input}
      />
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={onUp}>
          &#x25B2;
        </button>
        <button className={styles.button} onClick={onDown}>
          &#x25BC;
        </button>
      </div>
    </div>
  )
}
