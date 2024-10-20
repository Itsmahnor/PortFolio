import React from "react";
import educationData from "./EducationData.json"; // Adjust the path accordingly
import Component from "../Reuseable/Component";

function Education() {
  return ( 
    <section className="education">
      <h2 className="md:heading text-[4rem] text-center font-extrabold">Education</h2>
      <div className="timeline-items">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content px-7 py-7">
              <h3 className="text-[1.5rem] head">{item.degree}</h3>
              <h4 className="text-[1.3rem]">{item.institution}</h4>
              <p className="text-[1.5rem] mt-2 text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
