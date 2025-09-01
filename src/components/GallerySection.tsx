import galleryImage1 from '../assets/images/gallery-1.jpg';
import galleryImage2 from '../assets/images/gallery-2.jpg';
import galleryImage3 from '../assets/images/gallery-3.jpg';
import galleryImage4 from '../assets/images/gallery-4.jpg';
import galleryImage5 from '../assets/images/gallery-5.jpg';
import galleryImage6 from '../assets/images/gallery-6.jpg';
import React from 'react';

const importedGalleryImages = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
];

const GallerySection = () => {
  const galleryItems = [
    { id: 1, caption: "Speaking at Industry Conference" },
    { id: 2, caption: "Leading Team Workshop" },
    { id: 3, caption: "Awards Ceremony Recognition" },
    { id: 4, caption: "Board Meeting Presentation" },
    { id: 5, caption: "Professional Development Session" },
    { id: 6, caption: "Community Engagement Event" },
  ];

  return (
    <section id="gallery" className="py-20 px-6 lg:px-12 bg-gray-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold font-heading text-purple-primary mb-4">
            AJ Sam In Action
          </h2>
          <div className="w-16 h-1 bg-orange-vivid rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-square bg-gradient-to-br from-purple-primary/20 to-orange-vivid/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
  src={importedGalleryImages[item.id - 1]}
  alt={item.caption}
  className="w-full h-full object-cover absolute inset-0"
/>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-orange-vivid opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center font-medium text-lg px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;