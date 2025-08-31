import React from 'react';
import UTTower from '../../assets/companyicons/Ut-austin-nobg.png';
import CourseChips from '../CourseChips/CourseChips';
import './Education.css';
import '../../App.css';

export default function Education() {

    const courses = [
        "Algorithms",
        "Computer Architecture",
        "Operating Systems",
        "Data Structures",
        "Data Management",
        "Software Engineering",
        "Discrete Math",
        "Linear Algebra",
        "Machine Learning",
    ];

    return(
        <div className="w-full flex flex-col mb-16 overflow-x-hidden items-center education-container">
            <div className="education-title">
                
            </div>
            <div className="flex education-content">
                <div className="flex text-3xl text-gray-200 text-right mx-11 items-center content-text animate-[slide-in-left_0.7s_ease-out]">
                    <h1 style={{fontFamily: 'OSBold'}}>
                        <span><h1 className="text-5xl my-4 animate-[fade-in_1.1s_ease-out]" style={{fontFamily: 'OSBold', color: '#f37050'}}>Education</h1></span>
                        I'm a Senior at the <br/> <span className='text-4xl light-orange-text'>University of Texas at Austin</span>, <br/> 
                        aiming for a <span className='text-4xl light-orange-text'>B.S. </span> in 
                        <span className='text-4xl light-orange-text'> Computer Science</span>. <br/>
                        My main interests are <span className='text-4xl light-orange-text'>Web Development</span> 
                        <br/> and <span className='text-4xl light-orange-text'>Machine Learning</span>.
                    </h1>
                </div>
                <div className="content-img">
                    <img className='h-96 animate-[slide-in-right_0.7s_ease-out]' src={UTTower} alt="" />
                </div>
            </div>
            <CourseChips courses={courses}></CourseChips>
        </div>
    );
}