import React from "react";
import SMB from "../assets/SocialMediaBackend.png";

const Work = () => {
  return (
    <div name='projects' className="w-full md:h-screen text-[#f6e5e5] bg-[#4f3b78]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <p className="text-4xl inline sm:text-5xl border-b-4 border-[#c8d679] py-1">
          Work
        </p>
        <p className="py-4 max-w-[700px]">// Check out some of my projects</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          <div 
          style={{ backgroundImage: `url(${SMB})` }}
          className="shadow-lg shadow-[#2b162e] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/*Hover*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold px-4 py-3 m-2 text-[#f6e5e5] tracking-wider">
                MERN Stack App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div 
          style={{ backgroundImage: `url(${SMB})` }}
          className="shadow-lg shadow-[#2b162e] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold px-4 py-3 m-2 text-[#f6e5e5] tracking-wider">
                MongoDB NoSQL Backend
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div 
          style={{ backgroundImage: `url(${SMB})` }}
          className="shadow-lg shadow-[#2b162e] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold px-4 py-3 m-2 text-[#f6e5e5] tracking-wider">
                MongoDB NoSQL Backend
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div 
          style={{ backgroundImage: `url(${SMB})` }}
          className="shadow-lg shadow-[#2b162e] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold px-4 py-3 m-2 text-[#f6e5e5] tracking-wider">
                MongoDB NoSQL Backend
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div 
          style={{ backgroundImage: `url(${SMB})` }}
          className="shadow-lg shadow-[#2b162e] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold px-4 py-3 m-2 text-[#f6e5e5] tracking-wider">
                MongoDB NoSQL Backend
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div 
          style={{ backgroundImage: `url(${SMB})` }}
          className="shadow-lg shadow-[#2b162e] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold px-4 py-3 m-2 text-[#f6e5e5] tracking-wider">
                MongoDB NoSQL Backend
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Work;
