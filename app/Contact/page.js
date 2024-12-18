"use client";
import React from 'react';
import Content from '../data/content';
import { Spotlight } from '@/components/ui/spotlight';
import MyCSS from '../data/cssStyle';
// import emailjs from 'emailjs';
import emailjs from '@emailjs/browser';


function onSubmit(e) {
    e.preventDefault();
    const PUBLIC_KEY = 'Hj3rY19LgfRTYzbY8';
    const SERVICE_ID = 'service_54gkjrl';
    const TEMPLATE_ID = 'template_8erynom';
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            alert('Message Sent Successfully');
        }, (error) => {
            console.log(error.text);
            alert('Something went wrong!');
        });
    e.target.reset();
}

function Contact() {
    return (
        <div className="main-body head py-40 pt-[150px] md:pt-40 px-6 md:px-16">
             <Spotlight
                            className="-top-40 left-0 md:left-60 md:-top-20"
                            fill="#C39BD3"
                        />
            <h1 className={MyCSS.heading}>{Content.CONTACT_TITLE}</h1>
            <p className={MyCSS.subHeading}>
                {Content.CONTACT_SUBTITLE}
            </p>
            <div className="connect-main grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto pt-12">
                <div>
                    <form
                        className="form flex flex-col"
                        onSubmit={onSubmit}
                    >
                        <h1 className="text-4xl md:text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-b 
                  bg-gradient-to-b
                    from-neutral-900 to-neutral-700 bg-opacity-50 
                    dark:from-neutral-100 dark:to-neutral-500 dark:bg-opacity-50
                    animate-gradient-x">{Content.FORM_HEADING}</h1>
                        <p className="sub-heading text-start mb-4 text-lg font-light">{Content.FORM_SUBHEADING}</p>
                        <div className="input-item mb-4">
                            <input
                                className="input w-full text-lg p-2 dark:bg-black dark:text-white border-2 border-[rgba(116,127,242,0.3)] rounded focus:outline-none focus:ring"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="input-item mb-4">
                            <textarea
                                className="input w-full text-lg p-2 dark:bg-black dark:text-white border-2 border-[rgba(116,127,242,0.3)] rounded focus:outline-none focus:ring"
                                name="message"
                                rows="5"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <div className="input-item">
                            <button
                                type="submit"
                                className="button bg-gradient-to-r from-[rgba(116,127,242)] to-[rgba(249,93,127)] text-white px-6 py-2 rounded hover:scale-105 transition-all"
                            >
                                {Content.FORM_BUTTON_TEXT}
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <div
                        className="card connect-item flex items-center justify-between p-4 bg-[rgba(255, 255, 255, 0.44)] dark:bg-[rgba(4,4,4,0.44)] border-2 hover:scale-105 hover:shadow-lg border-purple-200 dark:border-purple-500 rounded-2xl shadow-sm mb-4 cursor-pointer transition-all"
                        onClick={() =>
                            window.open(Content.LINKEDIN_URL, "_blank")
                        }
                    >
                        <div className="connect-item-center">
                            <div className="card-title connect-title text-xl font-semibold">
                                {Content.LINKEDIN_TEXT}
                            </div>
                            <div className="card-content connect-sub-title text-sm font-light">
                                {Content.LINKEDIN_URL}
                            </div>
                        </div>

                    </div>
                    <div
                        className="card connect-item flex items-center justify-between p-4 bg-[rgba(255, 255, 255, 0.44)] dark:bg-[rgba(4,4,4,0.44)] border-2 hover:scale-105 hover:shadow-lg  border-purple-200 dark:border-purple-500 rounded-2xl shadow-sm mb-4 cursor-pointer transition-all"
                        onClick={() =>
                            window.open(Content.GITHUB_URL, "_blank")
                        }
                    >
                        <div className="connect-item-center">
                            <div className="card-title connect-title text-xl font-semibold">
                                {Content.GITHUB_TEXT}
                            </div>
                            <div className="card-content connect-sub-title text-sm font-light">
                                {Content.GITHUB_URL}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;



