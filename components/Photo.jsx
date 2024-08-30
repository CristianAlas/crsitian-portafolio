"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div>
            <div className="w-full h-full relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                    }}>{/*w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]*/}

                    {/*image*/}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                        }}
                        className="w-[200px] h-[200px] xl:w-[395px] xl:h-[395px] mix-blend-lighten absolute">
                        <Image
                            src="/assets/calas.png"
                            priority
                            quality={100}
                            fill
                            alt=""
                            className="object-contain" />
                    </motion.div>

                    {/*circle*/}
                    <motion.svg
                        className="w-[200px] xl:w-[400px] h-[200px] xl:h-[400px]"
                        fill="transparent"
                        viewBox="0 0 506 506"
                        xmlns="htpp://www.w3.org/2000/svg"
                    >
                        <motion.circle
                            cx="253"
                            cy="253"
                            r="250"
                            stroke="#21F8F6"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "24 10 0 0 " }}
                            animate={{
                                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 253 22 22"],
                                rotate: [120, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    </motion.svg>
                </motion.div>
            </div>
        </div>
    );
};

export default Photo