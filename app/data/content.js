// export function degreeCard(degree, university, year, marks, description) {
//     return (

import { FontStyle, jetbrains } from "./fontStyle"

//         <div className='text-start'>
//             <h1 className='text-2xl font-semibold text-gray-900 dark:text-white'>{degree}</h1>
//             <p className='text-lg text-gray-700 dark:text-gray-300'>{university}</p>
//             <p className='mt-2 text-base text-gray-600 dark:text-gray-400'>{description}</p>
//             <p className='mt-4 text-sm text-gray-500 dark:text-gray-500'>Completion Year: <span className='font-medium'>{year}</span></p>
//             <p className='text-3xl text-white'>CGPA: <span className='font-medium'>{marks}</span></p>
//             <div className="my-4 border-t border-gray-300 dark:border-gray-600"></div>
//         </div>
//     );
// }
export default class Content {
    //TODO HOME 
    static PROJECT_TITLE = "DOY_"
    static MEANS_NAME = "DevOps Engineer Yagnesh"
    static OWNER_NAME = "Yagnesh Jariwala"
    static QUOTE = "automate. optimize. innovate."
    static DESCRIPTION = "A dedicated DevOps engineer with expertise in automating workflows, optimizing infrastructure, and ensuring seamless CI/CD pipelines. I'm skilled in leveraging cloud platforms and containerization tools to enhance productivity and scalability."
    static GITHUB_TEXT = "Explore my DevOps Repositories"


    static JAVASCRIPT_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    static DOCKER_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    static KUBERNETES_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
    static AWS_ICON = "https://www.cdnlogo.com/logos/a/19/aws.svg"
    static GITHUB_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    static MONGODB_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    static PYTHON_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    static TERRAFORM_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg"
    static ANSIBLE_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg"


    static FIREBASE_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
    static NEXTJS_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    static JAVA_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    static PHP_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"





    // TODO EDUCATION
    static EDUCATION_TITLE = "Academic Background"
    static EDUCATION_SUBTITLE = "Find out the phases of my educational experience in academia."
    static EDUCATION_DATA = [
        {
            title: "2025",
            content: (
                degreeCard("Master of Computer Application", "Institute of Technology, Nirma University", "2025", "9.20", "Focused on advanced computing and DevOps practices to streamline workflows and solve real-world challenges.")

            ),
        },
        {
            title: "2023",
            content: (
                degreeCard("Bachelor of Computer Application", "Veer Narmad South Gujarat University, Surat", "2023", "9.29", "Built a strong foundation in computer science with a focus on automation and cloud technologies.")

            ),
        },
        {
            title: "2020",
            content: (
                degreeCard("HSC", "Gurukul Vidhyapith N V Dhamanwala School, Surat", "2020", "68.8 %", "Developed analytical skills that set the groundwork for my technical journey.")
            ),
        },
        {
            title: "2018",
            content: (
                degreeCard("SSC", "Gurukul Vidhyapith N V Dhamanwala School, Surat", "2018", "57.8 %", "Took my first step toward a career in technology.")
            ),
        }

    ];




    //TODO ABOUT

    static ABOUT_INTRODUCTION_CONTENT = "Hello! I'm a dedicated DevOps engineer passionate about building robust infrastructure and streamlining deployment processes. Currently, I'm studying advanced software programming and cloud computing at Nirma University.";
    static ABOUT_BACKGROUND_CONTENT = [
        "Name: Yagnesh Jariwala",
        "Birthday: December 3rd, 2002",
        "Gender: Male",
        "Location: Gujarat, India",
        "Languages: Hindi & Gujarati",
    ];
    static ABOUT_AIMS_CONTENT = [
        "Mastering Cloud Platforms",
        "Infrastructure as Code (IaC)",
        "Enhancing CI/CD Pipelines",
    ];
    static ABOUT_PASSIONS_CONTENT = [
        "Automation",
        "Learning New Tools",
        "Problem Solving",
        "Collaborative Work",
    ];
    static ABOUT_STATS_SECTION_TITLE_1 = "10+";
    static ABOUT_STATS_SECTION_TITLE_2 = "15+";
    static ABOUT_STATS_SECTION_SUBTITLE_1 = "Infrastructure Projects Managed";
    static ABOUT_STATS_SECTION_SUBTITLE_2 = "DevOps Tools Mastered";
    static ABOUT_INTRODUCTION_TITLE = "Introduction";
    static ABOUT_BACKGROUND_TITLE = "Background";
    static ABOUT_AIMS_TITLE = "Aims";
    static ABOUT_PASSIONS_TITLE = "Passions";
    static ABOUT_HEADER_TITLE = "Who I Am ?";
    static ABOUT_HEADER_SUBTITLE = "Feel free to reach out for any DevOps-related inquiries or collaborations.";
    static ABOUT_CONTAINER_BORDER_CLASSES = "bg-white dark:bg-black p-6 pt-0 overflow-hidden rounded-1xl shadow-xl transition duration-150 ease-in-out block-card "+FontStyle.jetbrains;
    static INSTAGRAM_URL = "https://www.instagram.com/_yagnesh_jariwala_/";

    //TODO PROJECT PAGE

    static PROJECT_HEADER_TITLE = "Latest Innovations";
    static PROJECT_HEADER_SUBTITLE = "These are the tools and solutions I've developed.";


    //TODO CONTACT PAGE
    static CONTACT_TITLE = "Connect with Me!";
    static CONTACT_SUBTITLE = "Feel free to reach out for any inquiries or collaborations.";
    static FORM_HEADING = "Let's Collaborate";
    static FORM_SUBHEADING = "The user is asked to provide their  email, and message.";
    static FORM_BUTTON_TEXT = "SUBMIT";
    static LINKEDIN_URL = "https://www.linkedin.com/in/yagnesh-jariwala-70273128b/";
    static GITHUB_URL = "https://github.com/yagnesh0312";
    static GITHUB_TEXT = "GitHub";
    static LINKEDIN_TEXT = "LinkedIn";

    //TODO EXPERIENCE PAGE
    static EXPERIENCE_TITLE = "My Professional Journey";
    static EXPERIENCE_SUBTITLE = "My experience in automating, optimizing, and scaling systems.";
    static EXPERIENCE_DATA = [
       
        {
            title: "DevOps Intern",
            company: "LeafDrive PVT. LTD.",
            place: "Surat, Gujarat, India",
            duration: "January 2023 - May 2023",
          },
          {
            title: "Junior DevOps Engineer",
            company: "Inventivy Software Pvt. Ltd.",
            place: "Ahmedabad, Gujarat, India",
            duration: "June 2023 - Present",
          },
      
    ];

    //TODO footer
    static FOOTER_TEXT = "Version 1.0.0 | Yagnesh Jariwala";
    static FOOTER_QUOTE = "Automate. Optimize. Scale. Repeat."


    //TODO NAVBAR
    static NAVBAR_HOME = "Home";
    static NAVBAR_ABOUT = "About Me";
    static NAVBAR_PROJECT = "Projects";
    static NAVBAR_EXPERIENCE = "Experience";
    static NAVBAR_CONTACT = "Contact Me";
    static NAVBAR_EDUCATION = "Education";
}


export function degreeCard(degree, university, year, marks, description) {
    return (
        <div className='text-start'>
            <h1 className='text-4xl text-gray-900 dark:text-white'>{degree}</h1>
            <p className='text-lg text-gray-700 dark:text-gray-300'>{university}</p>
            <p className='mt-2 text-base text-gray-600 dark:text-gray-400'>{description}</p>
            <p className='mt-4 text-sm text-gray-500 dark:text-gray-500'>Completion Year: <span className='font-medium'>{year}</span></p>
            <p className='text-3xl dark:text-white dark:text-white text-gradient'>CGPA: <span className='font-medium'>{marks}</span></p>
            {/* <div className="my-4 border-t border-gray-300 dark:border-gray-600"></div> */}
        </div>
    );
}
// export function degreeCard(degree, university, year, marks, description) {
//     return (
//
//         <div className='text-start'>
//             <h1 className='text-2xl font-semibold text-gray-900 dark:text-white'>{degree}</h1>
//             <p className='text-lg text-gray-700 dark:text-gray-300'>{university}</p>
//             <p className='mt-2 text-base text-gray-600 dark:text-gray-400'>{description}</p>
//             <p className='mt-4 text-sm text-gray-500 dark:text-gray-500'>Completion Year: <span className='font-medium'>{year}</span></p>
//             <p className='text-3xl text-white'>CGPA: <span className='font-medium'>{marks}</span></p>
//             <div className="my-4 border-t border-gray-300 dark:border-gray-600"></div>
//         </div>
//     );
// }
// export default class Content {
//     //TODO HOME 
//     static PROJECT_TITLE = "P_DEV"
//     static OWNER_NAME = "Prexa Kanabar"
//     static QUOTE = "coder. creator. collaborator."
//     static DESCRIPTION = "A dedicated Python developer with hands-on experience in building robust applications and solving challenging problems. I enjoy creating solutions that are clean, efficient, and impactful."
//     static GITHUB_TEXT = "Check out my Github"

//     static JAVASCRIPT_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
//     static FLUTTER_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
//     static REACT_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
//     static NODEJS_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
//     static GITHUB_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
//     static MONGODB_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
//     static PYTHON_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
//     static C_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
//     static HTML5_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
//     static CSS3_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    
//     static FIREBASE_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
//     static NEXTJS_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
//     static JAVA_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
//     static PHP_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
//     // TODO EDUCATION
//     static EDUCATION_TITLE = "Education"
//     static EDUCATION_SUBTITLE = "Discover the milestones of my academic journey."
//     static EDUCATION_DATA = [
//         {
//             title: "2025",
//             content: (
//                 degreeCard("Master of Computer Application", "Nirma University", "2025", "9.3", "Currently pursuing advanced studies in computing and software development, focusing on building real-world projects and honing my technical expertise.")
//             ),
//         },
//         {
//             title: "2023",
//             content: (
//                 degreeCard("Bachelor of Computer Application (BCA)", "Saurashtra University", "2023", "8.9", "Completed my bachelor's degree with a strong foundation in programming and software development.")
//             ),
//         },
//         {
//             title: "2020",
//             content: (
//                 degreeCard("HSC", "St. Francis School Jetpur", "2020", "78%", "Focused on science and mathematics, preparing for my future endeavors in the tech world.")
//             ),
//         },
//         {
//             title: "2018",
//             content: (
//                 degreeCard("SSC", "St. Francis School Jetpur", "2018", "74%", "Took the first step in my academic journey, building the groundwork for future success.")
//             ),
//         }
//     ]

//     //TODO ABOUT
//     static ABOUT_INTRODUCTION_CONTENT = "Hello! I'm a passionate Python developer dedicated to crafting efficient and innovative software solutions. Currently pursuing my MCA at Nirma University, I aim to combine theoretical knowledge with real-world application."
//     static ABOUT_BACKGROUND_CONTENT = ["Name: Prexa Kanabar", "Birthday: December 26th, 2002", "Gender: Female", "Location: Ahmedabad, India", "Languages: English, Gujarati, Hindi"];
//     static ABOUT_AIMS_CONTENT = [
//         "🎯 Enhancing Python expertise",
//         "💡 Building scalable solutions",
//         "💼 Contributing to impactful projects",
//     ];
//     static ABOUT_PASSIONS_CONTENT = [
//         "🖥️ Coding",
//         "🎮 Gaming",
//         "📊 Data Analysis",
//         "🎵 Music",
//     ];
//     static ABOUT_STATS_SECTION_TITLE_1 = "5+";
//     static ABOUT_STATS_SECTION_TITLE_2 = "10+";
//     static ABOUT_STATS_SECTION_SUBTITLE_1 = "Projects Developed";
//     static ABOUT_STATS_SECTION_SUBTITLE_2 = "Tools & Technologies Used";
//     static ABOUT_INTRODUCTION_TITLE = "Introduction";
//     static ABOUT_BACKGROUND_TITLE = "Background";
//     static ABOUT_AIMS_TITLE = "Goals";
//     static ABOUT_PASSIONS_TITLE = "Passions";
//     static ABOUT_HEADER_TITLE = "About Me";
//     static ABOUT_HEADER_SUBTITLE = "Feel free to connect or collaborate for new opportunities.";
//     static ABOUT_CONTAINER_BORDER_CLASSES = "bg-white dark:bg-black border border-1 border-green-200 dark:border-green-500 p-6 rounded-3xl shadow-xl transition duration-150 ease-in-out block";

//     //TODO PROJECT PAGE
//     static PROJECT_HEADER_TITLE = "My Creations";
//     static PROJECT_HEADER_SUBTITLE = "Explore some of the projects I have developed.";

//     //TODO CONTACT PAGE
//     static CONTACT_TITLE = "Get in Touch";
//     static CONTACT_SUBTITLE = "Feel free to reach out for any inquiries, collaborations, or opportunities.";
//     static FORM_HEADING = "Contact Me";
//     static FORM_SUBHEADING = "Please provide your name, email, subject, and message below.";
//     static FORM_BUTTON_TEXT = "SEND MESSAGE";
//     static LINKEDIN_URL = "https://www.linkedin.com/in/prexa-kanabar-b71789253/";
//     static INSTAGRAM_URL = "https://www.instagram.com/prekss___/";
//     static GITHUB_URL = "https://github.com/prexakanabar";
//     static GITHUB_TEXT = "GitHub";
//     static LINKEDIN_TEXT = "LinkedIn";

//     //TODO footer
//     static FOOTER_TEXT = "V1.0.0 | Prexa Kanabar";
//     static FOOTER_QUOTE = "Code. Create. Innovate. Repeat.";

//     //TODO NAVBAR
//     static NAVBAR_HOME = "Home";
//     static NAVBAR_ABOUT = "About Me";
//     static NAVBAR_PROJECT = "Projects";
//     static NAVBAR_CONTACT = "Contact Me";
//     static NAVBAR_EDUCATION = "Education";
// }
