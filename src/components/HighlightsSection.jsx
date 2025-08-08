import React from 'react';
import Image from "../assets/3.jpg";
const leftFeatures = [
  'Fully Furnished Studio Apartments & Premium Retails Shops',
  'Located at Sector- 72, Central Noida',
  'Every modern comfort, just 1 minute away',
  'Observatory Deck with a Panoramic view of the city skyline',
];

const rightFeatures = [
  'Floating sauna and Scenic pool',
  'Healthy and fresh morning walk on the rooftop with jogging track',
  'Double glazing for energy saving and peaceful living',
  'Italian Marble Flooring',
];

const HighlightsSection = () => {
  return (
    <section className="bg-[#f0f0f0] py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {leftFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="bg-orange-300 text-white rounded-full px-3 py-1 text-sm font-semibold">
                {`0${index + 1}`}
              </div>
              <div className="bg-white shadow px-4 py-3 rounded w-full">
                {feature}
              </div>
            </div>
          ))}
        </div>

        {/* Center Image + Vertical Text */}
        <div className="relative flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg mx-auto">
            <img
              src={Image} 
              alt="Mall Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90">
            <div className="bg-orange-300 text-white font-bold text-xl px-4 py-1 rounded">
              Highlights
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-6">
          {rightFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="bg-orange-300 text-white rounded-full px-3 py-1 text-sm font-semibold">
                {`0${index + 5}`}
              </div>
              <div className="bg-white shadow px-4 py-3 rounded w-full">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
