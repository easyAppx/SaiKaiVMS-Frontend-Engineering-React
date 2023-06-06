import React from "react";
import { useEffect } from "react";
import Main from 'Components/Layouts/AppPage3/Main/Main3';
import NavbarTwo from 'Components/Layouts/AppPage3/NavbarTwo/NavbarTwo';
import Title from 'Components/Layouts/AppPage3/Title/Title';
import JobRoles from "Pages/JobRoles/JobRoles";

const AppPage3 = (props) => {
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, ['top'])

  function popClose1(){
    props.doPopThree("hidden")
    props.doPop("visible")
  }

  function popClose2(){
    props.doPopTwo("visible")
    props.doPopThree("hidden")
  }

  function popOpenThree(){
    props.doPopThree("visible")
  }

  function popCloseThree(){
    props.doPopThree("hidden")
  }

  function popOpenFour(){
    props.doPopFour("visible")
  }

  return(
    <div className="jobsOverlayBg">
      <div className="generalBgTwo">
        <NavbarTwo close3= {popCloseThree}/>
        <Title closePop1 = {popClose1}  closePop2 = {popClose2} popApp3 ={popOpenThree}/>
        <Main close3= {popCloseThree} popApp4 ={popOpenFour}/>
      </div>
    </div>
  );
}

export default AppPage3;