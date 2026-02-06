'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.css';

const categories = ['All', 'Silk', 'Wool', 'Cotton', 'Linen', 'Brocade'];

const products = [
    {
        title: "Royal Banarasi Silk",
        category: "Silk",
        description: "Handwoven silk with intricate gold zari borders and traditional motifs.",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
    },
    {
        title: "Kashmir Pashmina",
        category: "Wool",
        description: "Ultra-soft pashmina wool, hand-embroidered with traditional Kashmiri designs.",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"
    },
    {
        title: "Chanderi Heritage",
        category: "Cotton",
        description: "Light, sheer fabric with buttis and golden zari borders.",
        image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
    },
    {
        title: "Kanjivaram Gold",
        category: "Silk",
        description: "Temple-inspired designs with pure gold thread work on mulberry silk.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    {
        title: "Maheshwari Cotton",
        category: "Cotton",
        description: "Reversible fabric combining cotton and silk in traditional weaves.",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=800&q=80"
    },
    {
        title: "Tussar Elegance",
        category: "Silk",
        description: "Wild silk with natural golden sheen and tribal motifs.",
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80"
    },
    {
        title: "Belgian Linen Blend",
        category: "Linen",
        description: "Premium linen-silk blend with subtle texture and luxurious drape.",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80"
    },
    {
        title: "Brocade Imperial",
        category: "Brocade",
        description: "Heavy brocade with raised patterns in gold and silver metallic threads.",
        image: "https://images.unsplash.com/photo-1528459105426-b9548367069b?w=800&q=80"
    },
    {
        title: "Merino Wool Collection",
        category: "Wool",
        description: "Fine merino wool with contemporary patterns and soft hand feel.",
        image: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?w=800&q=80"
    }
];

export default function Collections() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProducts = activeFilter === 'All'
        ? products
        : products.filter(p => p.category === activeFilter);

    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.pageHero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.heroSubtitle}>Curated Excellence</span>
                        <h1>Our Collections</h1>
                        <p>
                            Explore our curated selection of premium Indian textiles,
                            each chosen for exceptional quality and artistry.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.filters}>
                <div className="container">
                    <div className={styles.filterContainer}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
                                onClick={() => setActiveFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`section ${styles.collections}`}>
                <div className="container">
                    <div className={styles.resultsInfo}>
                        <p className={styles.resultsCount}>
                            Showing <span>{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
                            {activeFilter !== 'All' && <> in <span>{activeFilter}</span></>}
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => (
                                <ProductCard key={index} {...product} featured={index === 0} />
                            ))
                        ) : (
                            <div className={styles.emptyState}>
                                <h3>No products found</h3>
                                <p>Try selecting a different category</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Looking for Something Specific?</h2>
                        <p>
                            Our experts can help you find the perfect textile for your needs.
                            Schedule a private consultation.
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            Book a Consultation
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
