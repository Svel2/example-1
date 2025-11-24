import React from 'react';
import { ThemeProvider } from './components/theme-provider';
import { Navbar } from './components/landing/Navbar';
import { Hero } from './components/landing/Hero';
import { LogoCloud } from './components/landing/LogoCloud';
import { FeatureForecast } from './components/landing/FeatureForecast';
import { EfficiencySection } from './components/landing/EfficiencySection';
import { FAQSection } from './components/landing/FAQSection';
import { Footer } from './components/landing/Footer';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-white dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <Hero />
        <LogoCloud />
        <FeatureForecast />
        <EfficiencySection />
        <FAQSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
