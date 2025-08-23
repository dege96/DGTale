'use client';

import styles from './page.module.css';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import PortfolioSection from '@/components/PortfolioSection';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
} 