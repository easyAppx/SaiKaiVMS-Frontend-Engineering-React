import React from 'react'
import './hero3.css';
import vector from 'Assets/Svg/vectorOrg.svg';
import manage from 'Assets/Images/manage_schedule.png';

const Hero3 = () => {
  return (
    <section>
      <div className="container-fluid-3 flex">

        <div className="vmsTrackImpact">
          <h3>Real-Time Schedule Management and Task Tracking</h3>
          <p>
            Efficiently manage schedules on the go and get constant reminders on upcoming ones as they unfold, 
            while keeping track of tasks, deliverables and impact added from time to time. 
            This helps volunteers gain a sense of accomplishment and purpose. 
          </p>

          <div className="learn_more flex">
            <a href='/LandingPage3'>Learn More</a>
            <img className='vector' src={vector} alt="vector"/>
          </div>
        </div>

        <div className="vmsImage3">
          <img src={manage} alt='vmsImg'/>
        </div>
      </div>
    </section>
  )
}

export default Hero3