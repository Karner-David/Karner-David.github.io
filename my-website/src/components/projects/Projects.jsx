import React, {useState} from "react";
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Papertrail",
    repoUrl: "https://github.com/Karner-David/SWE-Project",
    imageUrl: "/Project-Thumbnails/Papertrail.png",
    description: "An Amazon-like marketplace for newspapers and magazines.",
    techStack: "Tech Stack: SQLite, Flask, React, Node.js"
  },
  {
    id: 2,
    title: "Furniture Image Classifier",
    repoUrl: "https://github.com/Karner-David/Furniture-Image-Classifier",
    imageUrl: "/Project-Thumbnails/image_class_tn.png",
    description: "An image classifier to separate pieces of furniture like cabinets, chairs, fridges, tables, and TVs.",
    techStack: "Tech Stack: Tensorflow, NumPy, Matplotlib"
  },
  {
    id: 3,
    title: "Stardew Valley Sprinkler Calculator",
    repoUrl: "https://github.com/Karner-David/Stardew_SprinklerCalculator", 
    imageUrl: "/Project-Thumbnails/sdsc_tn.png",
    description: "A helper for the game Stardew Valley to calculate where to put sprinklers based on a map.",
    techStack: "Tech Stack: MongoDB, Express, React, Node.js"
  },
  {
    id: 4,
    title: "Core Keeper Electricity Guide",
    repoUrl: "https://github.com/Karner-David/CoreKeeper-Electricity-Guide",
    imageUrl: "/Project-Thumbnails/CoreKeeper_tn.png",
    description: "A visual guide for how electricity works in the game Core Keeper.",
    techStack: "Tech Stack: AWS, React, Node.js, Tailwind"
  },
  {
    id: 5,
    title: "Event Extractor",
    repoUrl: "https://github.com/Karner-David/calendar-extractor-extension",
    imageUrl: "/Project-Thumbnails/EventExtractorPortfolio.png",
    description: "An extension to extract dates/events from pdf files or text and upload straight to your Google Calendar.",
    techStack: "Tech Stack: React, Express, Node.js, Tailwind, Gemini"
  }
];

const ProjectItem = ({ project, position, setPaused }) => {
  return (
    <div 
      className="item" 
      style={{ '--position': position }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">  
        <h1 className="text-sm text-blue-500 underline font-[OSBold]">
          {project.title}
        </h1>
      </a>
      
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
        <img src={project.imageUrl} alt={project.title} />
      </a>
      
      <div className="w-full proj-description">
        <p className="text-white text-[8px]">{project.description}</p>
        <p className="education-gradient-text text-[8px] font-bold">
          {project.techStack}
        </p>
      </div>
    </div>
  );
};

export default function Projects() {
  const [paused, setPaused] = useState(false);
  
  return (
    <div className="w-full flex flex-col items-center projects-container">
      <h1 className="flex text-5xl text-white font-[OSBold]"> Coding Projects</h1>
      
      <div className="mt-5 banner">
        <div 
          className="slider" 
          style={{ 
            '--quantity': projects.length, 
            '--paused': paused ? 'paused' : 'running' 
          }}
        >
          {projects.map((project, index) => (
            <ProjectItem 
              key={project.id} 
              project={project} 
              position={index + 1} 
              setPaused={setPaused}
            />
          ))}
        </div>
      </div>
    </div>
  );
}