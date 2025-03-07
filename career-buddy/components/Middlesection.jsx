"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';

const MiddleSection = () => {
  return (
    <div className="bg-white py-16 relative group overflow-hidden min-h-[400px] mb-0 ">
      <div className="flex justify-center items-center mt-4">
        <Image
          src="/assets/google.png"
          alt="google Logo"
          width={100}
          height={100}
          className="w-5 mr-1"
        />
        <p className="text-sm text-gray-500">4.2 stars 250+ google reviews</p>
        <p className="text-sm mr-2 text-gray-500">⭐ ⭐ ⭐ ⭐ ⭐</p>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        <div>
          <h1
            className="text-6xl font-bold text-gray-600 transition duration-300"
            style={{ fontFamily: "'Barriecito', cursive" }}
          >
            Choose the right career with
          </h1>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-20">
          <h1
            className="text-6xl font-bold text-gray-600 transition duration-300"
            style={{ fontFamily: "'Barriecito', cursive" }}
          >
            CareerBuddy Services{" "}
            <img
              src="/assets/rocket.png"
              alt="Rocket Icon"
              className="inline-block w-10 h-10 ml-1"
            />
          </h1>
        </div>

        <div>
          <p
            className="text-lg font-semibold text-gray-400 mt-4"
            style={{ fontFamily: "'Barriecito', cursive" }}
          >
            Let us guide you toward your dream career with expert advice and proven
            strategies.
          </p>
        </div>
        <div className="flex md:justify-center items-center gap-x-2">
        <Link
          href="/meeting"
          className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Book Call
        </Link>
        <Link
          href="/showcase"
          className="bg-white py-3 px-10 md:px-16 md:text-xl border-4 border-black rounded-[6px] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Showcase
        </Link>
        <Link
          href="/explore"
          className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Explore
        </Link>
      </div>
      </div>
    </div>
  );
};

export default MiddleSection;
