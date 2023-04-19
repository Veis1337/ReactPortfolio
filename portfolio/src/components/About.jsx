import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#4f3b78] text-[#f6e5e5]">
      <div
        name="about"
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#f6e5e5]"
      >
        <p className="text-4xl inline sm:text-5xl border-b-4 border-[#c8d679] py-1">
          About
        </p>
        <p className="py-4 max-w-[700px] md:text-2xl">
          Thanks for making it this far! I recently earned a Full-Stack software
          developer certificate from UNC Chapel Hill. Throughout my studies, I
          gained familiarity with using and building RESTful API's, the Agile
          paradigm, MVC structuring, mobile-first development, version control
          on collaborative projects, and many other tools that are in high
          demand for software developers. I have a proven track record of
          excellence and dependability in the workplace, and am excited to bring
          that same tenacity to a new home in a software developer role. Keep
          scrolling to see my favorite languages and libraries.
        </p>
      </div>
    </div>
  );
};

export default About;
