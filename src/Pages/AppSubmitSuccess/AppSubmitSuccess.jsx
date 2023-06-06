import React from "react";
import { useEffect } from "react";
import Main from 'Components/Layouts/AppSubmitSuccess/Main/AppSubmitSuccess';
import NavbarTwo from 'Components/Layouts/AppSubmitSuccess/NavbarTwo/NavbarTwo';

const AppSubmitSuccess = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, ['top'])

  function popClose1(){
    props.doPopFour("hidden")
    props.doPop("visible")
  }

  function popClose2(){
    props.doPopFour("hidden")
    props.doPopTwo("visible")
  }

  function popClose3(){
    props.doPopFour("hidden")
    props.doPopThree("visible")
  }

  function popCloseFive(){
    props.doPopFive("hidden")
    window.location.reload();
  }

  function popOpenFive(){
    props.doPopFive("visible")
  }

  return(
    <div className="jobsOverlayBg">
      <div className="generalBgTwo" style={{marginTop: '4rem'}}>
        <NavbarTwo close5 = {popCloseFive}/>
        <Main close5 = {popCloseFive} popApp5 ={popOpenFive}/>
      </div>
    </div>
  );
}

export default AppSubmitSuccess;