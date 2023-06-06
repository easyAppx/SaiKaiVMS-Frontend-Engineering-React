import React from "react";
import { useState } from "react";
import Main from 'Components/Layouts/JobDescription/Main/Main';
import Navbar from 'Components/Layouts/NavbarLoggedIn/NavbarLoggedIn';
import Title from 'Components/Layouts/JobDescription/Title/Title';
import Footer from 'Components/Layouts/Footer/Footer';

const JobDescription = () => {

    //popbody style
    const [bodyStyle, setBodyStyle] = useState("normal")
    function fixed(){
        setBodyStyle("fixed");
    }
    function normal(){
        setBodyStyle("normal");
    }

    return(
        <div id="generalBg" className={bodyStyle}>
            <Navbar/>
            <Title/>
            <Main call={bodyStyle => setBodyStyle(bodyStyle)}/>
            <Footer/>
        </div>
    );
}

export default JobDescription;