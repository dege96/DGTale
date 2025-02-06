'use client';

import styles from './page.module.css';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import PortfolioSection from '@/components/PortfolioSection';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
} 