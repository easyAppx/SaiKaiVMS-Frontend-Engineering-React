import React from 'react'
import 'styles/hero2_lp.css';
import fall_hands from 'Assets/Images/fall_img.png';
//import vector from 'Assets/Svg/vector.svg';

const Hero2 = () => {
  return (
    <section>
      <div className="container-fluid-lp-2 flex">

        <div className="vmsImage2-lp-2">
          <img src={fall_hands} alt='vmsImg'/>
        </div>

        <div className="vmsOpportunity-lp-2">
          <h3>Never Miss a Beat: Manage Your Volunteer Schedule with Ease</h3>
          <p>
            Still juggling daily activities and volunteer schedules all together? 
            Can’t seem to keep an organized mind with so many places to be and so little time?
            Our Volunteer Management System helps you sync schedules with your daily activities, 
            so you never miss a schedule “beat”, always get reminders on upcoming schedules and keep an organized lifestyle. 
          </p>

          {/*<div className="learn_more-lp-2 flex">
            <a href='/LandingPage2'>Learn more about our application process</a>
            <img className='vector-lp-2' src={vector} alt="vector"/>
  </div>*/}

        </div>
      </div>
    </section>
  )
}

export default Hero2