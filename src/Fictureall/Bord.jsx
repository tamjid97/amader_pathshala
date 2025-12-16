import React from 'react';
import bord from '../assets/analisis.jpeg';

const Bord = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <img 
          src={bord} 
          alt="Board Analysis" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Bord;
