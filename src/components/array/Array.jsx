import styles from './Array.module.css'

export const Array = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <ul className={styles.array}>
        {props.elements.map((element, index) => (
          <li key={index} className={styles.arrayElement}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  )
}
