import ajSamHero from '../assets/images/aj-sam-hero.png';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-purple-primary leading-tight">
              AJ Sam — Inspiring Integrity, Driving Growth.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-body">
              Director of Internal Audit, UESD | Thought Leader in Governance & Leadership.
            </p>
            
            <a 
              href="https://www.linkedin.com/in/aj-sam-insights/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-vivid text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let's Connect
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          {/* Right Column - Image Placeholder */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <img
  src={ajSamHero}
  alt="AJ Sam professional headshot"
  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl rounded-2xl"
/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;