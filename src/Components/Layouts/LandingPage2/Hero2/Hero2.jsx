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
          <h3>Personalized Database Search</h3>
          <p>
            Spending hours running through volunteer opportunities that do not fit your skillset or into your available schedules??
            Utilize our “Filter” and “Sort” features to navigate through volunteer opportunities tailored to your needs. 
            From “Availability Preferences”, to “Volunteering Sectors”, and other personalized preferences, 
            you will definitely find a suitable search personalized just for you.
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