import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">

          <Header/>
          {/* the best add */}
          <div className="the-best-ad">
            <div></div>
            <span>the best finess club in the town</span>
          </div>
           
           {/* hero heading */}
           <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>  
              <span>
                  n here we wll help you to shape andbuild your ideal body to live your life to the fullest
                </span>
             </div> 
            </div>

            {/* figure */}
            <div className="figures">
              <div>
                <span>+140</span>
                <span>expert coaches</span>
              </div>
              <div>
                <span>978</span>
                <span>members joined</span>
              </div>
              <div>
                <span>50</span>
                <span>fitness programs</span>
              </div>
            </div>

            {/* hero buttons */}
            <div className="hero-buttons">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">Learn More</buttons>
            </div>
           </div>
        <div className="right-h">right</div>
          
    </div>
  )
}

export default Hero 