'use client';

import Image from 'next/image';

const Founder = () => {
  return (
    <section>
      <main className="md:flex items-center justify-center space-y-9 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-8 md:px-0">
        {/* Founder Image */}
        <Image
          src={"/assets/Himanshi.png"}  // Replace with your actual photo path
          width={10000}
          height={10000}
          className="md:w-1/3 rounded-md"
          alt="Founder Image"
        />
        {/* Founder Content */}
        <div className="flex flex-col gap-y-5 md:w-1/2">
          <h1 className="text-lg md:text-2xl"  style={{ fontFamily: 'Barriecito' }}>
            "As the founder of CareerBuddy, I am deeply passionate about guiding students towards the right career paths. 
            I created CareerBuddy to bridge the gap between young minds and their ideal careers, providing personalized and professional counseling services. 
            With a focus on helping students explore diverse fields, CareerBuddy aims to empower individuals to make informed decisions about their future. 
            Our approach is data-driven, personalized, and designed to provide exceptional guidance to shape the next generation of professionals."
          </h1>
          {/* Rating Stars */}
          <p className="text-2xl mr-2 text-gray-500">⭐ ⭐ ⭐ ⭐ ⭐</p>

          {/* Founder Info */}
          <span className="text-xl font-medium">
                Himanshi Tyagi <br />
            Founder,<br/> CareerBuddy
          </span>
        </div>
      </main>
    </section>
  );
};

export default Founder;
