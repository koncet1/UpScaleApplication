import React from "react";
import styles from './Header.module.css';
import Logo from '../assets/Logo.jpg';
import scrollToSection from '../scripts/ScrollSection.js'

function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={Logo} className={styles.logoIcon}></img>
                <span className={styles.logoText}>UpVision</span>
            </div>

            <nav className={styles.navbarNav}>
                <a href="#news" className={styles.navLink}>News</a>
                <a href="#home" className={styles.navLink}>Home</a>
            </nav>

            <div className={styles.headerActions}>
                <a href="#installation-section" className={styles.downloadButtonLink} onClick={(e) => scrollToSection(e, 'installation-section')}>
                    <button className={styles.downloadButton}>
                        Download
                        {/*<img src={windowsLogo} alt="Windows Logo" className={styles.windowsIcon} />*/}
                    </button>
                </a>
                <button className={styles.loginButton}>Login</button>
            </div>
        </header>
    );
}

export default Header;