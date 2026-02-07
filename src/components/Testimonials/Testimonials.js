'use client';

import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "The quality of textiles from KISH is unparalleled. Their commitment to sustainability and craftsmanship has made them an invaluable partner for our collection.",
        author: "Isabella Marchetti",
        role: "Creative Director, Milano Fashion House",
    },
    {
        quote: "Working with KISH has been a revelation. Over five decades of manufacturing expertise is evident in every piece they deliver.",
        author: "James Chen",
        role: "Head of Procurement, Chen Interiors",
    },
    {
        quote: "From first inquiry to delivery, the experience was exceptional. Their certifications and sustainable practices align perfectly with our brand values.",
        author: "Sarah Williams",
        role: "Luxury Buyer, London",
    }
];

export default function Testimonials() {
    return (
        <section className={`section ${styles.testimonials}`}>
            <div className="container">
                <div className="section-header">
                    <span className={styles.label}>Testimonials</span>
                    <h2>What Our Clients Say</h2>
                    <div className="divider"></div>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <article key={index} className={styles.card} style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className={styles.quoteIcon}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M12 20H6C6 14.48 10.48 10 16 10V14C12.69 14 10 16.69 10 20V26H16V20H12ZM28 20H22C22 14.48 26.48 10 32 10V14C28.69 14 26 16.69 26 20V26H32V20H28Z" fill="currentColor" />
                                </svg>
                            </div>
                            <blockquote className={styles.quote}>
                                {item.quote}
                            </blockquote>
                            <div className={styles.author}>
                                <div className={styles.authorInfo}>
                                    <span className={styles.authorName}>{item.author}</span>
                                    <span className={styles.authorRole}>{item.role}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
