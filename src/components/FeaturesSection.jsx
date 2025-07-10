import React from 'react';
import styles from './FeaturesSection.module.css';
import PhotoIcon from '../assets/iconPhoto.svg';
import VideoIcon from '../assets/iconVideo.svg';
import AiIcon from '../assets/iconAi.svg';

function FeaturesSection() {
    const features = [
        {
            icon: <img src={PhotoIcon} className={styles.featureIcon}/>,
            title: "Photo Upscaling",
            description: "Enhance the clarity and detail of your photos, making them look sharper and more vibrant."
        },
        {
            icon: <img src={VideoIcon} className={styles.featureIcon}/>,
            title: "Video Upscaling",
            description: "Improve the resolution of your videos, bringing out finer details and smoother playback."
        },
        {
            icon: <img src={AiIcon} className={styles.featureIcon}/>,
            title: "AI Enhancement",
            description: "Utilize advanced AI algorithms to intelligently enhance and upscale your media with minimal effort."
        },
    ];

    return (
        <section className={styles.featuresSection} id='future-section'>
            <div className={styles.featuresHeader}>
                <h2 className={styles.featuresTitle}>Key Features</h2>
                <p className={styles.featuresSubtitle}>
                    Explore the powerful capabilities of UpscalePro that make it the ultimate solution for enhancing your visual content
                </p>
            </div>
            <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                        <div className={styles.featureIconContainer}>
                            {feature.icon}
                        </div>
                        <h3 className={styles.featureItemTitle}>{feature.title}</h3>
                        <p className={styles.featureItemDescription}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;