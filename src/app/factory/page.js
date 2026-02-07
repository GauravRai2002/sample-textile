import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './page.module.css';

const capabilities = [
    {
        title: "Spinning",
        description: "State-of-the-art spinning facilities producing high-quality yarns from various fibers.",
        icon: "🧵"
    },
    {
        title: "Weaving",
        description: "Advanced looms capable of producing a wide range of fabric constructions.",
        icon: "🪡"
    },
    {
        title: "Printing",
        description: "Digital and rotary printing with sustainable, water-based inks.",
        icon: "🎨"
    },
    {
        title: "Dyeing",
        description: "Eco-friendly dyeing processes with water recycling systems.",
        icon: "💧"
    },
    {
        title: "Finishing",
        description: "Premium finishing treatments for enhanced fabric performance.",
        icon: "✨"
    },
    {
        title: "Quality Control",
        description: "Rigorous multi-stage quality inspection at every production phase.",
        icon: "✓"
    }
];

const stats = [
    { value: "50,000+", label: "Sq. Ft. Facility" },
    { value: "500+", label: "Skilled Workers" },
    { value: "100+", label: "Looms" },
    { value: "24/7", label: "Operations" }
];

export default function Factory() {
    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.pageHero}>
                <div className="container">
                    <span className={styles.heroLabel}>Manufacturing Excellence</span>
                    <h1>Factory Overview</h1>
                    <div className="divider"></div>
                    <p>A vertically integrated facility equipped with modern machinery and traditional expertise.</p>
                </div>
            </section>

            {/* About Factory */}
            <section className={`section ${styles.about}`}>
                <div className="container">
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutText}>
                            <h2>World-Class Manufacturing in Kolkata</h2>
                            <div className="divider" style={{ marginLeft: 0 }}></div>
                            <p>
                                Located in the heart of India's textile hub, our Kolkata facility combines
                                cutting-edge technology with decades of manufacturing expertise. Since 1969,
                                we have continuously invested in upgrading our capabilities while maintaining
                                our commitment to quality and sustainability.
                            </p>
                            <p>
                                Our vertically integrated setup allows us to maintain complete control over
                                the production process — from raw material sourcing to finished product delivery.
                                This ensures consistent quality and faster turnaround times for our clients.
                            </p>
                            <p>
                                Every stage of production adheres to international quality standards and
                                environmental regulations, backed by our multiple certifications.
                            </p>
                        </div>
                        <div className={styles.aboutImage}>
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                                alt="KISH manufacturing facility"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.stats}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statItem}>
                                <h3>{stat.value}</h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className={`section ${styles.capabilities}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Our Capabilities</h2>
                        <div className="divider"></div>
                        <p>End-to-end manufacturing under one roof.</p>
                    </div>
                    <div className={styles.capabilitiesGrid}>
                        {capabilities.map((cap, index) => (
                            <div key={index} className={styles.capabilityCard}>
                                <span className={styles.capIcon}>{cap.icon}</span>
                                <h3>{cap.title}</h3>
                                <p>{cap.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className={`section ${styles.process}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Our Process</h2>
                        <div className="divider"></div>
                    </div>
                    <div className={styles.processSteps}>
                        <div className={styles.processStep}>
                            <span className={styles.stepNumber}>01</span>
                            <h4>Design & Sampling</h4>
                            <p>Collaborative design development with custom sampling.</p>
                        </div>
                        <div className={styles.processStep}>
                            <span className={styles.stepNumber}>02</span>
                            <h4>Material Sourcing</h4>
                            <p>Certified sustainable raw materials from trusted suppliers.</p>
                        </div>
                        <div className={styles.processStep}>
                            <span className={styles.stepNumber}>03</span>
                            <h4>Production</h4>
                            <p>Precision manufacturing with real-time quality monitoring.</p>
                        </div>
                        <div className={styles.processStep}>
                            <span className={styles.stepNumber}>04</span>
                            <h4>Quality Assurance</h4>
                            <p>Multi-stage inspection before final packaging.</p>
                        </div>
                        <div className={styles.processStep}>
                            <span className={styles.stepNumber}>05</span>
                            <h4>Delivery</h4>
                            <p>Reliable global shipping with full documentation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`section ${styles.cta}`}>
                <div className="container">
                    <h2>Schedule a Factory Visit</h2>
                    <div className="divider"></div>
                    <p>See our manufacturing excellence firsthand. We welcome clients to tour our facility.</p>
                    <Link href="/contact" className="btn btn-primary">
                        Contact Us
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
