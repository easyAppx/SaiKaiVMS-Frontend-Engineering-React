import React from 'react'
import './hero4.css';
import connect from 'Assets/Images/connect.png';
import vector from 'Assets/Svg/vectorOrg.svg';

const Hero4 = () => {
  return (
    <section>
      <div className="container-fluid-4 flex">

        <div className="vmsImage4">
          <img src={connect} alt='vmsImg'/>
        </div>

        <div className="ultra_auto">
          <h3>Team Collaboration Made Easy</h3>
          <p>
            Supercharge your team’s productivity with communication and collaboration tools, 
            making it easier for you to stay up to date with other team members, keeping them engaged and connected at all times.
            Volunteers can also gain control of their dashboard from one central location, keeping organized and informed.
          </p>

          <div className="learn_more flex">
            <a href='/LandingPage4'>Learn More</a>
            <img className='vector' src={vector} alt="vector"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero4