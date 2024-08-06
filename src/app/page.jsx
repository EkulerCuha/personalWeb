import Image from "next/image";
import Linkedin from "./svg/linkedin";
import Instagram from "./svg/instagram";
import Github from './svg/github'
import Discord from "./svg/discord";
import Twitter from "./svg/twitter"
import English from "./svg/english";
import Turkish from "./svg/turkish";
import Javascript from "./svg/javascript";
import Typescript from "./svg/typescript";
import Reactjs from "./svg/reactjs";
import NextSvg from "./svg/nextsvg";
import Html5 from "./svg/html5";
import Scss from "./svg/scss";
import Nodejs from "./svg/nodejs";
import Framer from "./svg/framer";
import Cpp from "./svg/cpp";
import Tailwind from "./svg/tailwind";
import Mongo from "./svg/mongo";

// ${return {<Javascript/>}}

const skillList = [
  {
    name: "JavaScript",
    img: <Javascript/>
  },
  {
    name: "Typescript",
    img: <Typescript/>
  },
  {
    name: "React.js",
    img: <Reactjs/>
  },
  {
    name: "Next.js",
    img: <NextSvg/>
  },
  {
    name: "HTML5",
    img: <Html5/>
  },
  {
    name: "SCSS",
    img: <Scss/>
  },
  {
    name: "Tailwind CSS",
    img: <Tailwind/>
  },
  {
    name: "MongoDB",
    img: <Mongo/>
  },
  {
    name: "Node.js",
    img: <Nodejs/>
  },
  {
    name: "Framer Motion",
    img: <Framer/>
  },
  {
    name: "C++",
    img: <Cpp/>
  },

]

// const skillList = [
//   "JavaScript",
//   "TypeScript",
//   "React.js",
//   "Next.js",
//   "HTML5",
//   "SCSS",
//   "Tailwind CSS",
//   "MongoDB",
//   "Node.js",
//   "Framer Motion",
//   "C++"
// ]

const prevEdu = [
  {
      id:1,
      title: "Atılım University",
      desc: "Department of Computer Engineering",
      date: "2020 - PRESENT",
  },
  {
      id:2,
      title: "Ayyıldız Sınav High School",
      desc: "Graduated from highschool",
      date: "2019 - 2020",
  },
]

const Homepage = () => {
  return (
    <div className="h-full flex flex-col overflow-y-scroll text-gray-800">
      <div className="h-fit flex flex-col lg:flex-row px-6 sm:px-6 md:px-40 lg:px-40 xl:px-48 text-xl">
        {/* IMAGE CONTAINER */}
        <div className="grid lg:mt-64 xl:mt-64 w-full lg:w-1/3 xl:w-1/3 text-gray-500">
          <div className="flex flex-col content-center">
            <div className="h-44 w-44 rounded-3xl bg-white dark:bg-cyan-300">
              <Image src="/transparan.png" width={176} height={176} alt="Picture of the author" ></Image>
            </div>
            <h1 className="text-2xl font-bold mt-5 dark:text-white">Furkan ALBAŞ</h1>
            <p className="text-sm dark:text-white">4. grade Computer Engineering Student</p>
            <div className="text-lg mt-5 dark:text-white">
              {/* INFORMATION BOX */}
              <div className="">
                {/* BOX 1 */}
                <div className="flex items-center gap-2">
                  <svg stroke="#373A40" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="dark:stroke-slate-50" cx="12" cy="12" r="9" stroke="#373A40" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2"/>
                    <path className="dark:stroke-slate-50" d="M8 4V6C8 7.10457 8.89543 8 10 8H11C12.1046 8 13 8.89543 13 10V10C13 11.1046 13.8954 12 15 12V12C16.1046 12 17 11.1046 17 10V10C17 8.89543 17.8954 8 19 8H20M20 16H17C15.8954 16 15 16.8954 15 18V20M11 20V18C11 16.8954 10.1046 16 9 16V16C7.89543 16 7 15.1046 7 14V14C7 12.8954 6.10457 12 5 12H3" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2"/>
                  </svg>
                  <h3 className="cursor-pointer hover:text-gray-800 dark:text-white">Ankara, Türkiye</h3>
                </div>
                {/* BOX 2 */}
                <div className="flex items-center gap-2">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="dark:stroke-slate-50" d="M21 10L12 5L3 10L6 11.6667M21 10L18 11.6667M21 10V10C21.6129 10.3064 22 10.9328 22 11.618V16.9998M6 11.6667L12 15L18 11.6667M6 11.6667V17.6667L12 21L18 17.6667L18 11.6667" stroke="#373A40" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  <h3 className="cursor-pointer hover:text-gray-800"><a href="https://www.atilim.edu.tr">Atılım University</a></h3>
                </div>
                {/* BOX 3 */}
                <div className="flex items-center gap-2 ">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="dark:stroke-slate-50" d="M16 17H21M18.5 14.5V19.5M12 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V11M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863" stroke="#373A40" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  <h3 className="cursor-pointer hover:text-gray-800">hi@ekulercuha.com</h3>
                </div>
              </div>
              {/* ICON BOX */}
              <div className="mt-3 gap-2 flex dark:fill-slate-50 object-fill">
                {/* LINKEDIN */}
                <div>
                  <a href="https://www.linkedin.com/in/furkan-alba%C5%9F-517519230/"><Linkedin/></a>
                </div>
                {/* INSTAGRAM */}
                <div>
                  <a href="https://www.instagram.com/ekulercuha"><Instagram/></a>
                </div>
                {/* TWITTER */}
                <div>
                  <a href="https://www.twitter.com/furkancuha"><Twitter/></a>
                </div>
                {/* GITHUB */}
                <div>
                  <a href="https://www.github.com/ekulercuha"><Github/></a>
                </div>
                {/* DISCORD */}
                <div>
                  <a href="https://www.discord.com/users/254651188379648002"><Discord/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTEXT CONTAINER */}
        <div className="w-full  lg:w-2/3 xl:w-2/3 lg:mt-24 xl:mt-24">
          {/* CONTENT */}
          <div className="grid text-gray-700">
            {/* BIO */}
            <div className="pt-20 dark:text-white">
              <h3 className="font-bold">Bio</h3>
              <div className="flex">
                <div className="w-1 h-full bg-gray-500 rounded-l relative z-50"/>
                <p className="text-sm pt-3 flex-wrap">Hey there, I am Furkan, 21 years old student living in Ankara and the student at the Atılım University. I am at 4th year right now. Recently, I have an interest in becoming a Full Stack Developer and I continue my personal work.</p>
              </div>
            </div>
            {/* LANGUAGES */}
            <div className="pt-20 dark:text-white">
              <h3 className="font-bold">Languages</h3>
              <div className="pt-3">
                <div className="w-1 h-full bg-gray-500 dark:bg-cyan-100 rounded-l relative mr-1">
                  <div className="flex gap-3 justify-start items-center content-center">
                    <div data-tooltip-target="tooltip-hover" className="flex-row items-center ml-4">
                      <English/>
                      <h4 className="text-sm font-bold">English</h4>
                    </div>
                    <div className="flex-row items-center">
                      <Turkish/>
                      <h4 className="text-sm font-bold">Turkish</h4>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* USING TECHNOLOGIES */}
            <div className="pt-20">
              <h3 className="font-bold dark:text-white">Technologies I Use</h3>
              <div className="pt-3 flex gap-4 flex-wrap">
                {
                 skillList.map( (skill) => (
                    <div className="rounded flex justify-center items-center gap-1 p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border-black" key={skill}>
                      <div className="flex justify-center items-center bg-cover w-5 h-5">{skill.img}</div>
                      <div className="ml-2">{skill.name}</div>
                    </div>
                 ))
                }
              </div>
            </div>
            {/* Experience */}
            <div className="pt-20">
                <h3 className="font-bold dark:text-white">Experiences</h3>
                <div className="pt-3 flex gap-4 flex-wrap">
                  {/* IBEX */}
                  <div className=" h-full w-1/2 xl:w-1/3 bg-gray-500 dark:bg-cyan-600 rounded relative">
                    <div className="px-2 ml-1 w-full h-full bg-gray-300  dark:bg-cyan-300 rounded-r ">
                      <h3 className="font-bold">Ibex Technologies</h3>
                      <p className="text-sm ml-1">Summer Intern</p>
                      <p className="ml-1 text-sm font-semibold">2023-2023</p>
                    </div>
                  </div>
                  {/* FURKAN */}
                  <div className=" h-full w-1/2 xl:w-1/3 bg-gray-500 dark:bg-cyan-600 rounded relative">
                    <div className="px-2 ml-1 w-full h-full bg-gray-300 dark:bg-cyan-300 rounded-r ">
                      <h3 className="font-bold">Furkan İnşaat</h3>
                      <p className="text-sm ml-1">HR - Preliminary Accountant - Website Developer</p>
                      <p className="ml-1 text-sm font-semibold">2020-Today</p>
                    </div>
                  </div>
                </div>
            </div>
            {/* EDUCATION */}
            <div className="pt-20">
              <h3 className="font-bold dark:text-white">Education</h3>
              <div className="pt-5 pb-20">
                {/* EXPERIENCE LIST ITEM */}
                <div className="">
                  {
                    prevEdu.map((job) => {
                      if(job.id%2 === 1) {
                          return (
                            // {/* LEFT */}
                            <div className="flex justify-between h-48" key={job.id}>
                            <div className="w-1/3 justify-end ">
                                {/* JOB TITLE */}
                                <div className="bg-white p-1 font-semibold rounded-b-lg rounded-s-lg text-lg dark:bg-cyan-400">{job.title}</div>
                                {/* JOB DESC */}
                                <div className="dark:text-white p-1 text-sm italic">{job.desc}</div>
                                {/* JOB DATE */}
                                <div className="p-1 text-cyan-700 dark:text-cyan-300 text-sm font-semibold">{job.date}</div>
                            </div>
                            {/* CENTER */}
                            <div className="w-1/6 flex justify-center">
                                {/* LINE */}
                                <div className="w-1 h-full bg-gray-600 rounded relative z-30 dark:bg-sky-400">
                                    {/* CIRCLE */}
                                    <div className="ml-auto mr-auto absolute w-5 h-5 rounded-full ring-4 ring-cyan-700 -left-2 bg-red-50"></div>
                                </div>
                            </div>
                            {/* RIGHT */}
                            <div className="w-1/3 justify-start "></div>
                            </div>
                          )
                      }else{
                        return (
                        <div className="flex justify-between h-48" key={job.id}>
                        {/* LEFT */}
                        <div className="w-1/3 justify-start"></div>
                        {/* CENTER */}
                        <div className="w-1/6 flex justify-center">
                        {/* LINE */}
                            <div className="w-1 h-full bg-gray-600 rounded relative z-30 dark:bg-sky-400">
                                {/* CIRCLE */}
                                <div className="absolute w-5 h-5 rounded-full ring-4 ring-cyan-700 -left-2 bg-red-50"></div>
                            </div>
                        </div>
                        {/* RIGHT */}
                        <div className="w-1/3 justify-end">
                            {/* JOB TITLE */}
                            <div className="bg-white p-1 font-semibold rounded-b-lg text-lg rounded-s-lg dark:bg-cyan-400">{job.title}</div>
                            {/* JOB DESC */}
                            <div className="dark:text-white p-1 text-sm italic">{job.desc}</div>
                            {/* JOB DATE */}
                            <div className="p-1 text-cyan-700 dark:text-cyan-300 text-sm font-semibold">{job.date}</div>
                        </div>
                        </div>
                        )
                      }
                    })  
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className=" h-24 w-full bottom-0 bg-opacity-30 bg-gray-500">
        <div className="container my-4 py-3 px-3 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm font-semibold text-gray-700 dark:text-white sm:ml-2 sm:pl-4 sm:mt-1 mt-4">
            @ 2024 EkulerCuha - Open-source on <a className="text-gray-800 dark:text-slate-400 hover:text-gray-100 font-bold" href="https://github.com/ekulercuha/personalWeb">Github</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage