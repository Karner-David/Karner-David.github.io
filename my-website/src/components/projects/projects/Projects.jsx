import React, {useState} from "react";
import BG from '../images/bg.png';
import Dragon1 from '../images/dragon_1.jpg';
import Dragon2 from '../images/dragon_2.jpg';
import Dragon3 from '../images/dragon_3.jpg';
import Dragon4 from '../images/dragon_4.jpg';
import Dragon5 from '../images/dragon_5.jpg';
import Dragon6 from '../images/dragon_6.jpg';
import Dragon7 from '../images/dragon_7.jpg';
import Dragon8 from '../images/dragon_8.jpg';
import Dragon9 from '../images/dragon_9.jpg';
import Dragon10 from '../images/dragon_10.jpg';
import Model from '../images/model.png';
import './Projects.css';

export default function Projects() {
  const [paused, setPaused] = useState(false);
  
  return(
    <div className="w-full flex flex-col items-center projects-container">
      <h1 className="flex text-5xl text-white font-[OSBold]">Projects</h1>
      <div className="my-2 banner">
        <div className="slider" style={{ '--quantity': 10, '--paused': (paused) ? 'paused' : 'running'  }}>
          <div className="item" style={{ '--position': 1}}>
            <a href="https://github.com/Karner-David/SWE-Project" target="_blank" rel="noopener noreferrer">  
                <h1 className="text-sm text-blue-500 underline font-[OSBold]">Papertrail</h1>
            </a>
            <img className="" src="/Project-Thumbnails/Papertrail(2).png" alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
            <div className="w-full proj-description" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}>
              
              <p className="text-white text-[8px]">An Amazon-like marketplace for newspapers and magazines.</p>
              <p className="text-white text-[8px]">Tech Stack: SQLite, Flask, React, Node.js</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}