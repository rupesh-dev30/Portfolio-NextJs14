"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiUnrealengine,
  SiExpress,
} from "react-icons/si";
import { IoSchoolSharp } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Third-year BTech student passionate about full stack web development, data structures, algorithms, C++, C, Java, Python programming language. Eager to apply theoretical knowledge to practical projects and committed to continual learning and growth in the field of computer science.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rupesh Kumar",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 7061765631",
    },
    {
      fieldName: "Email",
      fieldValue: "cgcrupesh@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Hindi, English",
    },
  ],
};

const education = {
  icon: <IoSchoolSharp />,
  title: "My education",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum optio amet illum, corporis consequatur voluptatum et vel ipsam distinctio eos!",

  items: [
    {
      institution: "CHandigarh Engineering College, Landran",
      degree: "Bachelors in Computer Sceience Engineering",
      cgpa: "8.31CGPA (till 3rd semester)",
      duration: "2022-Present",
    },
    {
      institution: "Kendriya Vidyalaya, Bokaro Thermal",
      degree: "12th",
      percentage: "87%",
      duration: "2020-2021",
    },
    {
      institution: "Kendriya Vidyalaya, Bokaro Thermal",
      degree: "10th",
      percentage: "85%",
      duration: "2018-2019",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum optio amet illum, corporis consequatur voluptatum et vel ipsam distinctio eos!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiExpress />,
      name: "ExpressJs",
    },
    {
      icon: <DiMongodb />,
      name: "MongoDb",
    },
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiUnrealengine />,
      name: "Unreal Engine",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
