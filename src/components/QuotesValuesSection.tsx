import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

const QuotesValuesSection = () => {
  const quotes = [
    "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution.",
    "Leadership is not about being in charge. It's about taking care of those in your charge.",
    "Integrity is doing the right thing when no one is watching, especially when it's difficult."
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Unwavering commitment to ethical practices and transparent communication."
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Inspiring teams to achieve excellence through collaborative vision and mentorship."
    },
    {
      icon: Award,
      title: "Service",
      description: "Dedicated to organizational growth and community development."
    }
  ];

  return (
    <section id="quotes-values" className="py-20 px-6 lg:px-12 bg-purple-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Quotes */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold font-heading text-purple-primary mb-4">
                Guiding Principles
              </h2>
              <div className="w-16 h-1 bg-orange-vivid rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              {quotes.map((quote, index) => (
                <blockquote key={index} className="relative">
                  <div className="text-2xl text-orange-vivid mb-2">"</div>
                  <p className="text-xl italic font-medium font-heading text-gray-800 leading-relaxed pl-6">
                    {quote}
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
          
          {/* Right Column - Values */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold font-heading text-purple-primary mb-4">
                Core Values
              </h3>
              <div className="w-16 h-1 bg-orange-vivid rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-vivid rounded-full flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold font-heading text-purple-primary mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesValuesSection;