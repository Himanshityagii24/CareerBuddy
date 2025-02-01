'use client';

import Image from 'next/image';
import { Element } from 'react-scroll';

const services = [
  {
    icon: "/assets/s_6.png",
    title: "Data Based Research ",
    description:
      "We assess your career with our data-based researches and align them to configure the best advice for you.",
  },
  {
    icon: "/assets/s_1.png",
    title: "Exploration of Different Emerging Fields",
    description:
      "Get yourself the right career for yourself among the thousands by our services.",
  },
  {
    icon: "/assets/s_5.png",
    title: "Connect with idols of your field",
    description:
      "We at Prospera will help you connect with the idol of your field by our connection network.",
  },
  {
    icon: "/assets/s_3.png",
    title: "Happy and Satisfied Customers",
    description:
      "Our Customers are our asset and our goal is to make them satisfied and get them with their aligned career.",
  },
  {
    icon: "/assets/s_4.png",
    title: "One to One Connection",
    description:
      "With our services, we help students by connecting them with Career Guidance Professionals.",
  },
  {
    icon: "/assets/s_2.png",
    title: "Pay-Per-Meeting Service",
    description:
      "Don't waste money on ineffective programs. Let Our Experts personally guide you to reach your target.",
  },
];

const Services = () => {
  return (
    <Element name="services">
      <div className="md:px-0 mx-6 xl:2-4/5 2xl:w-[66%] md:mx-auto">
        <h1 className="text-5xl md:text-5xl md:text-center font-medium" 
        style={{ fontFamily: 'Rubik Burned' }}
        >
          Our Services
        </h1>
        <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
          All of our services are designed to help you get your right path
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
            >
              <Image
                src={service.icon}
                width={100}
                height={100}
                className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                alt={service.title}
              />
              <h1 className="text-2xl font-medium"   style={{ fontFamily: 'Rubik Burned' }}>{service.title}</h1>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Services;
