import React from "react";
import Pkmn from "../assets/projects/PkmnBattler.png";
import TechBlog from "../assets/projects/TechBlog.png"
import Wellness from "../assets/projects/WellnessWatcher.png"
import Mongo from "../assets/mongo.png"
import Weather from "../assets/projects/weather.png"
import Music from "../assets/projects/Musiquest.png"

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
          style={{ backgroundImage: `url(${Pkmn})` }}
          className="shadow-lg shadow-[#2b162e] bg-[#363b4e] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/*Hover Effect*/}
            <div className="opacity-0 group-hover:opacity-100">

            {/*Project 1*/}
              <span className="font-bold px-4 py-3 m-2 text-[#f6e5e5] tracking-wider">
                MERN Stack Pokemon Battler
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    TBA... 
                  </button>
                </a>
                <a href="https://github.com/Veis1337/Pkmn-Battler" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/*Project 2*/}
          <div 
          style={{ backgroundImage: `url(${TechBlog})` }}
          className="shadow-lg shadow-[#2b162e] bg-[#363b4e] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold px-4 py-3 m-2 text-[#f6e5e5] tracking-wider">
                Full Stack MySQL Tech Blog
              </span>
              <div className="pt-8 text-center">
                <a href="https://stark-beach-85805.herokuapp.com/" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Veis1337/tech-blog-db" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/*Project 3*/}
          <div 
          style={{ backgroundImage: `url(${Wellness})` }}
          className="shadow-lg shadow-[#2b162e] bg-[#363b4e] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold px-4 py-3 m-2 text-[#f6e5e5] tracking-wider">
                Full Stack MySQL Health App
              </span>
              <div className="pt-8 text-center">
                <a href="https://wait-watchers.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/scottswiger/wait-watchers" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/*Project 4*/}
          <div 
          style={{ backgroundImage: `url(${Mongo})` }}
          className="shadow-lg shadow-[#2b162e] bg-[#363b4e] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold px-4 py-3 m-2 text-[#f6e5e5] tracking-wider">
                MongoDB NoSQL Backend
              </span>
              <div className="pt-8 text-center">
                {/* <a href=""> */}
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    No Frontend
                  </button>
                {/* </a> */}
                <a href="https://github.com/Veis1337/MongoAPISocialNetwork" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/*Project 5*/}
          <div 
          style={{ backgroundImage: `url(${Music})` }}
          className="shadow-lg shadow-[#2b162e] bg-[#363b4e] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold px-4 py-3 m-2 text-[#f6e5e5] tracking-wider">
                JavaScript API App
              </span>
              <div className="pt-8 text-center">
                <a href="https://altavada.github.io/musiquest/" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/altavada/musiquest">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/*Project 6*/}
          <div 
          style={{ backgroundImage: `url(${Weather})` }}
          className="shadow-lg shadow-[#2b162e] bg-[#363b4e] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold px-4 py-3 m-2 text-[#f6e5e5] tracking-wider">
                Early JavaScript weather app
              </span>
              <div className="pt-8 text-center">
                <a href="https://veis1337.github.io/Weather-Dashboard/" target='_blank'>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-[#363b4e]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Veis1337/Weather-Dashboard" target='_blank'>
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
