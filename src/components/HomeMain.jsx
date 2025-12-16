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
import Ficter from './Home/Ficter';
import Damoclass from './Home/Damoclass';



const HomeMain = () => {
  return (
    <div>
      {/* 1 slider */}
      <div>
        <PicSlider/>
      </div>
      {/* শিক্ষার্থীদের জন্য আমাদের একাডেমিক সেবা */}
      <div className='flex justify-center -mt-10'>
        <SabaHscScs/>
      </div>
      {/* fct */}
      <div className='-mt-30'>
        <Ficter/>
      </div>

      {/* damoclass */}
      <div className='-mt-15'>
        <Damoclass/>
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
      <div className='-mt-10' >
        <ClassRum/>
      </div>
      {/* fidbac */}
      <div className='-mt-20'>
        <Fidbac/>
      </div>
      {/* extra */}
      <div className='-mt-20'>
        <Extrasection/>
      </div>
      {/* new student */}
      <div className='-mt-10'>
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