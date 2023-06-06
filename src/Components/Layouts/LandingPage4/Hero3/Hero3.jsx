import React from 'react'
import 'styles/hero3_lp.css';
//import vector from 'Assets/Svg/vector.svg';
import fall_hands from 'Assets/Images/fall_img.png';
//import manage from 'Assets/Images/manage_schedule.png';

const Hero3 = () => {
  return (
    <section>
      <div className="container-fluid-lp-3 flex">

        <div className="vmsTrackImpact-lp-3">
          <h3>Control the Way you Work</h3>
          <p>
            With our volunteer management system, you're in control of your dashboard. Customize your working hours, 
            availability preferences and other important information that makes it seamless for you to contribute positively to your community. 
            With everything in one place, you can manage the way you work and how best it suits you.
          </p>

          {/*<div className="learn_more-lp-3 flex">
            <a href='/LandingPage3'>Learn more about our dashboard</a>
            <img className='vector-lp-3' src={vector} alt="vector"/>
  </div>*/}
        </div>

        <div className="vmsImage3-lp-3">
          <img src={fall_hands} alt='vmsImg'/>
        </div>
      </div>
    </section>
  )
}

export default Hero3