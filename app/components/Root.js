"use client";
import localFont from "next/font/local";
import React from 'react'
import { NavbarDemo } from "./NavBar";
import { Jost,Inter as font } from "next/font/google";
import Footer from "./footer";

const jost = font({ subsets: ["latin"] });

function Root({ children }) {
    const [darkmode, setDarkmode] = React.useState(false);
    return (
        <html lang="en" className={darkmode ? "dark" : ""}>
            <body
                className={`antialiased ${jost.className}`}
            >
                <NavbarDemo setDarkmode={setDarkmode} darkmode={darkmode}/>
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default Root
