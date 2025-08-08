import React from 'react';
import Image from "../assets/4.jpg";
// Sample amenity data
const amenities = [
  { icon: '🏋️‍♂️', label: 'GYMNASIUM' },
  { icon: '🏛️', label: 'CLUB HOUSE' },
  { icon: '🏊‍♂️', label: 'SWIMMING POOL' },
  { icon: '🏃‍♂️', label: 'JOGGING TRACK' },
  { icon: '🌱', label: 'LANDSCAPED GARDENS' },
  { icon: '🛍️', label: 'HIGH-STREET RETAIL SHOPS' },
  { icon: '🎬', label: 'MINI MULTIPLEXE' },
  { icon: '🍔', label: 'FOOD COURT' },
];

const AmenitiesSection = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Left image */}
      <div className="md:w-1/2 w-full">
        <img
          src={Image} 
          alt="M3M building"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right content */}
      <div className="md:w-1/2 w-full bg-white px-6 py-10">
        {/* Header with background */}
        <div className="bg-orange-300 p-6 mb-8">
          <h3 className="text-sm text-gray-800">Our Amenities</h3>
          <h2 className="text-3xl font-bold text-gray-900">M3M Iconic Living</h2>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border border-gray-200 rounded shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl">{item.icon}</div>
              <p className="mt-2 text-sm font-semibold text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
