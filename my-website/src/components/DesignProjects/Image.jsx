import React, { useState } from 'react';

export default function Image({ src }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div 
                className="max-w-[300px] max-h-[400px] cursor-pointer hover:scale-105 duration-300" 
                onClick={() => setIsOpen(true)}
            >
                <img 
                    src={src} 
                    alt="" 
                    className="w-full h-full object-contain"
                />
            </div>

            {isOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                >
                    <img 
                        src={src} 
                        alt="" 
                        className="max-w-[90%] max-h-[90%] object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()} 
                    />
                </div>
            )}
        </>
    );
}