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
          <h3>Connect With The Right Opportunities</h3>
          <p>
            Take charge of the networking aspect of Volunteering and connect with <br/> like-minded individuals that want to see you grow positively 
            and contribute to your growth with life-changing volunteering opportunities. <br/> You’re just a Click away!
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