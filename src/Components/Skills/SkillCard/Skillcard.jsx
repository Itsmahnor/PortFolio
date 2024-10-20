
import './Skillcard.css'

function SkillCard({title,iconurl,isActive,onClick}) {
  return (
    <div className={`skills-card ${isActive ?"active":""}`}
onClick={()=>onClick()}
    >
      <div className='skill-icon'>
<img src={iconurl} alt={title} />
      </div>
      <span className='text-[3rem]'>{title}</span>
      </div>
      );
}

export default SkillCard;