import SkillData from './SkillsData.json';  // Assuming the JSON file is in the same directory
import './Skills.css';
import SkillCard from './SkillCard/Skillcard';
import Component from '../../Reuseable/Component';
import { useState } from 'react';
import SkillsInfo from './SkillsInfoCard/SkillsInfo';

function Skills() {
  const[selectedSkills,setselectedSkills]=useState(SkillData.skills[0]);

  const handleSelectedSkill=(data) => {
    setselectedSkills(data);
  }
  return (
    <Component>
    <section className='skills-container py-[10rem] px-4'>
      <h5 className='md:heading text-[4rem] text-center font-extrabold py-14'>Technical Proficiency</h5>
      <div className='skills-content mt-16'>
        <div className="skills">
          {
            SkillData.skills.map((item) => (
              <SkillCard
                key={item.title}
                iconurl={item.icon}
                title={item.title}
               isActive={selectedSkills.title === item.title}
               onClick={()=>{
                handleSelectedSkill(item)
               }}
              />
            ))
          }
        </div>
        <div className="skills-info">
          <SkillsInfo
          heading={selectedSkills.title}
          skills={selectedSkills.skills}
           />
        </div>
      </div>
    </section>
    </Component>
  );
}

export default Skills;
