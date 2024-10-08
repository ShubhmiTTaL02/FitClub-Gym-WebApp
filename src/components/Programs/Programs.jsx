import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
   <div className="Programs" id="programs">
    {/* header */}
    <div className="programs-header">
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>to Shape You</span>
    </div>

    <div className="program-categories">
        {programsData.map((program)=>(
            <div className="category">
                {program.image}
                <spam>{program.heading}</spam>
                <spam>{program.details}</spam>
                <div className="join-now"><span>Join Now</span><img src={RightArrow} alt=""/></div>
            </div>
        ))}
    </div>

   </div>
  )
}

export default Programs