import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

const galleryItems = [
    {
        title: "Banarasi Silk Collection",
        category: "Heritage Weaves",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80"
    },
    {
        title: "Pashmina Elegance",
        category: "Luxury Wool",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
    },
    {
        title: "Chanderi Dreams",
        category: "Cotton Blend",
        image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
    },
    {
        title: "Kanjivaram Glory",
        category: "Pure Silk",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    {
        title: "Tussar Natural",
        category: "Wild Silk",
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80"
    },
    {
        title: "Imperial Brocade",
        category: "Metallic Weave",
        image: "https://images.unsplash.com/photo-1528459105426-b9548367069b?w=800&q=80"
    }
];

const experiences = [
    {
        icon: "◎",
        title: "Virtual Consultation",
        description: "Connect with our textile experts via video call for personalized guidance and fabric recommendations.",
        cta: "Book Session"
    },
    {
        icon: "◈",
        title: "Sample Request",
        description: "Request physical swatches of our textiles to experience the quality and texture firsthand.",
        cta: "Request Samples"
    }
];

export default function Showroom() {
    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.pageHero}>
                <div className="container">
                    <h1>Virtual Showroom</h1>
                    <div className="divider"></div>
                    <p>Experience our curated collections in an immersive digital space. Each textile tells a story of heritage and artistry.</p>
                </div>
            </section>

            {/* Gallery */}
            <section className={`section ${styles.gallery}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Explore Our Collections</h2>
                        <div className="divider"></div>
                        <p>Click on any piece to view details and inquire about availability.</p>
                    </div>

                    <div className={styles.galleryGrid}>
                        {galleryItems.map((item, index) => (
                            <div key={index} className={styles.galleryItem}>
                                <img src={item.image} alt={item.title} />
                                <div className={styles.galleryOverlay}>
                                    <h3>{item.title}</h3>
                                    <p>{item.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className={`section ${styles.experience}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Experience Our Textiles</h2>
                        <div className="divider"></div>
                        <p>Multiple ways to explore and connect with our collections.</p>
                    </div>

                    <div className={styles.experienceGrid}>
                        {experiences.map((exp, index) => (
                            <div key={index} className={styles.experienceCard}>
                                <div className={styles.experienceIcon}>{exp.icon}</div>
                                <h3>{exp.title}</h3>
                                <p>{exp.description}</p>
                                <Link href="/contact" className="btn btn-secondary">
                                    {exp.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.cta}`}>
                <div className="container">
                    <h2>Ready to See More?</h2>
                    <div className="divider"></div>
                    <p>Our specialists are ready to help you find the perfect textiles for your needs.</p>
                    <Link href="/contact" className="btn btn-primary">
                        Schedule a Private Viewing
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
