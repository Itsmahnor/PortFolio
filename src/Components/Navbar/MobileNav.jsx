import './Navbar.css'



function MobileNav({Active}) {
  return ( 
  <div className={Active?"bg-[#00ffee] Transition w-100" : "NOTransition"}>
  <ul className={Active?"flex justify-around items-center text-[1rem]  md:text-[2rem] cursor-pointer font-medium  ":"Hidden"}>
    <li className=" border-b-2 border-black logo animation ">Home</li>
    <li className="justify-self-center logo animation border-b-2 border-black">Education</li>
    <li className="justify-self-center logo animation border-b-2 border-black">Services</li>
    <li className="justify-self-center logo animation border-b-2 border-black">Projects</li>
    <li className="justify-self-center logo animation border-b-2 border-black ">Contact</li>
  </ul>
  </div>
    
   );
}

export default MobileNav;