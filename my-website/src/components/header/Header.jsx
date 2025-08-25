import React from 'react';
import headshot from '/headshot-bg.jpg';
import './Header.css';
import '../../App.css';

export default function Header() {
  return (
    <div className="w-full flex my-10 h-2/5 justify-center header-main-container">
      <div className="flex w-1/4 h-full headshot-container">
        <img src={headshot} alt="Headshot" className="headshot-image" />
      </div>
      <div className="flex text-left introduction-container items-center ml-10" style={{fontFamily: 'OSBold'}}>
        <div className="text-3xl text-white text-container">
          <h1> 
            <span className='text-4xl'>Hi, I'm <span className='text-5xl gradient-text'>Karner</span></span> <br/> 
            a <span className='text-5xl gradient-text'>Software Developer</span> <br/>
            and <span className='text-4xl gradient-text'>Volleyball Lover.</span> <br/> 
            <span className='text-4xl gradient-text'> Welcome!</span> </h1>
        </div>
        <div className="contacts-container">
          
        </div>
      </div>
    </div>
  );
}
