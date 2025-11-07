import React from 'react';
import video from '/Game_Title_Screen.mp4';
import BSRPoster from '/Buckshot_Roullete_MoviePoster.png';
import '../../App.css';

export default function DesignProjects() {

    return(
        <div className='flex flex-col items-center text-gray-200' style={{fontFamily: 'OSBold'}}>
            <h1 className='flex text-5xl text-center my-10'> Design Projects </h1>
            <h2 className="text-3xl my-1"> Buckshot Roulette Movie Poster</h2>
            <h3 className="text-2xl my-1"> Tech Used: GIMP</h3>
            <img src={BSRPoster} ></img>
            <hr style={{width: "90%", height: "10px", margin: "30px"}}/>
            <h2 className='text-3xl my-1'> Video Game Title Screen Demo</h2>
            <h3 className="text-2xl my-1"> Tech Used: Godot (Visual Creation), Davinci Resolve (Music Addition)</h3>
            <video className="mb-10" width="750" height="500" controls>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}