import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import ProductCard from '@/components/ProductCard/ProductCard';
import Testimonials from '@/components/Testimonials/Testimonials';
import styles from './page.module.css';

const featuredCollections = [
  {
    title: "Banarasi Silk",
    category: "Heritage Weaves",
    description: "Opulent silk textiles with intricate gold and silver zari work.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
  },
  {
    title: "Pashmina Collection",
    category: "Luxury Wool",
    description: "Ultra-fine cashmere from the Himalayas, handcrafted with precision.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
  },
  {
    title: "Chanderi Elegance",
    category: "Sheer Luxury",
    description: "Lightweight fabric with golden borders and traditional motifs.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <Hero
        subtitle="Established 1985"
        title="Where Heritage Meets Elegance"
        highlightWord="Elegance"
        description="Curating the world's finest Indian textiles for discerning clients. Each piece tells a story of centuries-old craftsmanship and timeless beauty."
        primaryBtn={{ label: "Explore Collections", href: "/collections" }}
        secondaryBtn={{ label: "Book Consultation", href: "/contact" }}
      />

      {/* Featured Collections */}
      <section className={`section ${styles.collections}`}>
        <div className="container">
          <div className="section-header">
            <h2>Curated Collections</h2>
            <div className="divider"></div>
            <p>Discover our signature textiles, each handpicked for exceptional quality and artistry.</p>
          </div>

          <div className={styles.collectionsGrid}>
            {featuredCollections.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2>Four Decades of Excellence</h2>
              <div className="divider"></div>
              <p>
                Since 1985, we have been the bridge between India's master artisans and the world's most
                prestigious fashion houses, interior designers, and luxury brands.
              </p>
              <p>
                Our commitment to authenticity, quality, and sustainable practices has made us the
                preferred partner for those who demand nothing but the finest.
              </p>
              <Link href="/about" className={`btn ${styles.storyButton}`}>
                Discover Our Heritage
              </Link>
            </div>
            <div className={styles.storyImage}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Artisan at work"
              />
              <div className={styles.storyImageDecor}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>40+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Countries Served</p>
            </div>
            <div className={styles.statItem}>
              <h3>200+</h3>
              <p>Artisan Partners</p>
            </div>
            <div className={styles.statItem}>
              <h3>1000+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <h2>Ready to Experience Excellence?</h2>
          <div className="divider"></div>
          <p>Let us curate the perfect textile collection for your needs. Our experts are ready to assist you.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/showroom" className="btn btn-white">
              Visit Virtual Showroom
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
