import { Link } from 'react-scroll';
import { IoClose } from "react-icons/io5";

function MobileNav({ active, toggleMenu }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-40 transition-opacity duration-500 ${
          active ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#00ffee] bg-opacity-95 backdrop-blur-md z-50 transform transition-transform duration-500 shadow-2xl ${
          active ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='flex justify-around  pt-7'>
             
            <h1 className=" text-[1.3rem] font-bold py-3 tracking-tight">
              Mahnoor
              <span className="text-black font-extrabold cursor-pointer custom-shadow logo ml-2 hover:text-[#000000] transition duration-300">
                Sarfraz
              </span>
            </h1>
       
          {/* Close Button */}
        <div className="flex justify-end p-4 text-black text-3xl cursor-pointer hover:text-white" onClick={toggleMenu}>
          <IoClose />
        </div>
        </div>
        

        <ul className="flex flex-col items-start mt-12 ml-6 gap-8 text-[1.3rem] font-medium">
          {["home", "education", "services", "projects", "contact"].map((item) => (
            <li key={item} className="relative group w-full">
              <Link
                to={item}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="capitalize cursor-pointer py-2 px-4 rounded hover:text-white transition duration-300"
              >
                {item}
              </Link>
              {/* Neon underline effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:bg-white group-hover:w-full transition-all duration-300"></span>
              {/* Glow effect on hover */}
              <span className="absolute inset-0 bg-[#00ffee] opacity-0 rounded group-hover:opacity-20 transition duration-300 blur-md"></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
