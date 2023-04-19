import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#4f3b78]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#f6e5e5]">
        <p className="text-2xl sm:text-5xl">Welcome! My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#c8d679]">
          Michael Weiss
        </h1>
        <p className="py-4 max-w-[700px] md:text-2xl">
          <div className="text-2xl sm:text-4xl font-bold text-[#8892b0] my-2">
            I'm a Full Stack Software Developer
          </div>
          focused on building responsive customer-facing applications from the
          ground up. This portfolio was built using React frontend library
          alongside Tailwind CSS to make the things look nice.
        </p>
        <div>
          <button className="text-[#c8d679] border-2 border-[#c8d679] px-6 py-3 my-2 flex items-center hover:bg-[#363b4e]">
          <Link to="about" smooth={true} duration={500}>
              See what I've been up to
              <HiArrowNarrowRight className="ml-3 inline" />
            </Link>

          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
