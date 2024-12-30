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
                fill="#c6ffc6"
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
                        <h1 className="text-4xl md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b 
                  bg-gradient-to-b
                    from-neutral-900 to-neutral-700 bg-opacity-50 
                    dark:from-neutral-100 dark:to-neutral-500 dark:bg-opacity-50
                    animate-gradient-x">{Content.FORM_HEADING}</h1>
                        <p className="sub-heading text-start mb-4 text-lg font-light">{Content.FORM_SUBHEADING}</p>
                        <div className="input-item mb-4">
                            <input
                                className="input w-full text-lg p-2 dark:bg-black dark:text-white border-2 border-[rgba(131, 242, 116, 0.3)] rounded focus:outline-none focus:ring"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="input-item mb-4">
                            <textarea
                                className="input w-full text-lg p-2 dark:bg-black dark:text-white border-2 border-[rgba(131, 242, 116, 0.3)] rounded focus:outline-none focus:ring"
                                name="message"
                                rows="5"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <div className="input-item">
                            <button
                                type="submit"
                                className="button bg-gradient-to-r from-green-400 to-green-700 dark:from-green-700 dark:to-green-400 text-white px-8 py-3  shadow-lg transform hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out"
                            >
                                {Content.FORM_BUTTON_TEXT}
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <div
                        className={Content.ABOUT_CONTAINER_BORDER_CLASSES + " mt-4 cursor-pointer hover:scale-105 transition-all"}
                        onClick={() =>
                            window.open(Content.LINKEDIN_URL, "_blank")
                        }
                    >

                        <div className="shadow-[0_0px_60px_10px_#34C759] mb-5 h-0"></div>

                        <div className="connect-item-center">
                            <div className="card-title connect-title text-3xl ">
                                {Content.LINKEDIN_TEXT}
                            </div>
                            <div className="card-content connect-sub-title text-sm font-light">
                                {Content.LINKEDIN_URL}
                            </div>
                        </div>

                    </div>
                    <div
                        className={Content.ABOUT_CONTAINER_BORDER_CLASSES + " mt-4 cursor-pointer hover:scale-105 transition-all"}
                        onClick={() =>
                            window.open(Content.GITHUB_URL, "_blank")
                        }
                    >

                        <div className="shadow-[0_0px_60px_10px_#34C759] mb-5 h-0"></div>

                        <div className="connect-item-center">
                            <div className="card-title connect-title text-3xl ">
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



