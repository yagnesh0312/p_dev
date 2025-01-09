import { Spotlight } from '@/components/ui/spotlight';
import React from 'react';
import "./home.css";
import content from '../data/content';
import Image from 'next/image';
import Link from 'next/link';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TypewriterEffect, TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { FontStyle } from '../data/fontStyle';


function HomePage() {
    const words = [
        {
            text: "Build ",
        },
        {
            text: "awesome",
        },
        {
            text: "apps",
        },
        {
            text: "with",
        },
        {
            text: "Aceternity.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    const icons = [
        { name: "JavaScript", src: content.JAVASCRIPT_ICON, top: "15%", left: "70%", duration: "2s", animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { name: "Docker", src: content.DOCKER_ICON, top: "17%", left: "30%", duration: "2s", animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { name: "Kubernetes", src: content.KUBERNETES_ICON, top: "45%", left: "85%", duration: "2s", animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { name: "AWS", src: content.AWS_ICON, top: "60%", left: "15%", duration: "2s", animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { name: "GitHub", src: content.GITHUB_ICON, top: "75%", left: "45%", duration: "2s", animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { name: "MongoDB", src: content.MONGODB_ICON, top: "30%", left: "10%", duration: "2s", animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { name: "Python", src: content.PYTHON_ICON, top: "13%", left: "50%", duration: "2s", animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { name: "Terraform", src: content.TERRAFORM_ICON, top: "75%", left: "70%", duration: "2s", animationDelay: `${Math.floor(Math.random() * 3)}s` },
        { name: "Ansible", src: content.ANSIBLE_ICON, top: "85%", left: "30%", duration: "2s", animationDelay: `${Math.floor(Math.random() * 3)}s` },
    ];

    return (
        <div className="lg:h-screen h-screen w-full rounded-md flex items-center md:justify-center bg-white/[0.96] dark:bg-black/[0.96] antialiased  relative overflow-hidden">

            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#c6ffc6"
            />
            <BackgroundBeams />
            <div className="absolute pointer-events-none inset-0 w-full h-full items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
            <div className="relative z-10  flex flex-col items-center justify-center lg:mx-40 md:mx-20 mx-10 h-full" style={{
                display: 'flex', alignItems: 'center'
            }}>
                <h1
                    className={"text-2xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b font-light from-neutral-900 to-neutral-700 bg-opacity-50 dark:from-neutral-100 dark:to-neutral-500 dark:bg-opacity-50 tracking-tighter " +FontStyle.jetbrains}
                >
                    Hello Everyone! <br />
                </h1>
                <span className="">
                    <TypewriterEffectSmooth words={[
                        {
                            text: content.OWNER_NAME.split(" ")[0],
                            className: " text-gradient-shadow " +FontStyle.jetbrains + " border border-2 rounded-3xl mr-2 border-green-900  dark:border-green-300 bg-white dark:bg-black font-medium  md:text-7xl   text-2xl md:text-7xl "
                        },
                        {
                            text: content.OWNER_NAME.split(" ")[1] + " ",
                            className: "font-medium " +FontStyle.jetbrains + " border border-2 rounded-3xl mr-2 border-green-900  dark:border-green-300 bg-white dark:bg-black text-gradient-shadow md:text-7xl text-2xl md:text-7xl "
                        },
                        {
                            text: "Here...",
                            className: "text-2xl " +FontStyle.jetbrains + "  md:text-7xl font-light text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700  bg-opacity-50 dark:from-neutral-100 dark:to-neutral-500 tracking-tighter dark:bg-opacity-50"
                        }
                    ]} /></span>
                <p className="mt-4 font-normal text-xs md:text-sm text-center mx-auto">
                    {content.DESCRIPTION} </p>
                <Link
                    href="https://drive.google.com/file/d/1PvJfhqbeQhomGghWoXFKkK9gxjojJpfp/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div
                        className="flex flex-row items-center justify-center px-6 py-3 mt-6 rounded-full border-2 border-green-500 hover:shadow-green-900 hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out"
                    >
                        <div className="text-base font-medium text-green-500 dark:text-green-300">
                            Download
                        </div>
                        <span className="font-bold text-green-500 text-lg dark:text-green-300 ml-3">
                            CV
                        </span>
                    </div>
                </Link>
            </div>

           
            <div className="floating-icons">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className="icon-item absolute z-[50]"
                        style={{
                            top: icon.top,
                            left: icon.left,
                            animationDuration: icon.duration,
                            animationDelay: icon.animationDelay
                        }}
                        title={`${icon.name}`}
                    >
                        <Image
                            src={icon.src}
                            width={30} height={30}
                            alt={`icon-${index}`}
                            className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-70 saturate-150 transition-transform duration-300 hover:scale-150 "
                            
                        />
                    </div>
                ))}
            </div>

        </div>
    );

}

export default HomePage;
