"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="grid grid-cols-1 sm:grid-cols-12 items-center lg:gap-8 gap-4">
                <div className="col-span-1 sm:col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                            Hello, I&apos;m
                        </span>
                        <br />
                        <span className="block sm:inline-block" style={{ minHeight: '1.5em' }}>
                            <TypeAnimation
                                sequence={['Joseph Mohanty', 2000, 
                                    'a Software Developer', 1500, 
                                    'a Machine Learning Engineer', 1500,
                                ]}
                                repeat={Infinity}
                                deletionSpeed={90}
                                className="inline-block"
                            />
                        </span>
                    </h1>

                    <p className="text-[#ADB7BE] text-lg lg:text-xl mb-4">
                        An enthusiastic Computer Science student, looking for opportunities in the field of Software Development, Data Science and Machine Learning.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white">
                            Download CV
                        </button>
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