import React from 'react';
import Image from "../assets/2.png"; 
const M3MTheLineSection = () => {
  return (
    <section className="bg-[#FAF9F6] py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Text content */}
        <div className="flex-1">
          <div className="border-l-4 border-yellow-400 pl-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Premium Retail Shops &<br /> Pentsuites
            </h1>
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mt-4">
            At Sector- 72, Central Noida
          </h2>

          <div className="border-l-2 border-blue-900 pl-4 mt-6">
            <h3 className="text-xl font-semibold text-blue-900">
              M3M The Line Distinct Features :
            </h3>

            <ul className="list-disc list-inside text-gray-800 mt-4 space-y-1">
              <li>Spacious Service Apartments</li>
              <li>Presence of Reputed Food Chains</li>
              <li>Delightful Ambience</li>
              <li>Relaxing Recreational Sphere</li>
              <li>Dual Height Retail Shops</li>
              <li>Designated Entry/Exit Points</li>
              <li>24x7 Security</li>
              <li>Entertainment & Gaming Arena</li>
              <li>Dining Lounge</li>
            </ul>
          </div>

          <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition">
            Download Brochure
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
          <img
            src={Image} 
            alt="The Most Awaited Offer is Back"
            className="w-full rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default M3MTheLineSection;
