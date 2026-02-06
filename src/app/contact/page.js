'use client';

import { useState } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        interest: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    };

    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.pageHero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.heroSubtitle}>We'd Love to Hear From You</span>
                        <h1>Get in Touch</h1>
                        <p>
                            Let us help you find the perfect textiles. Our specialists
                            are ready to assist with your requirements.
                        </p>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.contact}`}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Form */}
                        <div className={styles.formSection}>
                            <h2>Send an Inquiry</h2>
                            <p>Fill out the form below and our team will respond within 24 hours.</p>

                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="firstName">First Name *</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="John"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="lastName">Last Name *</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Doe"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="john@company.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+1 (555) 000-0000"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="company">Company / Organization</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            placeholder="Your Company"
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="interest">Area of Interest *</label>
                                        <select
                                            id="interest"
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select an option</option>
                                            <option value="bulk-order">Bulk / Trade Order</option>
                                            <option value="bespoke">Bespoke / Custom Design</option>
                                            <option value="consultation">Private Consultation</option>
                                            <option value="samples">Sample Request</option>
                                            <option value="partnership">Partnership Inquiry</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Your Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your requirements, preferred textiles, quantities, and any specific details..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className={styles.infoSection}>
                            <h2>Contact Information</h2>

                            <div className={styles.infoCard}>
                                <h3>
                                    <span className={styles.icon}>📍</span>
                                    Head Office
                                </h3>
                                <p>
                                    Artisan Textile House<br />
                                    42, Textile Market, Ring Road<br />
                                    Surat, Gujarat 395002<br />
                                    India
                                </p>
                            </div>

                            <div className={styles.infoCard}>
                                <h3>
                                    <span className={styles.icon}>✉️</span>
                                    Contact Details
                                </h3>
                                <p>
                                    <strong>Email:</strong> <a href="mailto:hello@artisantextile.com">hello@artisantextile.com</a><br />
                                    <strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a><br />
                                    <strong>WhatsApp:</strong> <a href="https://wa.me/919876543210">+91 98765 43210</a>
                                </p>
                                <a href="https://wa.me/919876543210" className={styles.whatsapp} target="_blank" rel="noopener noreferrer">
                                    💬 Chat on WhatsApp
                                </a>
                            </div>

                            <div className={styles.infoCard}>
                                <h3>
                                    <span className={styles.icon}>🕐</span>
                                    Business Hours
                                </h3>
                                <p>
                                    Monday - Friday: 9:00 AM - 6:00 PM (IST)<br />
                                    Saturday: 10:00 AM - 4:00 PM (IST)<br />
                                    Sunday: Closed
                                </p>
                            </div>

                            <div className={styles.map}>
                                <span>🗺️</span>
                                <p>Interactive map coming soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
