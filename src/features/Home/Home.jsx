import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeSection}>
        <h2>Algorithms</h2>
        <Link to="binary-search" className={styles.button}>
          Binary Search
        </Link>
      </div>

      <div className={styles.homeSection}>
        <h2>Data Structures</h2>
        <Link to="heap" className={styles.button}>
          Heap
        </Link>
      </div>
    </div>
  )
}
