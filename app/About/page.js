import { Spotlight } from "@/components/ui/spotlight";
import Content from "../data/content";
import MyCSS from "../data/cssStyle";
import { FontStyle } from "../data/fontStyle";
function About() {
    const container_border_classes = Content.ABOUT_CONTAINER_BORDER_CLASSES;
    return (
        <div className="min-h-screen body-gradient from-gray-900 to-black text-white py-40 px-6 md:px-16 ">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h1 className={MyCSS.heading}>{Content.ABOUT_HEADER_TITLE}</h1>
                <p className={MyCSS.subHeading}>

                    {Content.ABOUT_HEADER_SUBTITLE}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                <div className="flex flex-col items-center justify-center p-6 rounded-3xl">
                    <h1 className="text-6xl font-bold text-gradient">{Content.ABOUT_STATS_SECTION_TITLE_1}</h1>
                    <h4 className="text-lg dark:text-gray-300 text-gray-800  mt-2">{Content.ABOUT_STATS_SECTION_SUBTITLE_1}</h4>
                </div>
                <div className="flex flex-col items-center justify-center p-6  rounded-3xl">
                    <h1 className="text-6xl font-bold text-gradient">{Content.ABOUT_STATS_SECTION_TITLE_2}</h1>
                    <h4 className="text-lg dark:text-gray-300 text-gray-800 mt-2">{Content.ABOUT_STATS_SECTION_SUBTITLE_2}</h4>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className={container_border_classes}>
                    <div className="shadow-[0_0px_60px_10px_#34C759] mb-5 h-0"></div>
                    <h3 className={"text-3xl md:text-5xl  mb-4 text-black dark:text-white "+FontStyle.montserrat}>{Content.ABOUT_INTRODUCTION_TITLE}</h3>
                    <p className="dark:text-gray-300 text-gray-800">
                        {Content.ABOUT_INTRODUCTION_CONTENT}
                    </p>
                </div>

                <div className={container_border_classes}>
                <div className="shadow-[0_0px_60px_10px_#34C759] mb-5 h-0"></div>

                    <h3 className={"text-3xl md:text-5xl  mb-4 text-black dark:text-white "+FontStyle.montserrat}>{Content.ABOUT_BACKGROUND_TITLE}</h3>
                    <ul className="dark:text-gray-300 text-gray-800 list-disc list-inside space-y-1">
                        {Content.ABOUT_BACKGROUND_CONTENT.map((item, index) => (
                            <li key={index} className="animate-scale-in">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={container_border_classes}>
                    <div className="shadow-[0_0px_60px_10px_#34C759] mb-5 h-0"></div>

                    <h3 className={"text-3xl md:text-5xl  mb-4 text-black dark:text-white "+FontStyle.montserrat}>{Content.ABOUT_AIMS_TITLE}</h3>
                    <ul className="dark:text-gray-300 text-gray-800 list-disc list-inside space-y-1">
                        {Content.ABOUT_AIMS_CONTENT.map((aim, index) => (
                            <li key={index} className="animate-scale-in">{aim}</li>
                        ))}
                    </ul>
                </div>
                <div className={container_border_classes}>
                    <div className="shadow-[0_0px_60px_10px_#34C759] mb-5 h-0"></div>

                    <h3 className={"text-3xl md:text-5xl  mb-4 text-black dark:text-white "+FontStyle.montserrat}>{Content.ABOUT_PASSIONS_TITLE}</h3>
                    <ul className="dark:text-gray-300 text-gray-800 list-disc list-inside space-y-1">
                        {Content.ABOUT_PASSIONS_CONTENT.map((passion, index) => (
                            <li key={index} className="animate-scale-in">{passion}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default About;

