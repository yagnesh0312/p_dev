"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
import '../globalicons.css';
import content from "../data/content";
import Image from "next/image";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({
    className
}) {
    const route = useRouter();
    const [active, setActive] = useState(null);
    const [darkmode, setDarkmode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Check for theme on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkmode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkmode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const hover_list_effect = "hover:underline decoration-wavy decoration-2 dark:decoration-wavy dark:decoration-2";

    const handleToggle = () => {
        setDarkmode(!darkmode);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', darkmode ? 'light' : 'dark'); // Save theme to localStorage
        setIsMenuOpen(false);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={cn("fixed top-10 flex items-center px-4 mx-auto z-[10000] w-full justify-between", className)}>
            {/* Logo Section */}
            <HoveredLink href="/" onClick={() => setActive(content.NAVBAR_HOME)} className={hover_list_effect}>
                <div className="flex text-xl flex-row space-x-8 justify-center text-black w-[100px] md:w-[200px] dark:text-white bg-white/20 dark:bg-black/40 shadow-lg backdrop-blur-lg  md:py-4 py-2  rounded-full border border-gray-200 font-bold dark:border-gray-800 text-gradient">
                    {content.PROJECT_TITLE}

                </div>
            </HoveredLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:flex-row md:space-x-4 md:items-center">
                <div className="flex flex-row space-x-8 items-center justify-center backdrop-blur-lg shadow-lg text-black dark:text-white bg-white/20 dark:bg-black/40 px-12 py-4 rounded-full border border-gray-200 dark:border-gray-800">
                    <HoveredLink href="/" onClick={() => { setActive(content.NAVBAR_HOME); setIsMenuOpen(false) }} className={hover_list_effect}>
                        <div className={active === content.NAVBAR_HOME ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_HOME}</div>
                    </HoveredLink>
                    <HoveredLink href="/About" onClick={() => { setActive(content.NAVBAR_ABOUT); setIsMenuOpen(false) }} className={hover_list_effect}>
                        <div className={active === content.NAVBAR_ABOUT ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_ABOUT}</div>
                    </HoveredLink>
                    <HoveredLink href="/Education" onClick={() => { setActive(content.NAVBAR_EDUCATION); setIsMenuOpen(false) }} className={hover_list_effect}>
                        <div className={active === content.NAVBAR_EDUCATION ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_EDUCATION}</div>
                    </HoveredLink>
                    <HoveredLink href="/Project" onClick={() => { setActive(content.NAVBAR_PROJECT); setIsMenuOpen(false) }} className={hover_list_effect}>
                        <div className={active === content.NAVBAR_PROJECT ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_PROJECT}</div>
                    </HoveredLink>
                    <HoveredLink href="/Contact" onClick={() => { setActive(content.NAVBAR_CONTACT); setIsMenuOpen(false) }} className={hover_list_effect}>
                        <div className={active === content.NAVBAR_CONTACT ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_CONTACT}</div>
                    </HoveredLink>
                </div>

                {/* Dark Mode Toggle */}
                <div className="flex items-center cursor-pointer  w-14 h-14  bg-white/90 shadow-lg backdrop-blur-lg px-3 py-3  dark:bg-black/40  rounded-full border border-gray-200 font-bold dark:border-gray-800" onClick={handleToggle}>
                    <Image src={darkmode ? "https://img.icons8.com/ios-glyphs/512/FFFFFF/moon-symbol.png"
                        : "https://img.icons8.com/ios-glyphs/512/000000/sun.png"}
                        alt="Dark Mode Toggle" width={30} height={30}
                        className=""
                    />
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center" onClick={handleMenuToggle}>
                {!isMenuOpen ? <Image src={darkmode ? "https://img.icons8.com/ios-glyphs/512/FFFFFF/expand-arrow--v1.png" : "https://img.icons8.com/ios-glyphs/512/000000/expand-arrow--v1.png"}
                    alt="Menu Icon"
                    width={30} height={30}
                    className="w-8 h-8" />
                    : <Image src={darkmode ? "https://img.icons8.com/ios-glyphs/512/FFFFFF/multiply.png" : "https://img.icons8.com/ios-glyphs/512/000000/multiply.png"}
                    width={30} height={30}
                        alt="Menu Icon"
                        className="w-8 h-8" />
                        }
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white dark:bg-black shadow-lg z-50  items-center flex flex-col space-y-4 backdrop-blur-lg
backdrop-blur-lg shadow-lg text-black dark:text-white bg-white/20 dark:bg-black/40 px-8 py-4 rounded-3xl border border-gray-200 dark:border-gray-800 md:hidden
">
                    <div className="flex flex-col space-y-6 text-center p-4">
                        <HoveredLink href="/" onClick={() => { setActive(content.NAVBAR_HOME); setIsMenuOpen(false) }} className={hover_list_effect}>
                            <div className={active === content.NAVBAR_HOME ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_HOME}</div>
                        </HoveredLink>
                        <HoveredLink href="/About" onClick={() => { setActive(content.NAVBAR_ABOUT); setIsMenuOpen(false) }} className={hover_list_effect}>
                            <div className={active === content.NAVBAR_ABOUT ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_ABOUT}</div>
                        </HoveredLink>
                        <HoveredLink href="/Education" onClick={() => { setActive(content.NAVBAR_EDUCATION); setIsMenuOpen(false) }} className={hover_list_effect}>
                            <div className={active === content.NAVBAR_EDUCATION ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_EDUCATION}</div>
                        </HoveredLink>
                        <HoveredLink href="/Project" onClick={() => { setActive(content.NAVBAR_PROJECT); setIsMenuOpen(false) }} className={hover_list_effect}>
                            <div className={active === content.NAVBAR_PROJECT ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_PROJECT}</div>
                        </HoveredLink>
                        <HoveredLink href="/Contact" onClick={() => { setActive(content.NAVBAR_CONTACT); setIsMenuOpen(false) }} className={hover_list_effect}>
                            <div className={active === content.NAVBAR_CONTACT ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_CONTACT}</div>
                        </HoveredLink>
                    </div>

                    <div className="flex items-center cursor-pointer  w-14 h-14  bg-white/90 shadow-lg backdrop-blur-lg px-3 py-3  dark:bg-black/40  rounded-full border border-gray-200 font-bold dark:border-gray-800" onClick={handleToggle}>
                        <Image src={darkmode ? "https://img.icons8.com/ios-glyphs/512/FFFFFF/moon-symbol.png" : "https://img.icons8.com/ios-glyphs/512/000000/sun.png"}
                            alt="Dark Mode Toggle"
                            className=""
                        />
                    </div>
                </div>
            )}

            {/* Download CV Button */}
            <Link href="https://drive.google.com/file/d/1-vlc9bzJdGssYrGBekaDRYjt9wf7GYOz/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-row text-sm  space-x-1 justify-center  items-center w-[100px] md:w-[200px]  bg-white/20 dark:bg-black/40 shadow-lg backdrop-blur-lg  md:py-4 py-2  rounded-full border border-gray-200  dark:border-gray-800 ">
                    <Image 
                    width={30} height={30}
                    src={darkmode ? "https://img.icons8.com/?size=100&id=83988&format=png&color=ffffff" : "https://img.icons8.com/?size=100&id=83988&format=png&color=000000"} alt="Download Icon" className="h-4 md:hidden" />
                    <div className="hidden md:block">
                        Download
                    </div>
                    <span className="font-bold text-purple-500 text-xl md:text-sm dark:text-purple-300">CV</span>
                </div>
            </Link>
        </div>
    );
}
