import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'; 
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
     <div className="Programs" id="programs">
{/* header  */}
<div className="programs-header"><span className='stroke-text'>Explore our</span><span>Programs</span><span className='stroke-text'>To shape ur body</span></div>
 <div className="program-categories">
    {programsData.map((programs)=>(
        <div className="category">
        {programs.image}
        <span> {programs.heading} </span><span>{programs.details}</span>
        <div className="join-now"><span>Join now</span><span><img src={RightArrow} alt="" /></span></div>
        </div>
    ))}

     
    <span></span><span></span>
 </div>


     </div>
  )
}

export default Programs;
