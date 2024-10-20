import { useState } from "react";
import Component from "../../Reuseable/Component";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import MobileNav from "./MobileNav";
import './Navbar.css'
function NavBar() {
  const[Menu,setMenu]=useState(false);
  const ToggleBtn=()=>{
    setMenu(!Menu);
  }
  return ( 
    <>
   
    <Component>
    
 <div className="flex justify-between h-auto">
  <div className="md:w-[50%] nav-animation"><h1 className="md:text-[3rem] text-[2rem] py-3">Mahnoor <span className="text-[#00ffee] font-extrabold cursor-pointer custom-shadow  logo">Sarfraz</span></h1></div>
  <div className="w-[50%] nav  ">
    <ul className="flex justify-around   md:text-[2rem] cursor-pointer font-medium  ">
      <li className="text-[#00ffee] border-b-2 border-[#00ffee]">Home</li>
      <li className="hover:text-[#00ffee] hover:border-b-2 logo border-[#00ffee]">Education</li>
      <li className="hover:text-[#00ffee] hover:border-b-2 logo border-[#00ffee]">Services</li>
      <li className="hover:text-[#00ffee] hover:border-b-2 logo border-[#00ffee]">Projects</li>
      <li className="hover:text-[#00ffee] hover:border-b-2 logo border-[#00ffee] animation">Contact</li>
    </ul>
  </div >
  <div className="Menu">
  {!Menu ? <IoMenu className="text-[5rem] text-[#00ffee]" onClick={ToggleBtn} /> : <IoClose className="text-[5rem] text-[#00ffee]" onClick={ToggleBtn} />}
  </div>
 </div>

  </Component>
  <MobileNav Active={Menu} ToggleBtn={ToggleBtn}/>
  </>
 );
}

export default NavBar;