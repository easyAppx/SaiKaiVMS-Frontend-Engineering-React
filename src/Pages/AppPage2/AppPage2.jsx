import React, { useEffect } from "react";
import Main from 'Components/Layouts/AppPage2/Main/Main2';
import NavbarTwo from 'Components/Layouts/AppPage2/NavbarTwo/NavbarTwo';
import Title from 'Components/Layouts/AppPage2/Title/Title';

const AppPage2 = (props) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, ['top'])

  function popCloseTwo(){
    props.doPopTwo("hidden")
  }

  function popClose(){
    props.doPopTwo("hidden")
    props.doPop("visible")
  }

  function popOpenTwo(){
    props.doPopTwo("visible")
  }

  function popOpenThree(){
    props.doPopThree("visible")
  }

  return(
    <div className="jobsOverlayBg" id="top">
      <div className="generalBgTwo">
        <NavbarTwo close2= {popCloseTwo}/>
        <Title closePop = {popClose} popApp2 ={popOpenTwo}/>
        <Main  close2= {popCloseTwo} popApp3 ={popOpenThree}/>
      </div>
    </div>
  );
}

export default AppPage2;