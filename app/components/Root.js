"use client";
import localFont from "next/font/local";
import React from 'react'
import { NavbarDemo } from "./NavBar";
import { Montserrat } from "next/font/google";
import Footer from "./footer";
import Cursor from "./Cursor";
import Head from "next/head";

const jost = Montserrat({
    subsets: ["latin"],
    // weight: ["400", "700"],
});
function Root({ children }) {
    const [darkmode, setDarkmode] = React.useState(false);
    return (
        <html lang="en" className={darkmode ? "dark" : "a"}>
            <Head>
                <title>DevY_</title>
            </Head>
            <body
                className={`antialiased ${jost.className} body`}
            >
                <Cursor/>
                <NavbarDemo setDarkmode={setDarkmode} darkmode={darkmode} />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default Root
