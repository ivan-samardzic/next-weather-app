import React from 'react'
import styles from '../styles/Home.module.css'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <h4 className={styles.title}>Weather App</h4>
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <a className={styles.itemTitle} href='/howto'>How To</a>
                    </li>
                    <li className={styles.listItem}>
                        <a className={styles.itemTitle} href='/about'>About</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
