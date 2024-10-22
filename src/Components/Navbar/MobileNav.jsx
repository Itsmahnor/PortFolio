import { Link } from 'react-scroll';

function MobileNav({ Active, ToggleBtn }) {
  return (
    <div className={Active ? "bg-[#00ffee] Transition w-100" : "NOTransition"}>
      <ul className={Active ? "flex justify-around items-center text-[1rem] md:text-[2rem] cursor-pointer font-medium" : "Hidden"}>
        <li className="border-b-2 border-black logo animation">
          <Link to="home" smooth={true} duration={500} onClick={ToggleBtn}>Home</Link>
        </li>
        <li className="justify-self-center logo animation border-b-2 border-black">
          <Link to="education" smooth={true} duration={500} onClick={ToggleBtn}>Education</Link>
        </li>
        <li className="justify-self-center logo animation border-b-2 border-black">
          <Link to="services" smooth={true} duration={500} onClick={ToggleBtn}>Services</Link>
        </li>
        <li className="justify-self-center logo animation border-b-2 border-black">
          <Link to="projects" smooth={true} duration={500} onClick={ToggleBtn}>Projects</Link>
        </li>
        <li className="justify-self-center logo animation border-b-2 border-black">
          <Link to="contact" smooth={true} duration={500} onClick={ToggleBtn}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
