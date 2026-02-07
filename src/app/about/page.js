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
                    <h1>About KISH</h1>
                    <div className="divider"></div>
                    <p>Five decades of manufacturing excellence from the heart of Kolkata.</p>
                </div>
            </section>

            {/* Story Section */}
            <section className={`section ${styles.story}`}>
                <div className="container">
                    <div className={styles.storyContent}>
                        <div className={styles.storyText}>
                            <h2>Since 1969</h2>
                            <div className="divider" style={{ marginLeft: 0 }}></div>
                            <p>
                                At Kolkata, manufacturing excellence has been our tradition since 1969.
                                What began as a small textile workshop has grown into one of India's most
                                respected manufacturing facilities, serving clients across 50+ countries.
                            </p>
                            <p>
                                We are a vertically integrated textile manufacturing company where quality
                                and sustainability are at the heart of everything we do. From spinning to
                                printing, to delivering the finished product — we control every step.
                            </p>
                            <p>
                                Today, KISH partners with leading brands worldwide, delivering exceptional
                                quality backed by over five decades of expertise and multiple international
                                certifications.
                            </p>
                        </div>
                        <div className={styles.storyImage}>
                            <img
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                                alt="KISH manufacturing heritage"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* History Timeline */}
            <section className={`section ${styles.history}`}>
                <div className="container">
                    <div className="section-header">
                        <h2>Our History</h2>
                        <div className="divider"></div>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>1969</div>
                            <div className={styles.timelineContent}>
                                <h4>Started Exporting</h4>
                                <p>We began our export journey with Japan as our first international market.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>1993</div>
                            <div className={styles.timelineContent}>
                                <h4>Weaving Looms Setup</h4>
                                <p>Established our own weaving loom facility in Surat, Gujarat.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>1997</div>
                            <div className={styles.timelineContent}>
                                <h4>Screen Printing Unit</h4>
                                <p>Developed one of the largest screen-printing units with 200,000 meters capacity per month.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2007</div>
                            <div className={styles.timelineContent}>
                                <h4>Stitching Unit Setup</h4>
                                <p>Launched a dedicated stitching unit with over 600 machines.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2017</div>
                            <div className={styles.timelineContent}>
                                <h4>SRTEPC Award</h4>
                                <p>Recognized as the third-best exporter by the Ministry of Textiles, India.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineYear}>2022</div>
                            <div className={styles.timelineContent}>
                                <h4>Digital Printing Unit</h4>
                                <p>Implementation of a modern digital printing unit for enhanced capabilities.</p>
                            </div>
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
