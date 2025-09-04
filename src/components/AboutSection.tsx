import ajSamAbout from '../assets/images/aj-sam-about.png';
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold font-heading text-purple-primary mb-4">
                About AJ Sam
              </h2>
              <div className="w-16 h-1 bg-orange-vivid rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                With over a decade of experience in internal audit and governance, AJ Sam has established himself as a transformational leader who bridges the gap between compliance and strategic growth.
              </p>
              
              <p>
                As Director of Internal Audit at UESD, AJ leads a team of dedicated professionals in ensuring organizational integrity while driving innovative approaches to risk management and operational excellence.
              </p>
              
              <p>
                Her thought leadership in governance frameworks and her commitment to developing next-generation audit professionals has made him a sought-after speaker and mentor in the industry.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-purple-light text-purple-primary px-4 py-2 rounded-full text-sm font-medium">
                Internal Audit
              </span>
              <span className="bg-purple-light text-purple-primary px-4 py-2 rounded-full text-sm font-medium">
                Risk Management
              </span>
              <span className="bg-purple-light text-purple-primary px-4 py-2 rounded-full text-sm font-medium">
                Leadership
              </span>
              <span className="bg-purple-light text-purple-primary px-4 py-2 rounded-full text-sm font-medium">
                Governance
              </span>
            </div>
          </div>
          
          {/* Right Column - Image Placeholder */}
          <div className="flex justify-center">
            <img
  src={ajSamAbout}
  alt="AJ Sam in a professional setting"
              className="w-80 h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
