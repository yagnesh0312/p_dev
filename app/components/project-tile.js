import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import projects from "../data/Projects";

export default function ProjectTile({ id }) {
    // Safely access the project with the given id
    let s = projects[id];

    // Check if s is defined and has an "image" property
    if (!s || !s["image"]) {
        console.error("Project not found or missing 'image' property for id:", id);
        return <p>Error: Project not found or missing images.</p>;  // Optional fallback UI
    }

    // console.log(s);

    let data = [];
    if (s.image.length < 4) {
        s["image"].forEach((i) => {
            data.push({
                quote: "",
                name: s.name,
                designation: s.description,
                src: i,
            });
        });
    } else {

        for (let i = 0; i < 4; i++) {
            data.push({
                quote: "",
                name: s.name,
                designation: s.description,
                src: s["image"][i],
            });
        }
    }

    return (
        <div className="flex flex-col py-5 mx-4 md:mx-14  rounded-2xl px-5">
            <AnimatedTestimonials testimonials={data} url={s.URL}/>
            {/* <div className=" mt-4  flex flex-row justify-center items-center gap-4">
                <a href={s.URL} target="_blank" rel="noreferrer" className="inline-block">
                    <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 to-pink-500 group-hover:from-green-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span class="relative px-5 py-2.5 transition-all flex items-center gap-2 hover:gap-20 ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Read More
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                    </button>
                </a>
            </div> */}
        </div>);
}
