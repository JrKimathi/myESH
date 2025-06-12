import React from 'react';

const HeroSection = () => (
  <div className="relative h-80 bg-cover bg-center text-white"
    style={{ backgroundImage: "url('https://images.pexels.com/photos/1400249/pexels-photo-1400249.jpeg')" }}>
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to MyESH</h1>
        <p className="mt-2 text-lg">Your Farm. Your Market. Your Export Supply Hub.</p>
        <button className="mt-6 py-2 px-6 bg-[#1C5D57] hover:bg-teal-600 rounded-full text-white font-semibold transition-colors">
          See What's New
        </button>
      </div>
    </div>
  </div>
);

export default HeroSection;