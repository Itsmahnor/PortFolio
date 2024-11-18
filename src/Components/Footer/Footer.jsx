import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Link } from 'react-scroll'; 


const Footer = () => {
  return (
    <>
    <footer className=" text-gray-300 p-16 
    ">
      <div className="max-w-7xl mx-auto flex justify-between ">
        <div>
          <h3 className="text-white md:text-[3rem] mb-4 font-bold mt-10 custom-shadow  logo">Mahnoor Sarfraz</h3>
        </div>
        <div className='md:text-[1.5rem]'>
          <h4 className="md:text-[2rem] text-white mb-4 ">Socials</h4>
          <ul className="space-y-2">
            <li><a href="https://github.com/Itsmahnor" className="hover:underline hover:border-b-2 logo border-[#00ffee]">Github</a></li>
            <li><a href="https://www.linkedin.com/in/mahnoor-sarfraz-007bb0303" className="hover:underline hover:border-b-2 logo border-[#00ffee]">LinkedIn</a></li>
            <li><a href="https://leetcode.com/u/myaccount1122/" className="hover:underline hover:border-b-2 logo border-[#00ffee]">LeetCode</a></li>
            <li><a href="mailto:mahnoorsarfraz23@gmail.com" className="hover:underline hover:border-b-2 logo border-[#00ffee]">Mail</a></li>
          </ul>
        </div>
        <div className='md:text-[1.5rem] '>
          <h4 className=" md:text-[2rem] text-white mb-4 ">Pages</h4>
          <ul className="space-y-2">
          
          <li className="hover:text-[#00ffee] cursor-pointer">
                <Link to="home" smooth={true} duration={500}>Home</Link>
              </li>
              <li className="hover:text-[#00ffee] cursor-pointer  ">
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
              </li>
              <li className="hover:text-[#00ffee] cursor-pointer ">
                <Link to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li className="hover:text-[#00ffee] cursor-pointer ">
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
              </li>
            
          </ul>

        
    
        </div>

       
      </div>
      <div>

</div>
    </footer>
    <Link to="home" className='text-[2rem] flex justify-end text-end h-100 bottom-0 mr-4'      smooth={true} duration={1000}><FaArrowCircleUp /></Link>
  </>
  );
};

export default Footer;
