import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import Component from "../../Reuseable/Component";
import './Project.css'
import projectdetails from './ProjectData.json'
function Projects() {
  return ( 
    <div className="h-auto" id="projects">
<Component>
<h5
  className="md:heading text-[4rem] font-extrabold ml-8 hover:text-[#00ffee] hover:border-b-4 inline-block cursor-pointer text-shadow animate"
>
  Projects
</h5>

<p className="text-[1.5rem] ml-7 md:w-[700px] mt-5 animate ">Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.</p>
<div className="w-100 px-5 flex justify-center mt-5 flex-wrap ">
{projectdetails.map((project, index) => (
          <div key={index} className="md:w-[700px] h-full flex flex-wrap   sm:mt-5 mb-5 animate m-5">
            <div className="mb-5 ">
              <div className="flex">
                <h1 className="md:text-[2rem] font-medium flex-1">{project.title}</h1>
                <ul className="flex justify-around flex-1 md:text-[1.5rem] mb-1">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="bg-[#00ffee] p-2 rounded-md inline-block text-black font-medium cursor-pointer  ">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border rounded-md   ">
                <img src={project.image} alt={project.title} className="p-2 rounded-sm " />
              </div>
              <div className="mt-4">
                <p className="text-[1.5rem]">{project.description}</p>
              </div>
            </div>
            <div className="flex justify-center items-center m-4">
              <div className="gap-5 flex   text-[3rem] p-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="border rounded-full p-1" />
                </a>
                <a href={project.Link}><FaArrowAltCircleRight className="-rotate-45 border rounded-full p-1" target="_blank" rel="noopener noreferrer"/></a>
                
              </div>
            </div>
    </div>))}
    </div>
</Component>
    </div>
   );
}

export default Projects;