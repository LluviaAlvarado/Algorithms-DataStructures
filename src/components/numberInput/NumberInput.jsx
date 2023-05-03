import styles from './NumberInput.module.css'

export const NumberInput = (props) => {
  const onUp = (e) => {
    document.getElementById(props.id).stepUp()
    e.preventDefault()
  }
  const onDown = (e) => {
    document.getElementById(props.id).stepDown()
    e.preventDefault()
  }

  return (
    <div className={`${props.className} ${styles.inputContainer}`}>
      <input
        type="number"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
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
