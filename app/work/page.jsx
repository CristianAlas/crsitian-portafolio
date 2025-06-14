"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "User Management",
    description:
      "This API is essential to manage users securely and flexibly in any application. It offers a robust set of features, including authentication and authorization.",
    stack: [
      { name: "Spring boot" },
      { name: "Jwt" },
      { name: "MySql" },
      { name: "React" },
    ],
    image: "/assets/work/01.jpg",
    github: "https://github.com/CristianAlas/ApiRest-spring-bot-react",
  },
  {
    num: "02",
    category: "Backend",
    title: "Veterinary Management",
    description:
      "This API, developed with Spring Boot, provides a set of functionalities to efficiently and securely manage all information related to a veterinary clinic.",
    stack: [
      { name: "Spring boot" },
      { name: "Docker" },
      { name: "MySql" },
      { name: "Don Web" },
    ],
    image: "/assets/work/02.jpg",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Personal Portfolio",
    description:
      "This digital portfolio displays skills, projects and professional experience in an attractive way. Made with modern technologies, it offers a great user experience.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind css" },
      { name: "Framer Motion" },
      { name: "EmailJs" },
    ],
    image: "/assets/work/03.jpg",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Full Stack",
    title: "Task App",
    description:
      "Minimalist web application for personal task management, built with Next.js and ultra-clean design. Allows creating, editing, completing, and deleting tasks intuitively with an elegant and functional interface.",
    stack: [
    { name: "Next.js" },
    { name: "Tailwind css" },
    { name: "Python" },
    { name: "Django" },
    { name: "SQLite" },
    ],
    image: "/assets/work/task.png",
    live: "",
    github: "https://github.com/CristianAlas/FrontEnd-con-Next-Django.git",
  },
  {
    num: "05",
    category: "Full Stack",
    title: "CaTree",
    description:
      "Modern link-in-bio solution that enables users to create a customizable landing page featuring all their social media profiles, websites, and important links. Built as an alternative to LinkTree with enhanced customization options and clean, responsive design.",
    stack: [
    { name: "React" },
    { name: "Tailwind css" },
    { name: "Express" },
    { name: "MongoDB" },
    ],
    image: "/assets/work/5.png",
    live: "https://catree-sv.netlify.app/",
    github: '',
  },
  {
    num: "06",
    category: "Full Stack",
    title: "Classroom Monitoring System",
    description:
      "Comprehensive monitoring solution for the Faculty of Computer Science and Applied Sciences, providing real-time oversight and management of academic facilities and resources.",
    stack: [
    { name: "C#" },
    { name: "ASP.NET Framwork" },
    { name: "Boostrap" },
    { name: "SQL Server" },
    ],
    image: "/assets/work/u.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on curret slide index
    setProject(projects[currentIndex]); 
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/*outline num*/}
              <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*project category*/}
              <h2 className="text-[38px] font-bold leading-none text-white group-hover:accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/*project description*/}
              <p className="text-white/60">{project.description}</p>
              {/*stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-[13px]  text-accent">
                      {item.name}
                      {/*remove the last comma*/}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/*buttons*/}
              <div className="flex items-center gap-4">
                {/* live project button
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
                {/* Github project button */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/*slide*/}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[428px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[360px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
