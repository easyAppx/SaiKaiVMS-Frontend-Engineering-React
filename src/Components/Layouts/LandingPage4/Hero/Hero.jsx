import React from 'react';
import './hero_lp4.css';
import connect from 'Assets/Images/connect.png';
import Btn from 'Components/Utils/Buttons/ButtonOrange/Btn.jsx'

const Hero = () => {
  return (
    <section>
      <div className="container-fluid-C">
        <div className="vmsWriteUp-C">
          <h1>Connect. Grow. Impact with Sai Kai</h1>
          <p>  
            Join the community of volunteers making a difference with our intuitive volunteer management system. 
            With features designed to connect you with others and collaborate effectively from a central location, 
            while making positive impact in your community
          </p>

          <div style={{'marginTop':'14rem'}}>
            <Btn/>
          </div>
        </div>
        <div className="vmsImage-C">
          <img src={connect} alt='usa_hands'/>
        </div>
      </div>
    </section>
  );
}

export default Hero;