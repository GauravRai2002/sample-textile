import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero({
    subtitle = "Premium Indian Textiles",
    title,
    highlightWord,
    description,
    primaryBtn,
    secondaryBtn,
    isPageHero = false
}) {
    const renderTitle = () => {
        if (highlightWord && title.includes(highlightWord)) {
            const parts = title.split(highlightWord);
            return (
                <>
                    {parts[0]}<span>{highlightWord}</span>{parts[1]}
                </>
            );
        }
        return title;
    };

    return (
        <section className={`${styles.hero} ${isPageHero ? styles.pageHero : ''}`}>
            {/* Ambient Background */}
            <div className={styles.heroBackground}></div>
            <div className={`${styles.heroGlow} ${styles.heroGlow1}`}></div>
            <div className={`${styles.heroGlow} ${styles.heroGlow2}`}></div>

            <div className={styles.heroContent}>
                <span className={styles.heroSubtitle}>{subtitle}</span>
                <h1 className={styles.heroTitle}>{renderTitle()}</h1>
                <p className={styles.heroDescription}>{description}</p>

                <div className={styles.heroButtons}>
                    {primaryBtn && (
                        <Link href={primaryBtn.href} className={styles.heroPrimary}>
                            {primaryBtn.label}
                        </Link>
                    )}
                    {secondaryBtn && (
                        <Link href={secondaryBtn.href} className={styles.heroSecondary}>
                            {secondaryBtn.label}
                        </Link>
                    )}
                </div>
            </div>

            {!isPageHero && (
                <div className={styles.scrollIndicator}>
                    <span>Scroll</span>
                    <div className={styles.scrollLine}></div>
                </div>
            )}
        </section>
    );
}
