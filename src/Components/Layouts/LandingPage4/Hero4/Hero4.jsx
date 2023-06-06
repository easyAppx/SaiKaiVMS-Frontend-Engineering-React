import React from 'react'
import 'styles/hero4_lp.css';
import fall_hands from 'Assets/Images/fall_img.png';
//import connect from 'Assets/Images/connect.png';
//import vector from 'Assets/Svg/vector.svg';

const Hero4 = () => {
  return (
    <section>
      <div className="container-fluid-lp-4 flex">

        <div className="vmsImage4-lp-4">
          <img src={fall_hands} alt='vmsImg'/>
        </div>

        <div className="ultra_auto-lp-4">
          <h3>Manage Your Impact</h3>
          <p>
            Our volunteer management system allows you to track the impact of your volunteer work. 
            You can view your contributions and hours worked, as well as see the outcomes of the projects you have contributed to. 
            You can also receive recognition for your efforts and share your accomplishments with others. 
            With our system, you can manage just how well your impact is making a difference
          </p>

          {/*<div className="learn_more-lp-4 flex">
            <a href='/LandingPage4'>Learn more about our process</a>
            <img className='vector-lp-4' src={vector} alt="vector"/>
  </div>*/}

        </div>
      </div>
    </section>
  )
}

export default Hero4