import React from 'react';
import BSRPoster from '/Graphics/Buckshot_Roullete_MoviePoster.png';
import Breathe from '/Graphics/Breathe-final.png';
import Cyber from '/Graphics/cyber-final.png';
import Spider from '/Graphics/krita_spider-final.jpg';
import Rainy from '/Graphics/RainyDay-final.png';
import Samurai from '/Graphics/sam-final.png';
import Zombie from '/Graphics/ZombieBrutalism.png';
import Image from './Image';

import '../../App.css';

export default function DesignProjects() {

    return(
        <div className='flex flex-col items-center text-gray-200' style={{fontFamily: 'OSBold'}}>
            <h1 className='flex text-5xl text-center my-10'> Design Projects </h1>
            <div className='grid grid-cols-3 mx-20 mb-20 gap-5'>
                <div className='flex flex-col gap-5'>
                    <Image src={BSRPoster} alt="" />
                    <Image src={Breathe} alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <Image src={Cyber} alt="" />
                    <Image src={Spider} alt="" />
                    <Image src={Rainy} alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <Image src={Samurai} alt="" />
                    <Image src={Zombie} alt="" />
                </div>
            </div>

        </div>
    )
}