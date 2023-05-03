import { NumberInput } from '../../components/numberInput/NumberInput'
import styles from './InputKnob.module.css'

export const InputKnob = (props) => {
  return (
    <div className={styles.knobContainer}>
      <label htmlFor={props.id} className={styles.knobLabel}>
        {props.label}
      </label>
      <NumberInput
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        className={styles.knobInput}
      />
      <button
        type="button"
        className={styles.knobButton}
        onClick={props.onClick}
      >
        {props.button}
      </button>
    </div>
  )
}
