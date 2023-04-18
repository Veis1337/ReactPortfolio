import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/react.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#363b4e] text-[#f6e5e5]">
        <div>
            <img src={Logo} alt='React Logo' style={{width: '50px'}} />
        </div>
      
      {/*Menu*/}
      <div>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/*Hamburger, only shows on mobile and brings up larger nav menu*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile Menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#363b4e] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/*Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-600">
            <a className='flex justify-between items-center w-full text-[#f6e5e5]' href='/'>
                LinkedIn <FaLinkedin size={30}/>
            </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#333333]">
            <a className='flex justify-between items-center w-full text-[#f6e5e5]' href='/'>
                GitHub <FaGithub size={30}/>
            </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#4f3b78]">
            <a className='flex justify-between items-center w-full text-[#f6e5e5]' href='/'>
                Email <HiOutlineMail size={30}/>
            </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#5e6138]">
            <a className='flex justify-between items-center w-full text-[#f6e5e5]' href='/'>
                Resume <BsFillPersonLinesFill size={30}/>
            </a>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
