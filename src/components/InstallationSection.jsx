import React from 'react';
import styles from './InstallationSection.module.css';
import windowsLogoLarge from '../assets/windowsImage.jpg'; // Укажите правильный путь к большому лого Windows

function InstallationGuideSection() {
    return (
        <section className={styles.installationGuide}>
            <div className={styles.introHeader}>
                <h2 className={styles.introTitle}  id="installation-section">Installation</h2>
                <p className={styles.introSubtitle}>
                    Follow these simple steps to install UpVision on your <br/> system and start enhancing your media today
                </p>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Crystal Mirror - Windows 10/11 x64</h2>
                    <p className={styles.description}>
                        Version Crystal Mirror follow these simple steps to install UpVision on your system and start enhancing your media today
                    </p>
                    <a href="/AppScale.jpeg" download="AppScale.jpeg" className={styles.downloadButtonLink}>
                        <button className={styles.downloadButton}>Download</button>
                    </a>
                </div>
                <div className={styles.imageContainer}>
                    <img src={windowsLogoLarge} alt="Windows Logo" className={styles.windowsImage} />
                </div>
            </div>
        </section>
    );
}

export default InstallationGuideSection;