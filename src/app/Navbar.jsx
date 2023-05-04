import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { DropdownMenu } from './DropdownMenu'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <section className={styles.navContainer}>
        <h1 className={styles.title}>
          <a href="/">Algorithms & Data Structures Compilation</a>
        </h1>

        <div className={styles.navContent}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <DropdownMenu title="Algorithms" items={[]} />
          <DropdownMenu
            title="Data Structures"
            items={[{ id: 1, title: 'Heap', route: 'heap' }]}
          />
        </div>
      </section>
    </nav>
  )
}
