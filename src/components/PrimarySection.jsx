import React from 'react';
import styles from './PrimarySection.module.css';
import BackImage from '../assets/backImage.jpg';

function PrimarySection() {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${BackImage})` }}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Upscale Your Memories</h1>
                <p className={styles.heroSubtitle}>
                    Transform your low-resolution photos and videos into stunning, high-definition masterpieces with our advanced upscaling technology.
                </p>
                <a href="#future-section" className={styles.downloadButtonLink}>
                    <button className={styles.downloadButton}>Get started</button>
                </a>
            </div>
        </section>
    );
}

export default PrimarySection;
