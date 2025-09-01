import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import QuotesValuesSection from './components/QuotesValuesSection';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-gray-bg font-body">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <QuotesValuesSection />
      <CTASection />
    </div>
  );
}

export default App;