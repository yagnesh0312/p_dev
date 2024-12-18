import { Spotlight } from '@/components/ui/spotlight';
import React from 'react';
import "./home.css";
import content from '../data/content';
import Image from 'next/image';


function HomePage() {
    const icons = [
        { src: content.NEXTJS_ICON, top: "15%", left: "70%", duration: `${Math.floor(Math.random() * 6 + 2)}s`, animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { src: content.REACT_ICON, top: "17%", left: "30%", duration: `${Math.floor(Math.random() * 6 + 2)}s`, animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { src: content.NODEJS_ICON, top: "45%", left: "85%", duration: `${Math.floor(Math.random() * 6 + 2)}s`, animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { src: content.GITHUB_ICON, top: "60%", left: "15%", duration: `${Math.floor(Math.random() * 6 + 2)}s`, animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { src: content.MONGODB_ICON, top: "75%", left: "45%", duration: `${Math.floor(Math.random() * 6 + 2)}s`, animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { src: content.PYTHON_ICON, top: "40%", left: "10%", duration: `${Math.floor(Math.random() * 6 + 2)}s`, animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { src: content.C_ICON, top: "13%", left: "50%", duration: `${Math.floor(Math.random() * 6 + 2)}s`, animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { src: content.HTML5_ICON, top: "75%", left: "70%", duration: `${Math.floor(Math.random() * 6 + 2)}s`, animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { src: content.CSS3_ICON, top: "85%", left: "30%", duration: `${Math.floor(Math.random() * 6 + 2)}s`, animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { src: content.JAVA_ICON, top: "65%", left: "40%", duration: `${Math.floor(Math.random() * 6 + 2)}s`, animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { src: content.PHP_ICON, top: "80%", left: "55%", duration: `${Math.floor(Math.random() * 6 + 2)}s`, animationDelay: `${Math.floor(Math.random() * 3)}s` },
    ];

    return (
        <div className="lg:h-screen h-screen w-full rounded-md flex items-center md:justify-center bg-white/[0.96] dark:bg-black/[0.96] antialiased bg-grid-black/[0.09] dark:bg-grid-white/[0.09] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#C39BD3"
            />
            <div className="absolute pointer-events-none inset-0 w-full h-full items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

            <div className="relative z-10  flex flex-col items-center justify-center lg:mx-40 md:mx-20 mx-10 h-full" style={{
                display: 'flex', alignItems: 'center'
            }}>
                <h1
                    className="text-4xl md:text-7xl font-medium text-center bg-clip-text text-transparent 
                    bg-gradient-to-b
                    from-neutral-900 to-neutral-700 bg-opacity-50 
                    dark:from-neutral-100 dark:to-neutral-500 dark:bg-opacity-50 
                    md:leading-tight"
                >
                    I am,
                    <span className="dark:from-black dark:to-white text-gradient bg-gradient-to-br"> {content.OWNER_NAME}</span>
                    <br /> {content.QUOTE}
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-700 dark:text-neutral-200 text-center mx-auto">
                    {content.DESCRIPTION} </p>
                <a href={content.GITHUB_URL} className="mt-8 border-2 border-dashed group flex items-center justify-center px-4 py-2 text-base font-medium rounded-md dark:text-white hover:bg-black/[0.2] dark:hover:bg-black/[0.8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/[0.90] dark:focus:ring-white/[0.90] inline-flex w-fit">
                    <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="group-hover:text-neutral-900 dark:group-hover:text-neutral-400">{content.GITHUB_TEXT}</span>
                </a>
            </div>

            <div className="floating-icons">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className={"icon-item absolute z-[50] " + icon.duration}
                        style={{
                            top: icon.top,
                            left: icon.left,
                            animationDuration: icon.duration,
                            animationDelay: icon.animationDelay
                        }}
                    >
                        <Image
                            src={icon.src}
                            width={30} height={30}
                            alt={`icon-${index}`}
                            className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-70 saturate-150 "
                        />
                    </div>
                ))}
            </div>
        </div>
    );

}

export default HomePage;
