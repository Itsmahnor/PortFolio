
import './AboutMe.css'

function AboutMe() {
  return (
    <div className="w-full  flex flex-col items-center justify-center bg-[#00ffee]  text-black py-10 h-[50vh]" id='about'>
      <h2 className="text-[4rem] font-bold mb-10 animate ">About Me</h2>
      <div className="w-[80%] md:w-[60%] text-center">
        <p className="text-[1.5rem] leading-relaxed animate">
          I am a passionate frontend developer with a focus on crafting beautiful and user-friendly interfaces. With
          expertise in HTML, CSS, JavaScript, and React, I bring a blend of creativity and technical skill to every project.
          My goal is to create web applications that are not only visually appealing but also highly performant and accessible
          to users across all devices.
        </p>
      </div>
      <a
          href="#"
          className="mt-6 inline-block bg-gray-700 text-white px-7 py-3 rounded-full hover:bg-gray-600 transition-all duration-300 text-[2rem]"
        >
          Resume
        </a>
    </div>
  );
}

export default AboutMe;
