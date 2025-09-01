import React from 'react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="cta" className="relative py-20 px-6 lg:px-12 overflow-hidden">
      {/* Background with Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary via-purple-primary/95 to-orange-vivid/20">
        <div className="absolute inset-0 bg-purple-primary/80"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold font-heading text-white mb-8 leading-tight">
          Let's Connect & Build Together.
        </h2>
        
        <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
          Ready to discuss governance, leadership, or collaboration opportunities? 
          Let's start a conversation that drives meaningful change.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:ajsaminsights@gmail.com"
            className="inline-flex items-center gap-3 bg-orange-vivid text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-purple-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get In Touch
            <Mail className="w-5 h-5" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/aj-sam-insights/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-purple-primary transition-all duration-300 transform hover:scale-105"
          >
            LinkedIn Profile
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/70 text-sm">
            © 2025 AJ Sam. Building bridges between integrity and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;