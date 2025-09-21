import { useState } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaArrowCircleDown } from "react-icons/fa";
import './Navbar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#00ffee] bg-opacity-90 backdrop-blur-md shadow-xl transition-all duration-500">
        <div className="flex justify-between items-center h-[18vh] px-6 md:px-14">
          {/* Logo */}
          <div className="md:w-[30vw] w-[50vw] nav-animation">
            <h1 className="md:text-[3rem] text-[2rem] font-bold py-3 tracking-tight">
              Mahnoor
              <span className="text-black font-extrabold cursor-pointer custom-shadow logo ml-2 hover:text-[#000000] transition duration-300">
                Sarfraz
              </span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:w-[60vw] justify-around items-center font-medium">
            <ul className="flex gap-8 text-[1rem] md:text-[1.3rem]">
              {["home", "education", "services", "projects", "about", "contact"].map((item) => (
                <li key={item} className="relative group cursor-pointer transition-all duration-300">
                  <Link to={item} smooth={true} duration={500} className="capitalize text-black hover:text-white">
                    {item}
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
              <li className="flex items-center mt-1 text-[1.8rem] hover:text-white transition duration-300">
                <Link to="contact" smooth={true} duration={1500}>
                  <FaArrowCircleDown className="animate-bounce text-black hover:text-white transition duration-500" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-black text-4xl cursor-pointer hover:text-white transition duration-300"
            onClick={toggleMenu}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <MobileNav active={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default NavBar;
