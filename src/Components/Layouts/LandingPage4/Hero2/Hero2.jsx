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
          <h3>Connect with Others</h3>
          <p>
            Our volunteer management system is designed to connect you with other volunteers and 
            like-minded individuals conscious about growth and impact. Take control of our basic features that allows you to collaborate, 
            communicate and connect with other volunteers effectively while helping each other grow accordingly.
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