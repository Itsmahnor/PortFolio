import Component from "../Reuseable/Component";



function NavBar() {
  return ( 
    <Component>
 <div className="flex justify-between">
  <div className="w-[50%] nav-animation"><h1 className="text-[3rem] ">Mahnoor <span className="text-[#00ffee] font-extrabold cursor-pointer custom-shadow  logo">Sarfraz</span></h1></div>
  <div className="w-[50%]">
    <ul className="flex justify-around   text-[2rem] cursor-pointer font-medium ">
      <li className="text-[#00ffee] border-b-2 border-[#00ffee]">Home</li>
      <li className="hover:text-[#00ffee] hover:border-b-2 logo border-[#00ffee]">Education</li>
      <li className="hover:text-[#00ffee] hover:border-b-2 logo border-[#00ffee]">Services</li>
      <li className="hover:text-[#00ffee] hover:border-b-2 logo border-[#00ffee]">Projects</li>
      <li className="hover:text-[#00ffee] hover:border-b-2 logo border-[#00ffee] animation">Contact</li>
    </ul>
  </div>
 </div>
  </Component>
 );
}

export default NavBar;