import React from 'react';
import './hero_lp.css';
import find_apply from 'Assets/Images/find_apply.png';
import Btn from 'Components/Utils/Buttons/ButtonOrange/Btn.jsx'


const Hero = () => {
  return (
    <section>
      <div className="container-fluid-d">
        <div className="vmsWriteUp-d">
          <h1>Discover The Perfect Volunteer Role.</h1>
          <p> 
            Our Volunteering Management System helps to discover opportunities that align with your values and passion, 
            while making a meaningful difference in the world. With a comprehensive database of volunteering roles and search assistant, 
            finding the perfect volunteer role is just a click away.
          </p>

          <div style={{'marginTop':'3rem'}}>
            <Btn/>
          </div>
        </div>
        <div className="vmsImage-d">
          <img src={find_apply} alt='usa_hands'/>
        </div>
      </div>
    </section>
  );
}

export default Hero;