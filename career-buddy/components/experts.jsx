"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const experts = [
  {
    icon: "/images/expert1.png",
    title: "Dr. Rajiv Mehra, Ph.D. in Educational Psychology",
    description:
      "Expert in student career assessments and personalized guidance. Specializes in understanding behavioral patterns and interests to provide tailored career advice.",
  },
  {
    icon: "/images/expert1.png",
    title: "Ms. Ananya Sharma, M.A. in Career Counseling and Guidance",
    description:
      "Experienced in helping students navigate career choices with a focus on academic and professional planning. Provides in-depth career exploration and goal setting.",
  },
  {
    icon: "/images/expert1.png",
    title: "Mr. Arjun Patel, MBA in Human Resources",
    description:
      "Brings a business perspective to career counselling, offering insights into industry trends, professional development, and strategic career planning.",
  },
  {
    icon: "/images/expert1.png",
    title: "Dr. Priya Verma, M.Sc. in Applied Psychology",
    description:
      "Focuses on psychometric testing and career aptitude assessments. Provides comprehensive support for students in identifying strengths and career fit.",
  },
  {
    icon: "/images/expert1.png",
    title: "Ms. Neha Kapoor, B.A. in Sociology and Certified Career Coach",
    description:
      "Specializes in understanding societal and individual influences on career choices. Offers guidance on exploring diverse career paths and personal development.",
  },
  {
    icon: "/images/expert1.png",
    title: "Mr. Siddharth Rao, M.Ed. in Guidance and Counseling",
    description:
      "Provides expert advice on educational and career planning. Experienced in working with students to set realistic goals and create actionable career plans.",
  },
];

export default function Experts() {
  return (
    <div className="mt-20 py-10 md:py-20 bg-grey-100 rounded-[40px] flex flex-col items-center justify-center w-full px-6 md:px-0">
      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl text-black font-semibold text-center"
      >
        Meet Our <span className="text-blue-500">Experts</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600 text-center mt-4 max-w-3xl"
      >
        Our team of experienced professionals is here to guide you through every step of your career journey.
      </motion.p>

      {/* Experts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 xl:w-4/5 2xl:w-[68%] mx-auto">
        {experts.map((expert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.1)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col p-8 bg-grey-800 rounded-xl text-center hover:border-gray-500 transition-all duration-300 border border-gray-700"
          >
            <Image
              src={expert.icon}
              width={80}
              height={80}
              alt="Expert"
              className="mx-auto rounded-full border-2 border-gray-600"
            />
            <h3 className="text-xl font-semibold mt-4 text-white">{expert.title}</h3>
            <p className="text-gray-400 mt-2">{expert.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
