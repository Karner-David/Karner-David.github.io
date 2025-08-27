import React, {useRef, useState, useEffect} from "react";
import Chip from "./Chips";

export default function CourseChips({ courses }) {

    const wrapRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
        ([entry], obs) => {
            if (entry.isIntersecting) {
            setInView(true);
            obs.unobserve(entry.target); // run once
            }
        },
        { root: null, threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <>
            <h1 className='text-1xl text-gray-200' style={{fontFamily: 'OSBOLD'}}>Related Coursework:</h1>
            <div         ref={wrapRef}
className="flex flex-wrap gap-3 w-[50%] justify-center mt-4 mb-4 coursework-container">
                {courses.map((course, index) => (
                    <Chip course={course} key={index} inView={inView} delay={index * 150}/>
                ))}
            </div>
        </>
    )
}