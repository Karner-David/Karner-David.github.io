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
        <div className="slider" style={{ '--quantity': 4, '--paused': (paused) ? 'paused' : 'running'  }}>
          
          <div className="item" style={{ '--position': 1}}>
            <a href="https://github.com/Karner-David/SWE-Project" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}>  
                <h1 className="text-sm text-blue-500 underline font-[OSBold]">Papertrail</h1>
            </a>
            <a href="https://github.com/Karner-David/SWE-Project" target="_blank" rel="noopener noreferrer">
              <img className="" src="/Project-Thumbnails/Papertrail.png" alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
            </a>
            <div className="w-full proj-description" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}>
              
              <p className="text-white text-[8px]">An Amazon-like marketplace for newspapers and magazines.</p>
              <p className="education-gradient-text text-[8px] font-bold">Tech Stack: SQLite, Flask, React, Node.js</p>
            </div>
          </div>

          <div className="item" style={{ '--position': 2}}>
            <a href="https://github.com/Karner-David/Furniture-Image-Classifier" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}>  
                <h1 className="text-sm text-blue-500 underline font-[OSBold]">Furniture Image Classifier</h1>
            </a>
            <a href="https://github.com/Karner-David/Furniture-Image-Classifier" target="_blank" rel="noopener noreferrer">
              <img className="" src="/Project-Thumbnails/image_class_tn.png" alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
            </a>
            <div className="w-full proj-description" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}>
              
              <p className="text-white text-[8px]">An image classifier to separate pieces of furniture like cabinets, chairs, fridges, tables, and TVs.</p>
              <p className="education-gradient-text text-[8px] font-bold">Tech Stack: Tensorflow, NumPy, Matplotlib</p>
            </div>
          </div>

          <div className="item" style={{ '--position': 3}}>
            <a href="https://github.com/Karner-David/Furniture-Image-Classifier" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}>  
                <h1 className="text-sm text-blue-500 underline font-[OSBold]">Stardew Valley Sprinkler Calculator</h1>
            </a>
            <a href="https://github.com/Karner-David/Furniture-Image-Classifier" target="_blank" rel="noopener noreferrer">
              <img className="" src="/Project-Thumbnails/sdsc_tn.png" alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
            </a>
            <div className="w-full proj-description" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}>
              
              <p className="text-white text-[8px]">A helper for the game Stardew Valley to calculate where to put sprinklers based on a map.</p>
              <p className="education-gradient-text text-[8px] font-bold">Tech Stack: MongoDB, Express, React, Node.js</p>
            </div>
          </div>

          <div className="item" style={{ '--position': 4}}>
            <a href="https://github.com/Karner-David/CoreKeeper-Electricity-Guide" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}>  
                <h1 className="text-sm text-blue-500 underline font-[OSBold]">Core Keeper Electricity Guide</h1>
            </a>
            <a href="https://github.com/Karner-David/CoreKeeper-Electricity-Guide" target="_blank" rel="noopener noreferrer">
              <img className="" src="/Project-Thumbnails/CoreKeeper_tn.png" alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
            </a>
            <div className="w-full proj-description" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}>
              
              <p className="text-white text-[8px]">A visual guide for how electricity works in the game Core Keeper.</p>
              <p className="education-gradient-text text-[8px] font-bold">Tech Stack: AWS, React, Node.js, Tailwind</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}