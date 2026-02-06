import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const values = [
    {
        icon: "✧",
        title: "Authentic Craftsmanship",
        description: "Every textile is handcrafted by master artisans using techniques passed down through generations."
    },
    {
        icon: "❖",
        title: "Sustainable Practices",
        description: "We're committed to ethical sourcing and environmentally responsible production methods."
    },
    {
        icon: "◈",
        title: "Uncompromising Quality",
        description: "Each piece undergoes rigorous quality checks to ensure it meets our exacting standards."
    }
];

const artisans = [
    {
        name: "Master Weaver Ramesh",
        specialty: "Banarasi Silk",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
        name: "Fatima Begum",
        specialty: "Chikankari",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
        name: "Govind Sharma",
        specialty: "Pashmina Weaving",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
        name: "Lakshmi Devi",
        specialty: "Kanjivaram Silk",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    }
];

export default function About() {
    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.pageHero}>
                <div className="container">
                    <h1>Our Heritage</h1>
                    <div className="divider"></div>
                    <p>Four decades of preserving India's textile legacy while serving the world's most discerning clientele.</p>
                </div>
            </section>

            {/* Story Section */}
            <section className={`section ${styles.story}`}>
                <div className="container">
                    <div className={styles.storyContent}>
                        <div className={styles.storyText}>
                            <h2>A Legacy of Excellence</h2>
                            <div className="divider" style={{ marginLeft: 0 }}></div>
                            <p>
                                Founded in 1985, Artisan Textile House began with a simple mission: to share the
                                extraordinary beauty of Indian textiles with the world. What started as a small
                                family business has grown into one of India's most respected textile export houses.
                            </p>
                            <p>
                                Today, we work directly with over 200 master artisans across India, ensuring fair
                                wages and preserving traditional techniques that might otherwise be lost to time.
                            </p>
                            <p>
                                Our clientele includes the world's leading fashion houses, luxury hotels, and
                                interior designers who trust us to deliver exceptional quality, every time.
                            </p>
                        </div>
                        <div className={styles.storyImage}>
                            <img
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                                alt="Traditional weaving"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className={`section ${styles.values}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Our Values</h2>
                        <div className="divider"></div>
                    </div>
                    <div className={styles.valuesGrid}>
                        {values.map((value, index) => (
                            <div key={index} className={styles.valueCard}>
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Artisans */}
            <section className={`section ${styles.artisans}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Meet Our Artisans</h2>
                        <div className="divider"></div>
                        <p>The skilled hands behind every masterpiece we create.</p>
                    </div>
                    <div className={styles.artisansGrid}>
                        {artisans.map((artisan, index) => (
                            <div key={index} className={styles.artisanCard}>
                                <div className={styles.artisanImage}>
                                    <img src={artisan.image} alt={artisan.name} />
                                </div>
                                <div className={styles.artisanInfo}>
                                    <h4>{artisan.name}</h4>
                                    <p>{artisan.specialty}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className={`section ${styles.certifications}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Certifications & Accreditations</h2>
                        <div className="divider"></div>
                    </div>
                    <div className={styles.certGrid}>
                        <div className={styles.certItem}>
                            <div className={styles.certIcon}>ISO 9001:2015</div>
                            <span>Quality Management</span>
                        </div>
                        <div className={styles.certItem}>
                            <div className={styles.certIcon}>OEKO-TEX®</div>
                            <span>Safety Certified</span>
                        </div>
                        <div className={styles.certItem}>
                            <div className={styles.certIcon}>Fair Trade</div>
                            <span>Ethical Sourcing</span>
                        </div>
                        <div className={styles.certItem}>
                            <div className={styles.certIcon}>GI Certified</div>
                            <span>Geographical Indicator</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
