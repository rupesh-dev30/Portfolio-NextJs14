"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

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
  SiShadcnui,
} from "react-icons/si";
import { IoSchoolSharp } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";


const about = {
  title: "About me",
  description:
    "BTech student passionate about full stack web development, data structures, algorithms, C++, C, Java, and Python programming languages. Eager to apply theoretical knowledge to practical projects and committed to continual learning and growth in the field of computer science.",
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
    "I am currently pursuing a Bachelor's degree in Computer Science Engineering from Chandigarh Engineering College, maintaining a CGPA of 8.10. I completed my intermediate and matriculation at Kendriya Vidyalaya, Bokaro Thermal, with scores of 87% and 85%, respectively. During my academic journey, I have engaged in various projects, competitions, and extracurricular activities, which have helped me develop strong technical and interpersonal skills.",

  items: [
    {
      institution: "Chandigarh Engineering College, Landran",
      degree: "Bachelors in Computer Sceience Engineering",
      score: "8.10 CGPA",
      duration: "2022-Present",
    },
    {
      institution: "Kendriya Vidyalaya, Bokaro Thermal",
      degree: "AISSCE Class 12 (Intermediate)",
      score: "87%",
      duration: "2020-2021",
    },
    {
      institution: "Kendriya Vidyalaya, Bokaro Thermal",
      degree: "AISSCE Class 10 (Matriculation)",
      score: "85%",
      duration: "2018-2019",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I have a diverse set of skills in full stack web development and programming. My expertise spans HTML5, CSS, JavaScript, and various frameworks and libraries including Node.js, Express.js, and React.js. Additionally, I am proficient in C++, Java, and have experience with databases like MongoDB and styling tools such as Tailwind CSS. I am also familiar with Next.js, ShadCN UI library, and Unreal Engine.",
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
      icon: <SiShadcnui />,
      name: "ShadCN",
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
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[500px]">
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
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <div
                            className="flex sm:flex-row justify-between items-center flex-col
                          "
                          >
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <p className="text-[12px] max-w-[90px] min-h-[30px] text-center">
                              {item.score}
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
