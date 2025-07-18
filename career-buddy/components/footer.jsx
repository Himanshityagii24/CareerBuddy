import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#e4e3e3] py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium ">
        </h1>
        <p className="text-left  text-xl  text-gray-900">765-786-8862</p>
        <p className="text-left  text-xl  text-gray-900">
          admin@career_buddy.in
        </p>
      </div>

      <div className="flex md:justify-center gap-x-4 mt-10">
        © 2025 Career buddy.All Rights Reserved.
        <Link href="/" className="text-blue-900">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;