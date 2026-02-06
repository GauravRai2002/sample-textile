import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({
    title,
    category,
    description,
    image,
    href = '/contact',
    featured = false
}) {
    return (
        <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
            <div className={styles.imageContainer}>
                <img
                    src={image}
                    alt={title}
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <Link href={href} className={styles.overlayButton}>
                        Inquire Now
                    </Link>
                </div>
            </div>
            <div className={styles.content}>
                <span className={styles.category}>{category}</span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </article>
    );
}
