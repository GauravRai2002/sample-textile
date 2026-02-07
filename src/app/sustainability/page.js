import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './page.module.css';

const certifications = [
    {
        name: "GOTS",
        fullName: "Global Organic Textile Standard",
        description: "Certified organic textiles from harvesting of raw materials through manufacturing.",
        icon: "🌿"
    },
    {
        name: "Bemberg™",
        fullName: "Cupro Fiber",
        description: "Premium sustainable cupro fiber - 'It feels so precious.'",
        icon: "✨"
    },
    {
        name: "Lenzing™",
        fullName: "Innovative by Nature",
        description: "Sustainably produced fibers from certified responsible forestry.",
        icon: "🌲"
    },
    {
        name: "Woolmark",
        fullName: "Certified Wool",
        description: "Quality assured 100% virgin wool from sustainable sources.",
        icon: "🐑"
    },
    {
        name: "R·W·S",
        fullName: "Responsible Wool Standard",
        description: "Certified ethical treatment of sheep and land management.",
        icon: "♻️"
    },
    {
        name: "Organic 100",
        fullName: "Content Standard",
        description: "Verified organic content in our textile products.",
        icon: "🌱"
    }
];

const initiatives = [
    {
        title: "Zero Waste Production",
        description: "Our manufacturing processes are designed to minimize waste. Fabric scraps are repurposed or recycled.",
        stat: "95%",
        statLabel: "Waste Reduction"
    },
    {
        title: "Water Conservation",
        description: "Advanced water treatment and recycling systems reduce our freshwater consumption significantly.",
        stat: "60%",
        statLabel: "Less Water Used"
    },
    {
        title: "Renewable Energy",
        description: "Our facilities are transitioning to solar and renewable energy sources.",
        stat: "40%",
        statLabel: "Solar Powered"
    },
    {
        title: "Fair Wages",
        description: "We ensure all workers receive fair wages above industry standards with full benefits.",
        stat: "100%",
        statLabel: "Living Wage"
    }
];

export default function Sustainability() {
    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.pageHero}>
                <div className="container">
                    <span className={styles.heroLabel}>🌿 Sustainability</span>
                    <h1>Our Commitment to the Planet</h1>
                    <div className="divider"></div>
                    <p>Sustainability isn't just a practice — it's at the heart of everything we do at KISH.</p>
                </div>
            </section>

            {/* Vision Section */}
            <section className={`section ${styles.vision}`}>
                <div className="container">
                    <div className={styles.visionContent}>
                        <div className={styles.visionText}>
                            <h2>Sustainable Manufacturing Since 1969</h2>
                            <div className="divider" style={{ marginLeft: 0 }}></div>
                            <p>
                                For over five decades, KISH has been committed to responsible manufacturing.
                                We believe that quality textiles and environmental stewardship go hand in hand.
                            </p>
                            <p>
                                Our sustainability journey encompasses every aspect of our operations — from
                                sourcing organic and recycled materials to implementing water-saving technologies
                                and ensuring fair labor practices throughout our supply chain.
                            </p>
                            <p>
                                We're proud to hold multiple certifications that validate our commitment to
                                sustainable and ethical textile production.
                            </p>
                        </div>
                        <div className={styles.visionImage}>
                            <img
                                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
                                alt="Sustainable manufacturing"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className={`section ${styles.certifications}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Our Certifications</h2>
                        <div className="divider"></div>
                        <p>Internationally recognized standards that validate our commitment.</p>
                    </div>
                    <div className={styles.certGrid}>
                        {certifications.map((cert, index) => (
                            <div key={index} className={styles.certCard}>
                                <span className={styles.certIcon}>{cert.icon}</span>
                                <h3>{cert.name}</h3>
                                <span className={styles.certFullName}>{cert.fullName}</span>
                                <p>{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Initiatives */}
            <section className={`section ${styles.initiatives}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Our Initiatives</h2>
                        <div className="divider"></div>
                    </div>
                    <div className={styles.initiativesGrid}>
                        {initiatives.map((item, index) => (
                            <div key={index} className={styles.initiativeCard}>
                                <div className={styles.initiativeStat}>
                                    <span className={styles.statNumber}>{item.stat}</span>
                                    <span className={styles.statLabel}>{item.statLabel}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.cta}`}>
                <div className="container">
                    <h2>Partner with a Sustainable Leader</h2>
                    <div className="divider"></div>
                    <p>Join us in creating a more sustainable future for the textile industry.</p>
                    <Link href="/contact" className="btn btn-primary">
                        Get in Touch
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
