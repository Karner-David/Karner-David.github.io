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
        <img src={headshot} alt="Headshot" className="headshot-image" />
      </div>
      <div className="flex text-left introduction-container items-center ml-10" style={{fontFamily: 'OSBold'}}>
        <div className="text-3xl text-gray-200 text-container">
          <h1> 
            <span className='text-4xl'>Hi, I'm <span className='text-5xl gradient-text'>Karner</span></span>, <br/> 
            a <span className='text-5xl gradient-text'>Software Developer</span> <br/>
            and <span className='text-4xl gradient-text'>Volleyball Lover.</span> <br/> 
            <span className='text-4xl gradient-text'> Welcome!</span> 
          </h1>
          <div className="flex flex-row my-4 contacts-container ">
            <a 
              href='https://github.com/Karner-David'
              target="_blank"
              rel="noopener noreferrer"
              className='mx-4 '
            >
              <img src={GithubIcon} alt="github icon" className='w-9 bg-gray-200 bg-opacity-95 rounded-md p-1'/>
            </a>

            <a 
              href='https://www.linkedin.com/in/karner-david-a37532261/'
              target="_blank"
              rel="noopener noreferrer"
              className='mx-4 '
            >
              <img src={LinkedinIcon} alt="github icon" className='w-9'/>
            </a>

            <a 
              href="mailto:karnerdavid7164@gmail.com"
              className='mx-4'
            >
              <img src={GmailIcon} alt="github icon" className='w-9 h-9 bg-gray-200 bg-opacity-95 rounded-md p-1'/>
            </a>

          </div>
        </div>
        
      </div>
    </div>
  );
}
