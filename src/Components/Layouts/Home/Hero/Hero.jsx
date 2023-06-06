import React from 'react';
import './hero.css';
import usa_hands from 'Assets/Images/volunteer_main.png';
import usa_hands_2 from 'Assets/Images/volunteer_main_2.png';
import Btn from 'Components/Utils/Buttons/ButtonOrange/Btn.jsx'

const Hero = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="vmsWriteUp">
          <h1>The Ultimate Volunteer Experience</h1>
          
          <p> 
            Be a part of a community of changemakers who are working together to create real, 
            meaningful impact. Sign up and track your impact in real time with Sai Kai
          </p>

          <div style={{'marginTop':'6rem'}}>
            <Btn/>
          </div>

        </div>
        <div className="vmsImage">
          <img src={usa_hands} alt='usa_hands'/>
          <img src={usa_hands_2} alt='usa_hand_2'/>
        </div>
      </div>
    </section>
  );
}

export default Hero;