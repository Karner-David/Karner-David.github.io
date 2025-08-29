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
      <div className="my-5 banner">
        <div className="slider" style={{ '--quantity': 10, '--paused': (paused) ? 'paused' : 'running'  }}>
          <div className="item" style={{ '--position': 1}}>
            <img className="" src={Dragon1} alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
          </div>
          <div className="item" style={{ '--position': 2}}>
            <img className="" src={Dragon2} alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
          </div>
          <div className="item" style={{ '--position': 3}}>
            <img className="" src={Dragon3} alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
          </div>
          <div className="item" style={{ '--position': 4}}>
            <img className="" src={Dragon4} alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
          </div>
          <div className="item" style={{ '--position': 5}}>
            <img className="" src={Dragon5} alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
          </div>
          <div className="item" style={{ '--position': 6}}>
            <img className="" src={Dragon6} alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
          </div>
          <div className="item" style={{ '--position': 7}}>
            <img className="" src={Dragon7} alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
          </div>
          <div className="item" style={{ '--position': 8}}>
            <img className="" src={Dragon8} alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
          </div>
          <div className="item" style={{ '--position': 9}}>
            <img className="" src={Dragon9} alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
          </div>
          <div className="item" style={{ '--position': 10}}>
            <img className="" src={Dragon10} alt="" onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}/>
          </div>
        </div>
      </div>
    </div>
  )
}