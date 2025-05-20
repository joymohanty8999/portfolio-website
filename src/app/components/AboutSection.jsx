import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="mb-8 md:mb-0"> {/* Adjust margin-bottom for spacing on mobile */}
                    <Image
                        src="/images/about-me.png"
                        alt="about-me"
                        width={500}
                        height={500}
                    />
                </div>

                <div>
                    <h2 className="text-4xl font-sans font-bold mb-4 text-white">ABOUT ME</h2>
                    <br />

                    <p className="text-base lg:text-lg">
                        My name is Joseph Anurag Mohanty. I graduated with my Master&apos;s in Computer Science at <a href="https://www.rice.edu" target="_blank" className="text-blue-500 hover:text-blue-700">Rice University</a>, with a Bachelor&apos;s degree in Computer Science Engineering from <a href="https://www.manipal.edu/mit.html" target="_blank" className="text-blue-500 hover:text-blue-700">Manipal Institute of Technology</a>. I am specializing in the field of Data Science and Machine Learning. With a strong foundation in software development and a keen interest in emerging technologies, I have continually sought out opportunities to apply my skills to real-world challenges.
                    </p>

                    <br />

                    <p className="text-base lg:text-lg">
                        I am currently working as a Software Developer at Script Care, Ltd., where I focus on backend automation and system efficiency. I built a GoLang-based API to automate token password resets for over 100 Tredium Web Service accounts, incorporating password generation, credential management, and Redis token cache refresh. This automation led to a 30% improvement in token retrieval speed and significantly reduced manual intervention. 
                    </p>

                    <br />

                    <p className="text-base lg:text-lg">
                        I worked as a Research Assistant under <a href="https://www.cs.rice.edu/~cmj4/" target="_blank" className="text-blue-500 hover:text-blue-700">Professor Chris Jermaine</a>. We worked on a Machine Learning system - Einsummable - that automatically distributes ML compute graphs across clusters of CPU or GPU machines. It is based on the idea that tensors are relations mapping positions to values and all operations are therefore relational. The benefit of treating ML compute graphs as relational queries is that they can be easily reasoned and optimized over.
                    </p>

                    <br />

                    <p className="text-base lg:text-lg">
                        Prior to joining Rice, I worked as a Software Engineer at <a href="https://www.ubs.com/us/en.html" target="_blank" className="text-blue-500 hover:text-blue-700">UBS</a> in their Investment Banking Division, where I was part of the CAIP (Corporate Actions and Income Processing) Team. I primarily contributed to leading code release activities for our application suite.
                    </p>

                </div>

            </div>
        </section>
    );
}

export default AboutSection;