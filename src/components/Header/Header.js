'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navItems = [
    { href: '/about', label: 'About Us' },
    { href: '/collections', label: 'Collection' },
    { href: '/sustainability', label: 'Sustainability', hasIcon: true },
    { href: '/factory', label: 'Factory Overview' },
    { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Only use transparent header on homepage
    const isHomepage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Use scrolled style if scrolled OR if not on homepage
    const headerClass = `${styles.header} ${(isScrolled || !isHomepage) ? styles.scrolled : ''}`;

    return (
        <header className={headerClass}>
            <div className={`container ${styles.headerContainer}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoMain}>KISH</span>
                    <span className={styles.logoSub}>SINCE 1969</span>
                </Link>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`${styles.navLink} ${pathname === item.href ? styles.active : ''} ${item.hasIcon ? styles.sustainabilityLink : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                    {item.hasIcon && <span className={styles.leafIcon}>🌿</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/contact"
                        className={styles.ctaButton}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Get in Touch
                    </Link>
                </nav>

                {/* Mobile menu overlay */}
                <div
                    className={`${styles.overlay} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
