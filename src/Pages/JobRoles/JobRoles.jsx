import React from "react";
import { useState } from "react";
import Main from 'Components/Layouts/JobRoles/Main/Main';
import Navbar from 'Components/Layouts/NavbarLoggedIn/NavbarLoggedIn';
import Jobs from 'Components/Layouts/JobRoles/Jobs/Jobs';
import Footer from 'Components/Layouts/Footer/Footer';

const JobRoles = (props) => {

  //popbody style
  const [bodyStyle, setBodyStyle] = useState("normal")
  function fixed(){
    setBodyStyle("fixed");
  }
  function normal(){
    setBodyStyle("normal");
  }
    return(
      <div id="scroll" className={bodyStyle}>
        <Navbar/>
        <Main/>
        <Jobs call={bodyStyle => setBodyStyle(bodyStyle)}/>
        <Footer/>
      </div>
    );
}

export default JobRoles;