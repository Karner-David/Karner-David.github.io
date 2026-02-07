import React from 'react';
import BSRPoster from '/Graphics/Buckshot_Roullete_MoviePoster.png';
import Breathe from '/Graphics/Breathe-final.png';
import Cyber from '/Graphics/cyber-final.png';
import Spider from '/Graphics/krita_spider-final.jpg';
import Rainy from '/Graphics/RainyDay-final.png';
import Samurai from '/Graphics/sam-final.png';
import Zombie from '/Graphics/ZombieBrutalism.png';
import Red from '/Graphics/Red-Final-true.png';
import Car from '/Graphics/carSample.png';
import Bird from '/Graphics/Bird-Final.png';
import Building from '/Graphics/Building-Final-True.png';
import Album from '/Graphics/Album-Final.png';
import Space from '/Graphics/Space-Final.png';
import Image from './Image';

import '../../App.css';

export default function DesignProjects() {

    return(
        <div className='flex flex-col items-center text-gray-200' style={{fontFamily: 'OSBold'}}>
            <h1 className='flex text-5xl text-center mb-10'> Design Projects </h1>
            <div className='grid grid-cols-3 mx-20 mb-20 gap-5'>
                <div className='flex flex-col gap-5'>
                    <Image src={Red} alt="red, brutalism, graphic design"/>
                    <Image src={Bird} alt="spoonbill graphic design" />
                    <Image src={Breathe} alt="robotic graphic design" />
                    <Image src={BSRPoster} alt="buckshot roulette movie poster" />
                </div>
                <div className='flex flex-col gap-5'>
                    <Image src={Car} alt="y2k-styled nissan skyline graphic design" />
                    <Image src={Album} alt="japanese album cover design" />
                    <Image src={Rainy} alt="raining graphic design with japanese text" />
                    <Image src={Spider} alt="spider-man into the spider-verse movie poster" />
                </div>
                <div className='flex flex-col gap-5'>
                    <Image src={Samurai} alt="samurai brutalism graphic design" />
                    <Image src={Space} alt="space and cybersigilism graphic design"/>
                    <Image src={Building} alt="japanese ancient building graphic design" />
                    <Image src={Zombie} alt="zombie brutalism graphic design" />
                    <Image src={Cyber} alt="cyberpunk styled graphic design" />
                </div>
            </div>

        </div>
    )
}