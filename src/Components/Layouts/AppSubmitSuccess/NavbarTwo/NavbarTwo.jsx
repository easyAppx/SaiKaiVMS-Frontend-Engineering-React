import React from "react";
import { useState, useRef } from 'react';
import './navbarTwoSuccess.css';
// import { useNavigate } from 'react-router-dom';
import cancel from 'Assets/Svg/cancel.svg';

const NavbarTwo = (props) =>{

  return(
    <section className="navbarSection">
      <header className="headerSuccess">
        <center><h2>UI/UX Designer</h2></center>
        <img src={cancel} alt="cancel" onClick={props.close5}/>
      </header>
    </section>
  );
}

export default NavbarTwo;