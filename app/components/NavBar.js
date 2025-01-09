"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
import '../globalicons.css';
import content from "../data/content";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import {FontStyle} from "../data/fontStyle";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-0" />
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
        <div className={cn("fixed  flex items-center px-4 mx-auto z-[50] w-full justify-between", className)}>
            {/* Logo Section */}
            <HoveredLink href="/" onClick={() => setActive(content.NAVBAR_HOME)} className={hover_list_effect}>
                <div className={`flex text-xl flex-row space-x-8 justify-center text-black md:px-6 px-2 dark:text-white  ${FontStyle.jetbrains}  md:py-4 py-2    font-bold  text-gradient  bg-black/20 backdrop-blur-md shadow-black/50 rounded-full`}>
                    {content.PROJECT_TITLE}
                </div>
            </HoveredLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:flex-row md:items-center backdrop-blur rounded-full bg-white/30 dark:bg-black/30">
                <div className="flex items-center cursor-pointer  w-14 h-14     px-3 py-3      font-bold " onClick={handleToggle}>
                    <Image src={darkmode ? "https://img.icons8.com/ios-glyphs/512/FFFFFF/moon-symbol.png"
                        : "https://img.icons8.com/ios-glyphs/512/000000/sun.png"}
                        alt="Dark Mode Toggle" width={30} height={30}
                        className=""
                    />
                </div>
                <div className="flex flex-row space-x-8 items-center justify-center   text-black dark:text-white   px-4 py-4   ">
                    <HoveredLink href="/About" onClick={() => { setActive(content.NAVBAR_ABOUT); setIsMenuOpen(false) }} className={hover_list_effect}>
                        <div className={active === content.NAVBAR_ABOUT ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_ABOUT}</div>
                    </HoveredLink>
                    <HoveredLink href="/Education" onClick={() => { setActive(content.NAVBAR_EDUCATION); setIsMenuOpen(false) }} className={hover_list_effect}>
                        <div className={active === content.NAVBAR_EDUCATION ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_EDUCATION}</div>
                    </HoveredLink>
                    <HoveredLink href="/Experience" onClick={() => { setActive(content.NAVBAR_EXPERIENCE); setIsMenuOpen(false) }} className={hover_list_effect}>
                        <div className={active === content.NAVBAR_EXPERIENCE ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_EXPERIENCE}</div>
                    </HoveredLink>
                    <HoveredLink href="/Project" onClick={() => { setActive(content.NAVBAR_PROJECT); setIsMenuOpen(false) }} className={hover_list_effect}>
                        <div className={active === content.NAVBAR_PROJECT ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_PROJECT}</div>
                    </HoveredLink>
                    <HoveredLink href="/Contact" onClick={() => { setActive(content.NAVBAR_CONTACT); setIsMenuOpen(false) }} className={hover_list_effect}>
                        <div className={active === content.NAVBAR_CONTACT ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_CONTACT}</div>
                    </HoveredLink>
                </div>

                {/* Dark Mode Toggle */}

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
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white/70 dark:bg-black/70 z-50 items-center flex flex-col space-y-4 backdrop-blur-sm  text-black dark:text-white   px-8 py-4 rounded-3xl   md:hidden ">
                    <div className="flex flex-col space-y-6 text-center p-4">
                        <HoveredLink href="/About" onClick={() => { setActive(content.NAVBAR_ABOUT); setIsMenuOpen(false) }} className={hover_list_effect}>
                            <div className={active === content.NAVBAR_ABOUT ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_ABOUT}</div>
                        </HoveredLink>
                        <HoveredLink href="/Education" onClick={() => { setActive(content.NAVBAR_EDUCATION); setIsMenuOpen(false) }} className={hover_list_effect}>
                            <div className={active === content.NAVBAR_EDUCATION ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_EDUCATION}</div>
                        </HoveredLink>
                        <HoveredLink href="/Experience" onClick={() => { setActive(content.NAVBAR_EXPERIENCE); setIsMenuOpen(false) }} className={hover_list_effect}>
                            <div className={active === content.NAVBAR_EXPERIENCE ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_EXPERIENCE}</div>
                        </HoveredLink>
                        <HoveredLink href="/Project" onClick={() => { setActive(content.NAVBAR_PROJECT); setIsMenuOpen(false) }} className={hover_list_effect}>
                            <div className={active === content.NAVBAR_PROJECT ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_PROJECT}</div>
                        </HoveredLink>
                        <HoveredLink href="/Contact" onClick={() => { setActive(content.NAVBAR_CONTACT); setIsMenuOpen(false) }} className={hover_list_effect}>
                            <div className={active === content.NAVBAR_CONTACT ? "text-highlight text-gradient underline" : ""}>{content.NAVBAR_CONTACT}</div>
                        </HoveredLink>
                    </div>

                    <div className="flex items-center cursor-pointer  w-14 h-14    px-3 py-3      font-bold " onClick={handleToggle}>
                        <Image src={darkmode ? "https://img.icons8.com/ios-glyphs/512/FFFFFF/moon-symbol.png" : "https://img.icons8.com/ios-glyphs/512/000000/sun.png"}
                            alt="Dark Mode Toggle"
                            width={30} height={30}
                            className=""
                        />
                    </div>
                </div>
            )}

            {/* Download CV Button */}

        </div>
    );
}


