import React from 'react'
import 'styles/hero3_lp.css';
import fall_hands from 'Assets/Images/fall_img.png';
//import manage from 'Assets/Images/manage_schedule.png';

const Hero3 = () => {
  return (
    <section>
      <div className="container-fluid-lp-3 flex">

        <div className="vmsTrackImpact-lp-3">
          <h3>Track Opportunities, Monitor Applications seamlessly</h3>
          <p>
            Opportunities comes and goes, but with our Volunteer Management System, you can always revisit them anytime. 
            Track preferred opportunities that align to your interest and passion as they unfold, 
            while monitoring ongoing applications seamlessly in case of a possible acceptance for a role.
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