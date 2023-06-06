import React from 'react';
import './hero_lp3.css';
import manage from 'Assets/Images/manage_schedule.png';
import Btn from 'Components/Utils/Buttons/ButtonOrange/Btn.jsx'

const Hero = () => {
  return (
    <section>
      <div className="container-fluid-M">
        <div className="vmsWriteUp-M">
          <h1>Stay Ahead of your Tasks with Sai Kai</h1>
          <p>  
            From having an organized schedule to tracking impacts from time to time, 
            our volunteer management system helps you stay one step of all your tasks so you never miss an opportunity to make a difference.
          </p>

          <div style={{'marginTop':'13rem'}}>
            <Btn/>
          </div>

        </div>
        <div className="vmsImage-M">
          <img src={manage} alt='usa_hands'/>
        </div>
      </div>
    </section>
  );
}

export default Hero;