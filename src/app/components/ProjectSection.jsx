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
        title: "Image Colorization using user-guided Hints",
        description: "Implemented an AutoEncoder to colorize grayscale images, also added user-guided color priors for users to generate a variety of colorized images.",
        image: "/images/project/gray_color_mayon.png",
        tag: ["All","ML"],
        githubUrl: "https://github.com/joymohanty8999/image-colorisation-using-color-priors"
    },

    {
        id: 3,
        title: "Sentiment Analysis of Complaints on a Student Grievance Portal",
        description: "Engineered a sentiment analysis model using LSTMs to prioritize student grievances, achieving an 87% test accuracy and significantly improving response times to critical issues.",
        image: "/images/project/sentiment-analysis-bilstms.jpg",
        tag: ["All","ML"],
        githubUrl: "https://github.com/joymohanty8999/sentiment-analysis"
    },

    {
        id: 4,
        title: "Intelligent Query Optimization",
        description: "This project explores Dynamic Bloom Filters (DBFs) and the fine-tuning of SentenceTransformer models for optimizing semantic search in large-scale document retrieval systems. It focuses on improving scalability, precision, memory efficiency, and query performance in dynamic and real-time workloads.",
        image: "/images/project/Query-Optimization.png",
        tag: ["All","ML","Web"],
        githubUrl: "https://github.com/joymohanty8999/intelligent-query-optimization"
    },

    {
        id: 5,
        title: "Rate Limiter",
        description: "A rate limiting service built in Go using Token Bucket Algorithm. Features atomic Redis operations via Lua Scripts, dual rate limiting per IP and per candidate, fail-open Redis integration and YAML-based config.",
        image: "/images/project/rate-limiter.png",
        tag: ["All","Backend"],
        githubUrl: "https://github.com/joymohanty8999/rate-limiter"
    }

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