"use client";
import { useEffect } from "react";
import Image from "next/image";
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Lottie from 'react-lottie-player';
import animationData from '../../../public/lottie-coding-animation.json';

export default function Contact() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const script = document.createElement('script');
            script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section className="relative flex flex-col md:flex-row items-center my-12 py-24 gap-8 px-6">
            <div className="flex-1">
                <a href="/" className="text-blue-500 hover:text-blue-700 font-semibold mb-4 inline-block">
                    ← Back to Home
                </a>

                <h5 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                        Let&apos;s Connect!
                    </span>
                </h5>

                <p className="text-[#ADB7BE] mb-4">
                    I&apos;m currently looking for full-time roles and Fall Co-op internships. My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
                </p>

                <p className="text-[#ADB7BE] mb-4">
                    You can follow me on GitHub or LinkedIn.
                </p>

                <div className="socials flex flex-row gap-4">
                    <a href="https://github.com/joymohanty8999" target="_blank" rel="noopener noreferrer">
                        <Image src={GithubIcon} alt="Github Icon" className="w-12 h-12" />
                    </a>
                    <a href="https://www.linkedin.com/in/joseph-mohanty-874441143/" target="_blank" rel="noopener noreferrer">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-12 h-12" />
                    </a>
                    <a href="mailto:jm215@rice.edu" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end items-center">
                <Lottie
                    loop
                    animationData={animationData}
                    play
                    style={{ width: 400, height: 400 }}
                />
            </div>
        </section>
    );
}