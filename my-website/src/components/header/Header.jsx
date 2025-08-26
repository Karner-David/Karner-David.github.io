import React from 'react';
import headshot from '/headshot-bg.jpg';
import GithubIcon from '../../assets/companyicons/github-icon.svg';
import LinkedinIcon from '../../assets/companyicons/linkedin-icon.svg';
import GmailIcon from '../../assets/companyicons/google-gmail.svg';
import './Header.css';
import '../../App.css';

export default function Header() {
  return (
    <div className="w-full flex my-10 h-2/5 justify-center header-main-container">
      <div className="flex w-1/4 h-full headshot-container">
        <img src={headshot} alt="Headshot" className="animate-[slide-in-left_0.7s_ease-out] headshot-image" />
      </div>
      <div className="flex text-left introduction-container items-center ml-10 animate-[slide-in-right_0.7s_ease-out]" style={{fontFamily: 'OSBold'}}>
        <div className="text-3xl text-gray-200 text-container">
          <h1> 
            <span className='text-4xl'>Hi, I'm <span className='text-5xl header-gradient-text'>Karner</span></span>, <br/> 
            a <span className='text-5xl header-gradient-text'>Software Developer</span> <br/>
            and Volleyball Lover. <br/> 
            <span className='text-4xl'> Welcome!</span> 
          </h1>
          <div className="flex flex-row my-4 contacts-container ">
            <a 
              href='https://github.com/Karner-David'
              target="_blank"
              rel="noopener noreferrer"
              className='mx-4 github-icon'
            >
              <img src={GithubIcon} alt="github icon" className='w-9 bg-gray-200 bg-opacity-95 rounded-md p-1'/>
            </a>

            <a 
              href='https://www.linkedin.com/in/karner-david-a37532261/'
              target="_blank"
              rel="noopener noreferrer"
              className='mx-4 linkedin-icon'
            >
              <img src={LinkedinIcon} alt="linkedin icon" className='w-9'/>
            </a>

            <a 
              href="mailto:karnerdavid7164@gmail.com"
              className='mx-4 gmail-icon'
            >
              <img src={GmailIcon} alt="gmail icon" className='w-9 h-9 bg-gray-200 bg-opacity-95 rounded-md p-1'/>
            </a>

          </div>
        </div>
        
      </div>
    </div>
  );
}
