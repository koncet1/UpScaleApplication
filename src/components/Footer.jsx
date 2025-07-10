import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerNav}>
                <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
                <a href="#terms" className={styles.footerLink}>Terms of Service</a>
                <a href="#contact" className={styles.footerLink}>Contact Us</a>
            </div>
            <p className={styles.copyright}>
                © 2025 UpVision. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;