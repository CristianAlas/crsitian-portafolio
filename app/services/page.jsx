"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        tittle: "Web Development",
        description:
            "I am passionate about web development and enjoy creating unique digital experiences. Proficient in HTML, CSS, JavaScript, and popular frameworks like React and Angular.",
        href: "/contact"
    },
    {
        num: "02",
        tittle: "Backend Development",
        description:
            "I'm skilled in backend development, database management, and creating scalable systems. My tools include Spring Boot, Docker, microservices, and Don Web.",
        href: "/contact"
    },
    {
        num: "03",
        tittle: "Database Manager",
        description:
            "Database manager specializing in MySQL, PostgreSQL, and SQL Server. Expert in design, implementation, and optimization for data integrity, security, and performance.",
        href: "/contact"
    },
    {
        num: "04",
        tittle: "Designer (photoshop)",
        description:
            "Passionate about graphic design, with specialization in vector illustration. I create unique and personalized designs that leave a mark.",
        href: "/contact"
    },
];

import { motion } from "framer-motion";

const Services = () => {
    return (
        <seccion className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[30px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                {/*top*/}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-4xl font-extrabold text-outline
                                    text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.href}
                                        className="w-[53px] h-[53px] rounded-full bg-white group-hover:bg-accent tansition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-2xl" />
                                    </Link>
                                </div>
                                {/*tittle*/}
                                <h2
                                    className="text-[28px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
                                >
                                    {service.tittle}
                                </h2>
                                {/*description*/}
                                <p
                                    className="text-white/60"
                                >{service.description}</p>
                                {/*border*/}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </seccion>
    );
};
export default Services;

