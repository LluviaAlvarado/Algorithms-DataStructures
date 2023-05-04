import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './DropdownMenu.module.css'

export const DropdownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

  return (
    <span>
      <button className={styles.menuName} onClick={toggleDropdown}>
        {props.title}
      </button>
      {isOpen && (
        <ul className={styles.linksContainer}>
          {props.items.map((item) => (
            <Link
              to={item.route}
              key={item.id}
              className={styles.link}
              onClick={toggleDropdown}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      )}
    </span>
  )
}
