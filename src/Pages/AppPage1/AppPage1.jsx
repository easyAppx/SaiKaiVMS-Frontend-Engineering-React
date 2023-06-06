import React from "react";
import { useEffect, useRef  } from 'react';
import Main from 'Components/Layouts/AppPage1/Main/Main';
import NavbarTwo from 'Components/Layouts/AppPage1/NavbarTwo/NavbarTwo';
import Title from 'Components/Layouts/AppPage1/Title/Title';

const AppPage1 = (props) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, ['top'])

  function popClose(){
    props.doPop("hidden")
  }

  function popOpen(){
    props.doPop("visible")
  }

  function popOpenTwo(){
    props.doPopTwo("visible")
  }

  return(
    <div className="jobsOverlayBg" id="top">  
      <div className="generalBgTwo">
        <NavbarTwo close = {popClose}/>
        <Title open = {popOpen}/>
        <Main close = {popClose}  popApp2 = {popOpenTwo}/>
      </div>
    </div>
  );
}

export default AppPage1;