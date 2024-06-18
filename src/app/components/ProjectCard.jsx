import React from "react";
import styles from '../styles/custom.css'; 
import { CodeBracketIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ imgUrl, title, description, githubUrl }) => {
    return (
        <div className={`w-80 h-96 flex flex-col justify-between rounded-xl overflow-hidden shadow-lg bg-[#181818] border border-gray-700 group relative ${styles['project-card']}`}>
            <div className="relative w-full h-48 transition duration-300 ease-in-out group-hover:opacity-75">
                <div style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%"
                }} className="rounded-t-xl">
                </div>
            </div>
            <div className="flex flex-col justify-between text-white p-4 h-48 overflow-y-auto transition duration-300 ease-in-out group-hover:bg-gray-800 group-hover:text-gray-300">
                <div className="mb-4">
                    <h5 className="font-semibold text-xl mb-2">{title}</h5>
                </div>
                <div className="text-[#ADB7BE] group-hover:text-gray-400">
                    <p>{description}</p>
                </div>
            </div>
            
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700">
                    <CodeBracketIcon className="h-6 w-6" />
                </div>
            </a>

        </div>
    );
}

export default ProjectCard;