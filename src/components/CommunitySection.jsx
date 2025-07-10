import React from 'react';
import styles from './CommunitySection.module.css';

function CommunitySection() {
    return (
        <section className={styles.communitySection}>
            <h2 className={styles.communityTitle}>Join Our Community</h2>
            <p className={styles.communitySubtitle}>
                Sign up for an account to access exclusive features, manage your upscaled media, and stay updated with the latest improvements.
            </p>
            {/* Кнопка "Register Now" */}
            <button className={styles.registerButton}>Register Now</button>
        </section>
    );
}

export default CommunitySection;