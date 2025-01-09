"use client";
import localFont from "next/font/local";
import React from 'react'
import { NavbarDemo } from "./NavBar";
import Footer from "./footer";
import Cursor from "./Cursor";
import Head from "next/head";
import { FontStyle } from "../data/fontStyle";


function Root({ children }) {
    const [darkmode, setDarkmode] = React.useState(false);
    return (
        <html lang="en" className={darkmode ? "dark" : "a"}>
            <Head>
                <title>DevY_</title>
            </Head>
            <body
                className={`antialiased ${FontStyle.montserrat} body`}
            >
                <Cursor />
                <NavbarDemo setDarkmode={setDarkmode} darkmode={darkmode} />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default Root
