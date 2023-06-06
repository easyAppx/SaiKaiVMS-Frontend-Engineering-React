import React from "react";
import { useEffect } from "react";
import Main from 'Components/Layouts/AppReviewPage/Main/Main4';
import NavbarTwo from 'Components/Layouts/AppReviewPage/NavbarTwo/NavbarTwo';
import Title from 'Components/Layouts/AppReviewPage/Title/Title';
import JobRoles from "Pages/JobRoles/JobRoles";

const AppPage3 = (props) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, ['top'])

  function popClose1(e){
    props.doPopFour("hidden")
    props.doPop("visible")
    e.preventDefault();
  }

  function popClose2(e){
    props.doPopFour("hidden")
    props.doPopTwo("visible")
    e.preventDefault();
  }

  function popClose3(e){
    props.doPopFour("hidden")
    props.doPopThree("visible")
    e.preventDefault();
  }

  function popOpenFour(){
    props.doPopFour("visible")
  }

  function popCloseFour(){
    props.doPopFour("hidden")
  }

  function popOpenFive(){
    props.doPopFive("visible")
  }

  return(
    <div className="jobsOverlayBg">
      <div className="generalBgTwo">
        <NavbarTwo close4= {popCloseFour}/>
        <Title closePop1 = {popClose1}  closePop2 = {popClose2} closePop3 = {popClose3} popApp4 ={popOpenFour}/>
        <Main closePop1 = {popClose1}  closePop2 = {popClose2} closePop3 = {popClose3} close4= {popCloseFour} popApp5 ={popOpenFive}/>
      </div>
    </div>
  );
}

export default AppPage3;