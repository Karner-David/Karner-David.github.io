import React from 'react';


export default function Image({src}) {
    return (
        <div className="w-[300px] h-[400px]" >
            <img src={src} alt="" 
            className="w-full h-full object-contain"
            />
        </div>
    )
}