"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Rice University",
    location: "Houston, TX, USA",
    duration: "May 2024 – Dec 2024",
    logo: "/logos/rice-university.jpg",
    details: [
      "Developed Ein-Summable - A system to help run Machine Learning tasks concurrently across computers.",
      "Integrated Llama 3 with CUDA for GPU-accelerated inference, reducing latency and boosting LLM Inference speed.",
      "Set up CI for automated testing using GitHub Actions, streamlining the development process by 50%.",
    ],
  },
  {
    title: "Software Engineer",
    company: "UBS",
    location: "Pune, MH, India",
    duration: "Jul 2022 – Jul 2023",
    logo: "/logos/UBS-logo.png",
    details: [
      "Led bi-weekly code release activities; Deployed application enhancements; improving client satisfaction by 30%.",
      "Designed and integrated Shell Scripts that slashed manual workload by 15%.",
      "Monitored application logs, analyzing database discrepancies, leading to 40% reduction in errors.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "UBS",
    location: "Pune, MH, India",
    duration: "Jul 2022 – Jul 2023",
    logo: "/logos/UBS-logo.png",
    details: [
      "Led bi-weekly code release activities; Deployed application enhancements; improving client satisfaction by 30%.",
      "Designed and integrated Shell Scripts that slashed manual workload by 15%.",
      "Monitored application logs, analyzing database discrepancies, leading to 40% reduction in errors.",
    ],
  },
  {
    title: "Product Engineering Intern",
    company: "NTT Data Payment Services",
    location: "Mumbai, MH, India",
    duration: "Jan 2021 – Sept 2021",
    logo: "/logos/ntt-data-logo.png",
    details: [
      "Extracted Merchant IDs using Python; Reduced errors in pre-processing by 80%.",
      "Implemented Unit Test Cases for an Online Transaction Switch (OTS) and ensured 90%+ code coverage.",
    ],
  },
];

export default function ExperiencePage() {
  const sectionsRef = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSections((prev) => [...new Set([...prev, index])]);
            }, index * 200); // Delay of 200ms for staggered animation
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className="min-h-screen py-12 px-6 lg:px-24 bg-gray-900 text-white relative">
      {/* Floating Button for Back to Home */}
      <Link
        href="/"
        className="fixed bottom-6 left-6 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 z-50"
      >
        Back to Home
      </Link>

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold uppercase">Experience</h1>
      </div>

      {/* Experience Sections */}
      <div className="space-y-16 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`flex flex-col lg:flex-row items-center lg:items-start transition-transform duration-700 ease-in-out ${
              visibleSections.includes(index)
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            {/* Logo Section */}
            <div className="lg:w-1/3 flex justify-center items-center p-6">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={150}
                height={150}
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Details Section */}
            <div className="lg:w-2/3 px-8">
              <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
              <h3 className="text-xl text-blue-400 mb-1">{exp.company}</h3>
              <p className="text-sm text-gray-400 mb-1">{exp.location}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-gray-300">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}