import React from 'react';
import note from '../assets/কোষ ও এর গঠন.pdf'


const pdfs = [
  { id: 1, title: "CQ (1)", link: note },
  
];

const Notepp = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center pt-6">
        আমাদের পিডিএফ সমূহ
      </h1>

      {pdfs.map((pdf) => (
        <div key={pdf.id} className="w-full h-screen mb-6">
          <iframe
            src={pdf.link}
            title={pdf.title}
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default Notepp;