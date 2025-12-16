import React from 'react';
import Book from './book';
import Topic from './Topic';

const HscLayouut = () => {
  return (
    <div>
    <div className="bg-green-50 py-12">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-green-900 tracking-wide drop-shadow-md">
    এইচএসসি বায়োলজি প্রোগ্রাম
  </h1>
</div>
{/* book pdf */}
<div>
  <Book/>
</div>
{/* topic */}
<div>
  <Topic/>
</div>
    </div>
  );
};

export default HscLayouut;