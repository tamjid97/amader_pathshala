import React from 'react';
import PicSlider from './Home/PicSlider';
import SabaHscScs from './Home/SabaHscScs';
import Sir from './Home/Sir';
import Study from './Home/Study';
import ClassRum from './Home/ClassRum';
import Fidbac from './Home/Fidbac';
import Extrasection from './Home/Extrasection';
import NewMember from './Home/NewMamber';
import Location from './Home/Location';



const HomeMain = () => {
  return (
    <div>
      {/* 1 slider */}
      <div>
        <PicSlider/>
      </div>
      {/* শিক্ষার্থীদের জন্য আমাদের একাডেমিক সেবা */}
      <div className='flex justify-center mt-15'>
        <SabaHscScs/>
      </div>
      {/* sir */}
      <div >
        <Sir/>
      </div>
      {/* stydi sistem */}
      <div >
        <Study/>
      </div>
      {/* class rum */}
      <div >
        <ClassRum/>
      </div>
      {/* fidbac */}
      <div>
        <Fidbac/>
      </div>
      {/* extra */}
      <div>
        <Extrasection/>
      </div>
      {/* new student */}
      <div>
        <NewMember/>
      </div>
      {/* location */}
      <div>
        <Location/>
      </div>
    </div>
  );
};

export default HomeMain;