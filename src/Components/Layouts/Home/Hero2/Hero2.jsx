import React from 'react'
import './hero2.css';
import find_apply from 'Assets/Images/find_apply.png';
import vector from 'Assets/Svg/vectorOrg.svg';

const Hero2 = () => {
  return (
    <section>
      <div className="container-fluid-2 flex">

        <div className="vmsImage2">
          <img src={find_apply} alt='vmsImg'/>
        </div>

        <div className="vmsOpportunity">
          <h3>Find and Apply To The Right Opportunities</h3>
          <p>
            Discover new volunteer opportunities that match your interests, skills, location, activity type and time commitment. 
            Our personalized search filter experience helps 
            volunteers save time and ensures they are matched to a volunteer opportunity that’s most suitable for them. 
          </p>

          <div className="learn_more flex">
            <a href='/LandingPage2'>Learn More</a>
            <img className='vector' src={vector} alt="vector"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero2