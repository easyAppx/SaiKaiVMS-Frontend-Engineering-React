import React from "react";
import { useState, useRef } from 'react';
import 'styles/navbarTwo.css';
import cancel from 'Assets/Svg/cancel.svg';

const NavbarTwo = (props) =>{

  return(
    <section className="navbarSection">
      <header className="headerTwo">
        <center><h2>UI/UX Designer</h2></center>
        <img src={cancel} alt="cancel" onClick={props.close2}/>
      </header>
    </section>
  );
}

export default NavbarTwo;