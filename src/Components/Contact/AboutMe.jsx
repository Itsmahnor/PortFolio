
import './AboutMe.css'

function AboutMe() {
  return (
    <div className="w-full h-auto  flex flex-col items-center justify-center bg-[#00ffee]  text-black py-16 md:h-[70vh]" id='about'>
      <h2 className="text-[4rem] font-bold mb-10 animate ">About Me</h2>
      <div className="w-[80%] md:w-[60%] text-center">
        <p className="md:text-[1.5rem]  text-[1rem] leading-relaxed animate">
          I am a passionate frontend developer with a focus on crafting beautiful and user-friendly interfaces. With
          expertise in HTML, CSS, JavaScript, and React, I bring a blend of creativity and technical skill to every project.
          My goal is to create web applications that are not only visually appealing but also highly performant and accessible
          to users across all devices.
        </p>
      </div>
      <a
  href="Profile (3).pdf"
  download="Profile (3).pdf"  
  className="mt-6 inline-block bg-gray-700 text-white px-7 py-3 rounded-full hover:bg-gray-600 transition-all duration-300 md:text-[2rem]"
>
  Download Resume
</a>

    </div>
  );
}

export default AboutMe;
