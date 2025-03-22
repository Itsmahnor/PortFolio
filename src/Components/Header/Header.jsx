import Component from "../../Reuseable/Component";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Header.css'
function Header() {
  return ( 
    <Component>
      <div className="   md:w-[100%] w-[100vw] h-[90vh] flex justify-center  items-center pt-16 " id="home">
        <div className="md:w-[70%] flex flex-col gap-2 text-center">
      <h1 className="md:text-[4rem] text-[3rem]   font-bold ">Hi, it's <span className="text-[#00ffee]">Mahnoor</span></h1>
      <h2 className="text-[3rem] font-bold text-animation">
  I'm a <span ></span>
</h2>

     <p className="md:text-[1.3rem] mt-5 px-5">A Frontend Developer specializes in creating user-facing interfaces and experiences using technologies like HTML, CSS, JavaScript, and frameworks like React.
    </p>
     <div className="flex gap-4 text-[2rem] mt-11 text-[#00ffee] justify-center">
      <a href=""> <p className="border border-[#00ffee] p-2 rounded-full animatiom "><FaInstagram /></p></a>
    <a href="https://github.com/Itsmahnor"> <p className="border border-[#00ffee] p-2 rounded-full animatiom  "><FaGithub /></p></a>
    
     <p className="border border-[#00ffee] p-2 rounded-full animatiom "><FaLinkedin /> </p>
     <p className="border border-[#00ffee] p-2 rounded-full animatiom  "><FaFacebook /></p>
     </div>
     <div className="text-center mt-11  flex justify-center  text-[1.5rem]"> 
        <button className="bg-[#00ffee] text-black rounded-2xl py-2 px-10  font-medium logo custom-shadow1 mr-4 animatiom">Hire</button>
        <a 
  className="ml-2 cursor-pointer bg-[#1f1e1e] text-[#00ffee] rounded-2xl py-2 px-10 border border-[#00ffee] font-medium logo animation"
  href="https://www.linkedin.com/in/mahnoor-sarfraz-007bb0303"
  target="_blank"
  rel="noopener noreferrer"
>
  Connect
</a>

      </div>
      </div>
     </div>
    </Component>
   );
}

export default Header;