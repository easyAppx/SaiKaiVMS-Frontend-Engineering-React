import React from 'react';
import './hero5.css';
import sign_up from 'Assets/Images/hands_signup.png';
import Btn from 'Components/Utils/Buttons/ButtonOrange/Btn.jsx'

const Hero5 = () => {
  return (
    <section>
      <div className="container-fluid-6 flex">
        <div className="vmsSignUp">
          <h3>Sign up today and start making a difference!</h3>
          <p>
            Join us today and connect with thousands of volunteers around the world, 
            looking for that next big opportunity to bring positive change to the world.
          </p>
          <div style={{'marginTop':'5rem'}}>
            <Btn/>
          </div>
        </div>
        <div className="vmsImage5">
          <img src={sign_up} alt='sign_up'/>
        </div>
      </div>
    </section>
  );
}

export default Hero5;