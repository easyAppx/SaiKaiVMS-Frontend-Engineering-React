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
          <h3>See the Impact You Make: Track Your Volunteer Work and Contributions</h3>
          <p>
            In addition to managing your schedule, our Volunteer Management System also allows you to track every impact made; 
            from Hours Overview, to Impact Analysis and Contribution, 
            acting as a constant reminder of how much good work you’re putting in to positively making a difference.
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