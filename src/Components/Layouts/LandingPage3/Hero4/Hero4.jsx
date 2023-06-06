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
          <h3>Streamline Your Volunteer Management: Everything You Need in One Place</h3>
          <p>
            Our Volunteer Management System also provides you with valuable insights into your volunteer work. 
            You can view your progress over time, track your accomplishments, and even see how your volunteer 
            work is contributing to your personal and professional growth. This can be especially 
            helpful if you're looking to make a career out of your volunteer work, 
            as you can use the system to showcase your skills and accomplishments.
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