"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAngular,
  FaJava,
  FaDocker,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiTypescript,
  SiSpringboot,
  SiDotnet, 
  SiJsonwebtokens, 

} from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "I am a proactive and adaptable full-stack developer with a solid foundation in backend development (Java, Spring Boot) and frontend technologies (React, Next.js), as well as database systems (MySQL, SQL Server), among other tools. I am passionate about building complete and efficient web applications—from server-side logic to the user interface. My skills in Photoshop and Illustrator also allow me to add a creative touch to every project.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Cristian Alas",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+503) 7551 0057",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "cristian.017",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Salvadoran",
    },
    {
      fieldName: "Email",
      fieldValue: "alfredoalas092@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Spanish, English",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have developed a broad skill set in graphic design and software development, with projects ranging from brand identity creation to custom digital solutions.",
  items: [
    {
      company: "Freelance",
      position: "Full Stack Developer",
      project: "Classroom Monitoring System",
      duration: "Feb 2025 – Present",
    },
    {
      company: "Toquesito Aesthetics",
      position: "Graphic Designer",
      duration: "Mar 2024 - Nov 2025",
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      project: "User Management System",
      duration: "May 2024 – July 2024",
    },
    {
      company: "Freelance",
      position: "Front End Developer",
      project: "Personal Portfolio",
      duration: "Aug 2024 – Sep 2024",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Web developer with a solid foundation in Java, React and Spring Boot, constantly learning and seeking new challenges.",
  items: [
    {
      institution: "Technological University",
      degree: "Software Engineering Technician",
      duration: "2020 - present",
    },
    {
      institution: "Academia Kodigo",
      degree: "Java Developer",
      duration: "2024",
    },
    {
      institution: "Online Course Udemy",
      degree: "React: Creating full Stack webapp",
      duration: "2024",
    },
    {
      institution: "Online Course Udemy",
      degree: "Spring Boot: Backend Application",
      duration: "2023-2024",
    },
    {
      institution: "Mary Help of Christians Salesian School",
      degree: "General Baccalaureate",
      duration: "2018 - 2019",
    },
  ],
};

//skill data
const skills = {
  title: "My Skills",
  description:
    "My portfolio includes projects developed with the following technologies:",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaDatabase />,
      name: "MySQL & Sql Server",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Nextjs",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Adobe photoshop",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Adobe illustrator",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiSpringboot />,
      name: "Spring boot",
    },
    {
      icon: <SiDotnet />,
      name: "ASP.NET Framework",
    },
    {
      icon: <SiJsonwebtokens />,
      name: "JWT",
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
import { motion } from "framer-motion";
import { list } from "postcss";

export const Resume = () => {
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
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className="min-h-[70vh] w-full">
            {/*experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[330px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex flex-col gap-1 lg:items-start items-center">
                            {/* Project (sin punto azul) */}
                            <p className="text-white/60 text-sm italic">{item.project}</p>

                            {/* Company (con punto azul) */}
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[330px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
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

            {/*skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[330px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group">
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

            {/*about*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">
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
};

export default Resume;
