import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import ProductCard from '@/components/ProductCard/ProductCard';
import Testimonials from '@/components/Testimonials/Testimonials';
import styles from './page.module.css';

const featuredCollections = [
  {
    title: "Summer Collection",
    category: "Printed Apparel",
    description: "Vibrant prints and breathable fabrics perfect for the season.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
  },
  {
    title: "Garments",
    category: "Ready to Wear",
    description: "Expertly crafted garments blending tradition with contemporary style.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
  },
  {
    title: "Accessories",
    category: "Bags & Scarves",
    description: "Handcrafted accessories that complement any wardrobe.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
  }
];

// Certification logos
const certifications = [
  { name: "GOTS", description: "Global Organic Textile Standard" },
  { name: "Bemberg", description: "Cupro Fiber" },
  { name: "Lenzing", description: "Innovative by Nature" },
  { name: "Woolmark", description: "Certified Wool" },
  { name: "R·W·S", description: "Responsible Wool Standard" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

      <Hero
        subtitle="Since 1969"
        title="Manufacturing Excellence is Our Tradition"
        highlightWord="Tradition"
        description="At Kolkata, we have been crafting exceptional textiles for over fifty years. Quality and sustainability are at the heart of everything we do."
        primaryBtn={{ label: "Discover", href: "/collections" }}
        secondaryBtn={{ label: "Our Story", href: "/about" }}
      />

      {/* Featured Collections */}
      <section className={`section ${styles.collections}`}>
        <div className="container">
          <div className="section-header">
            <h2>Our Collections</h2>
            <div className="divider"></div>
            <p>From spinning to printing to the finished product — we bring expertise to every step.</p>
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
              <h2>Five Decades of Excellence</h2>
              <div className="divider"></div>
              <p>
                At Kolkata, manufacturing excellence has been our tradition since 1969. We are a
                textile manufacturing company where quality and sustainability are at the heart
                of everything we do.
              </p>
              <p>
                With over fifty years of experience, we have honed our expertise in the entire
                textile manufacturing process — from spinning to printing, to delivering the
                finished product.
              </p>
              <Link href="/about" className={`btn ${styles.storyButton}`}>
                Read More
              </Link>
            </div>
            <div className={styles.storyImage}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="KISH manufacturing facility"
              />
              <div className={styles.storyImageDecor}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className={styles.certifications}>
        <div className="container">
          <div className={styles.certGrid}>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.certItem}>
                <span className={styles.certName}>{cert.name}</span>
                <span className={styles.certDesc}>{cert.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>55+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Countries Served</p>
            </div>
            <div className={styles.statItem}>
              <h3>100%</h3>
              <p>Sustainable Fibers</p>
            </div>
            <div className={styles.statItem}>
              <h3>6</h3>
              <p>Certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <h2>Ready to Partner with Us?</h2>
          <div className="divider"></div>
          <p>Let us bring our manufacturing excellence to your next project. Our team is ready to assist you.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
            <Link href="/factory" className="btn btn-white">
              View Factory Overview
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
