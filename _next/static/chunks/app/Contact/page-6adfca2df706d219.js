(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{9585:(e,t,r)=>{Promise.resolve().then(r.bind(r,6019))},6019:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var i=r(5155);r(2115);var n=r(5933),a=r(8368);let o=e=>{let{className:t,fill:r}=e;return(0,i.jsxs)("svg",{className:(0,a.cn)("animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3787 2842",fill:"none",children:[(0,i.jsx)("g",{filter:"url(#filter)",children:(0,i.jsx)("ellipse",{cx:"1924.71",cy:"273.501",rx:"1924.71",ry:"273.501",transform:"matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)",fill:r||"white",fillOpacity:"0.21"})}),(0,i.jsx)("defs",{children:(0,i.jsxs)("filter",{id:"filter",x:"0.860352",y:"0.838989",width:"3785.16",height:"2840.26",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"151",result:"effect1_foregroundBlur_1065_8"})]})})]})};class s{}s.heading="text-4xl md:text-4xl font-bold text-center\n        bg-clip-text text-transparent\n        bg-gradient-to-b\n        from-neutral-900 to-neutral-700\n        bg-opacity-50\n        dark:from-neutral-100 dark:to-neutral-500\n        dark:bg-opacity-50\n        animate-gradient-x",s.subHeading="sub-heading text-black dark:text-white text-xl  text-center";class l{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let c={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},d=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},h=async(e,t,r={})=>{let i=await fetch(c.origin+e,{method:"POST",headers:r,body:t}),n=await i.text(),a=new l(i.status,n);if(i.ok)return a;throw a},g=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},m=e=>e.webdriver||!e.languages||0===e.languages.length,p=()=>new l(451,"Unavailable For Headless Browser"),u=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},T=e=>!e.list?.length||!e.watchVariable,b=(e,t)=>e instanceof FormData?e.get(t):e[t],x=(e,t)=>{if(T(e))return!1;u(e.list,e.watchVariable);let r=b(t,e.watchVariable);return"string"==typeof r&&e.list.includes(r)},v=()=>new l(403,"Forbidden"),f=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},N=async(e,t,r)=>{let i=Number(await r.get(e)||0);return t-Date.now()+i},_=async(e,t,r)=>{if(!t.throttle||!r)return!1;f(t.throttle,t.id);let i=t.id||e;return await N(i,t.throttle,r)>0||(await r.set(i,Date.now().toString()),!1)},I=()=>new l(429,"Too Many Requests"),A=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},E=e=>"string"==typeof e?document.querySelector(e):e,O={sendForm:async(e,t,r,i)=>{let n=d(i),a=n.publicKey||c.publicKey,o=n.blockHeadless||c.blockHeadless,s=c.storageProvider||n.storageProvider,l={...c.blockList,...n.blockList},u={...c.limitRate,...n.limitRate};if(o&&m(navigator))return Promise.reject(p());let T=E(r);g(a,e,t),A(T);let b=new FormData(T);return x(l,b)?Promise.reject(v()):await _(location.pathname,u,s)?Promise.reject(I()):(b.append("lib_version","4.4.1"),b.append("service_id",e),b.append("template_id",t),b.append("user_id",a),h("/api/v1.0/email/send-form",b))}};function j(e){e.preventDefault(),O.sendForm("service_54gkjrl","template_8erynom",e.target,"Hj3rY19LgfRTYzbY8").then(e=>{console.log(e.text),alert("Message Sent Successfully")},e=>{console.log(e.text),alert("Something went wrong!")}),e.target.reset()}let w=function(){return(0,i.jsxs)("div",{className:"main-body head py-40 pt-[150px] md:pt-40 px-6 md:px-16",children:[(0,i.jsx)(o,{className:"-top-40 left-0 md:left-60 md:-top-20",fill:"#C39BD3"}),(0,i.jsx)("h1",{className:s.heading,children:n.A.CONTACT_TITLE}),(0,i.jsx)("p",{className:s.subHeading,children:n.A.CONTACT_SUBTITLE}),(0,i.jsxs)("div",{className:"connect-main grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto pt-12",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("form",{className:"form flex flex-col",onSubmit:j,children:[(0,i.jsx)("h1",{className:"text-4xl md:text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-b    bg-gradient-to-b   from-neutral-900 to-neutral-700 bg-opacity-50    dark:from-neutral-100 dark:to-neutral-500 dark:bg-opacity-50   animate-gradient-x",children:n.A.FORM_HEADING}),(0,i.jsx)("p",{className:"sub-heading text-start mb-4 text-lg font-light",children:n.A.FORM_SUBHEADING}),(0,i.jsx)("div",{className:"input-item mb-4",children:(0,i.jsx)("input",{className:"input w-full text-lg p-2 dark:bg-black dark:text-white border-2 border-[rgba(116,127,242,0.3)] rounded focus:outline-none focus:ring",type:"email",name:"email",placeholder:"Enter your email"})}),(0,i.jsx)("div",{className:"input-item mb-4",children:(0,i.jsx)("textarea",{className:"input w-full text-lg p-2 dark:bg-black dark:text-white border-2 border-[rgba(116,127,242,0.3)] rounded focus:outline-none focus:ring",name:"message",rows:"5",placeholder:"Enter your message"})}),(0,i.jsx)("div",{className:"input-item",children:(0,i.jsx)("button",{type:"submit",className:"button bg-gradient-to-r from-[rgba(116,127,242)] to-[rgba(249,93,127)] text-white px-6 py-2 rounded hover:scale-105 transition-all",children:n.A.FORM_BUTTON_TEXT})})]})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"card connect-item flex items-center justify-between p-4 bg-[rgba(255, 255, 255, 0.44)] dark:bg-[rgba(4,4,4,0.44)] border-2 hover:scale-105 hover:shadow-lg border-purple-200 dark:border-purple-500 rounded-2xl shadow-sm mb-4 cursor-pointer transition-all",onClick:()=>window.open(n.A.LINKEDIN_URL,"_blank"),children:(0,i.jsxs)("div",{className:"connect-item-center",children:[(0,i.jsx)("div",{className:"card-title connect-title text-xl font-semibold",children:n.A.LINKEDIN_TEXT}),(0,i.jsx)("div",{className:"card-content connect-sub-title text-sm font-light",children:n.A.LINKEDIN_URL})]})}),(0,i.jsx)("div",{className:"card connect-item flex items-center justify-between p-4 bg-[rgba(255, 255, 255, 0.44)] dark:bg-[rgba(4,4,4,0.44)] border-2 hover:scale-105 hover:shadow-lg  border-purple-200 dark:border-purple-500 rounded-2xl shadow-sm mb-4 cursor-pointer transition-all",onClick:()=>window.open(n.A.GITHUB_URL,"_blank"),children:(0,i.jsxs)("div",{className:"connect-item-center",children:[(0,i.jsx)("div",{className:"card-title connect-title text-xl font-semibold",children:n.A.GITHUB_TEXT}),(0,i.jsx)("div",{className:"card-content connect-sub-title text-sm font-light",children:n.A.GITHUB_URL})]})})]})]})]})}},5933:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var i=r(5155);function n(e,t,r,n,a){return(0,i.jsxs)("div",{className:"text-start",children:[(0,i.jsx)("h1",{className:"text-2xl font-semibold text-gray-900 dark:text-white",children:e}),(0,i.jsx)("p",{className:"text-lg text-gray-700 dark:text-gray-300",children:t}),(0,i.jsx)("p",{className:"mt-2 text-base text-gray-600 dark:text-gray-400",children:a}),(0,i.jsxs)("p",{className:"mt-4 text-sm text-gray-500 dark:text-gray-500",children:["Completion Year: ",(0,i.jsx)("span",{className:"font-medium",children:r})]}),(0,i.jsxs)("p",{className:"text-3xl dark:text-white dark:text-white",children:["CGPA: ",(0,i.jsx)("span",{className:"font-medium",children:n})]}),(0,i.jsx)("div",{className:"my-4 border-t border-gray-300 dark:border-gray-600"})]})}class a{}a.PROJECT_TITLE="P_DEV",a.OWNER_NAME="Prexa Kanabar",a.QUOTE="coder. creator. collaborator.",a.DESCRIPTION="A dedicated Python developer with hands-on experience in building robust applications and solving challenging problems. I enjoy creating solutions that are clean, efficient, and impactful.",a.GITHUB_TEXT="Check out my Github",a.JAVASCRIPT_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",a.FLUTTER_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",a.REACT_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",a.NODEJS_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",a.GITHUB_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",a.MONGODB_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",a.PYTHON_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",a.C_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",a.HTML5_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",a.CSS3_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",a.FIREBASE_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",a.NEXTJS_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",a.JAVA_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",a.PHP_ICON="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",a.EDUCATION_TITLE="Education",a.EDUCATION_SUBTITLE="Discover the milestones of my academic journey.",a.EDUCATION_DATA=[{title:"2025",content:n("Master of Computer Application","Nirma University","2025","9.3","Currently pursuing advanced studies in computing and software development, focusing on building real-world projects and honing my technical expertise.")},{title:"2023",content:n("Bachelor of Computer Application (BCA)","Saurashtra University","2023","8.9","Completed my bachelor's degree with a strong foundation in programming and software development.")},{title:"2020",content:n("HSC","St. Francis School Jetpur","2020","78%","Focused on science and mathematics, preparing for my future endeavors in the tech world.")},{title:"2018",content:n("SSC","St. Francis School Jetpur","2018","74%","Took the first step in my academic journey, building the groundwork for future success.")}],a.ABOUT_INTRODUCTION_CONTENT="Hello! I'm a passionate Python developer dedicated to crafting efficient and innovative software solutions. Currently pursuing my MCA at Nirma University, I aim to combine theoretical knowledge with real-world application.",a.ABOUT_BACKGROUND_CONTENT=["Name: Prexa Kanabar","Birthday: December 26th, 2002","Gender: Female","Location: Ahmedabad, India","Languages: English, Gujarati, Hindi"],a.ABOUT_AIMS_CONTENT=["\uD83C\uDFAF Enhancing Python expertise","\uD83D\uDCA1 Building scalable solutions","\uD83D\uDCBC Contributing to impactful projects"],a.ABOUT_PASSIONS_CONTENT=["\uD83D\uDDA5️ Coding","\uD83C\uDFAE Gaming","\uD83D\uDCCA Data Analysis","\uD83C\uDFB5 Music"],a.ABOUT_STATS_SECTION_TITLE_1="5+",a.ABOUT_STATS_SECTION_TITLE_2="10+",a.ABOUT_STATS_SECTION_SUBTITLE_1="Projects Developed",a.ABOUT_STATS_SECTION_SUBTITLE_2="Tools & Technologies Used",a.ABOUT_INTRODUCTION_TITLE="Introduction",a.ABOUT_BACKGROUND_TITLE="Background",a.ABOUT_AIMS_TITLE="Goals",a.ABOUT_PASSIONS_TITLE="Passions",a.ABOUT_HEADER_TITLE="About Me",a.ABOUT_HEADER_SUBTITLE="Feel free to connect or collaborate for new opportunities.",a.ABOUT_CONTAINER_BORDER_CLASSES="bg-white dark:bg-black border border-1 border-purple-200 dark:border-purple-500 p-6 rounded-3xl shadow-xl transition duration-150 ease-in-out block",a.PROJECT_HEADER_TITLE="My Creations",a.PROJECT_HEADER_SUBTITLE="Explore some of the projects I have developed.",a.CONTACT_TITLE="Get in Touch",a.CONTACT_SUBTITLE="Feel free to reach out for any inquiries, collaborations, or opportunities.",a.FORM_HEADING="Contact Me",a.FORM_SUBHEADING="Please provide your name, email, subject, and message below.",a.FORM_BUTTON_TEXT="SEND MESSAGE",a.LINKEDIN_URL="https://www.linkedin.com/in/prexa-kanabar-b71789253/",a.INSTAGRAM_URL="https://www.instagram.com/prekss___/",a.GITHUB_URL="https://github.com/prexakanabar",a.GITHUB_TEXT="GitHub",a.LINKEDIN_TEXT="LinkedIn",a.FOOTER_TEXT="V1.0.0 | Prexa Kanabar",a.FOOTER_QUOTE="Code. Create. Innovate. Repeat.",a.NAVBAR_HOME="Home",a.NAVBAR_ABOUT="About Me",a.NAVBAR_PROJECT="Projects",a.NAVBAR_CONTACT="Contact Me",a.NAVBAR_EDUCATION="Education"},8368:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var i=r(3463),n=r(9795);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,i.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[181,441,517,358],()=>t(9585)),_N_E=e.O()}]);