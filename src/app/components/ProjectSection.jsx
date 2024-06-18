import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const projectsData = [

    {
        id: 1,
        title: "URL Shortener",
        description: "Developed a URL shortener service using Go, MongoDB, and Gorilla Mux, allowing users to shorten, manage, and retrieve URLs efficiently through a RESTful API.",
        image: "/images/project/url-shortener-project.jpg",
        tag: ["All","Web"],
        githubUrl: "https://github.com/joymohanty8999/url-shortener"
    },

    {
        id: 2,
        title: "Brain Tumor Detection",
        description: "Developed a custom CNN model to detect brain tumors with a test accuracy of 95%, enhanced by implementing GRAD-CAM for heatmap visualizations to highlight tumor regions.",
        image: "/images/project/brain-tumor-detection.jpeg",
        tag: ["All","ML"],
        githubUrl: "https://github.com/joymohanty8999/statistical-ml-project"
    },

    {
        id: 3,
        title: "Image Colorization using user-guided Hints",
        description: "Implemented an AutoEncoder to colorize grayscale images, also added user-guided color priors for users to generate a variety of colorized images.",
        image: "/images/project/image-colorization.png",
        tag: ["All","ML"],
        githubUrl: "https://github.com/joymohanty8999/image-colorisation-using-color-priors"
    },

    {
        id: 4,
        title: "Sentiment Analysis on Complaints on a Student Grievance Portal",
        description: "Engineered a sentiment analysis model using LSTMs to prioritize student grievances, achieving an 87% test accuracy and significantly improving response times to critical issues.",
        image: "/images/project/sentiment-analysis-bilstms.jpg",
        tag: ["All","ML"],
        githubUrl: "https://github.com/joymohanty8999/sentiment-analysis"
    },

]

const ProjectSection = () => {

    return(
        <section className="py-12" id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">PROJECTS</h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} githubUrl={project.githubUrl} />
                ))}
            </div>
        </section>
    )

}

export default ProjectSection;