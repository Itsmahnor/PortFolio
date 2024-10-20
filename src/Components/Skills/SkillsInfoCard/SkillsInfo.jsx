import React from 'react'; 
import './SkillsInfo.css'

function SkillsInfo({heading,skills}) {
 
  return ( 
    <div className='skills-info-card '>
<h6>{heading}</h6>
<div className='skills-info-content'>
{skills.map((item,index) => (
  <React.Fragment key={`skills_${index}`}>
<div className='skill-info'>
<p className='md:text-[1.5rem]'>{item.skill}</p>
<p className='percentage'>{item.percentage}</p>
</div>
<div className='skill-progress-bg md:h-[10px]'>
<div className='skill-progress md:h-[10px]' style={{width:item.percentage}}></div>
</div>
  </React.Fragment>
))}
</div>
    </div>
   ); 
}

export default SkillsInfo;