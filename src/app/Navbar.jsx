import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <section className={styles.navContainer}>
        <h1>Algorithms & Data Structures Compilation</h1>

        <div className={styles.navContent}>
          <div className={styles.navLinks}>
            <Link to="heap">Heap</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
