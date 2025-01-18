import { FaArrowAltCircleRight, FaGithub } from "react-icons/fa";
import Component from "../../Reuseable/Component";
import "./Project.css";
import projectdetails from "./ProjectData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Projects() {
  console.log(projectdetails)
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1230, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="h-auto" id="projects">
 <div className="w-100 h-auto lg:px-[10rem] md:px-[2rem] px-2 py-4">
  <div className="w-full mb-16">
  <h5
          className=" text-[4rem] font-extrabold ml-8 hover:text-[#00ffee] hover:border-b-4 inline-block cursor-pointer text-shadow animate"
        >
          Projects
        </h5>

        <p className="text-[1.5rem] ml-7 md:w-[700px] mt-5 animate " >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
  </div>
      

  
          <Slider {...settings}>
            {projectdetails.map((project, index) => (
              <div
                key={index}
                className=" h-full sm:mt-5 mb-5  "
              >
                <div className="mb-5">
                  <div className="flex">
                    <h1 className="md:text-[2rem] font-medium flex-1">
                      {project.title}
                    </h1>
                    <ul className="flex justify-around flex-1 md:text-[1.5rem] mb-1">
                      {project.technologies.map((tech, i) => (
                        <li
                          key={i}
                          className="bg-[#00ffee] p-2 rounded-md inline-block text-black font-medium cursor-pointer"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border rounded-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="p-2 rounded-sm"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-[1.5rem]">{project.description}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center m-4">
                  <div className="gap-5 flex text-[3rem] p-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="border rounded-full p-1" />
                    </a>
                    <a
                      href={project.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaArrowAltCircleRight className="-rotate-45 border rounded-full p-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
    
    
    </div></div>
  );
}

export default Projects;
