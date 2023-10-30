import React from 'react'
import styles from './Header.module.css'

const Nav = () => {

  return (
    <div className={styles.navbody}>

        <div style={{
            display: 'flex',
            

        }}>
            <ul className={styles.ul}>
                <li className={styles.li}>Home</li>
                <li className={styles.li}>About Us</li>
                <li className={styles.li}>Projects</li>
                <li className={styles.li}>Portfolio</li>
            </ul>
        </div>

    </div>
  )
}

export default Nav;