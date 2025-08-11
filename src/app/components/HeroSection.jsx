"use client";
import React, {useRef, useEffect} from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect/dist/core';

const HeroSection = () => {

    const typewriterRef = useRef(null);

    const resumeURL = "files/Resume/Joseph%20Mohanty.pdf";

    useEffect(() => {
        const typewriter = new Typewriter(typewriterRef.current, {
            loop: true,
            delay: 75,
            deleteSpeed: 50,
        });

        typewriter
            .typeString('Joseph Mohanty')
            .pauseFor(3000)
            .deleteAll()
            .typeString('a Software Developer')
            .pauseFor(3000)
            .deleteAll()
            .typeString('a ML Engineer')
            .pauseFor(3000)
            .deleteAll()
            .typeString('a Data Engineer')
            .pauseFor(3000)
            .deleteAll()
            .start();
    }, []);

    return (
        <section className="hero-section mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-12 items-center lg:gap-8 gap-4">
                <div className="col-span-1 sm:col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                            Hello, I&apos;m
                        </span>
                        <br />
                        <span className="block sm:inline-block" style={{ minHeight: '1.5em' }}>

                            <span ref={typewriterRef} className="inline-block"></span>

                        </span>
                    </h1>

                    <p className="text-[#ADB7BE] text-lg lg:text-xl mb-4">
                        An enthusiastic Computer Science student, looking for opportunities in the field of Software Development, Data Science and Machine Learning.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        {/* Use an anchor tag to download the resume */}
                        <a
                            href={resumeURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-center"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-5 flex justify-center mt-6 sm:mt-0">
                    <div className="rounded-full bg-[#e5dddd] w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] lg:w-[400px] lg:h-[400px] max-w-[400px] max-h-[400px] overflow-hidden flex items-center justify-center relative"
                        style={{ marginLeft: '20px' }}> 
                        <Image 
                            src="/images/portfolio-image.png" 
                            alt="portfolio-image" 
                            className="object-cover" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
                            width={500} height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;