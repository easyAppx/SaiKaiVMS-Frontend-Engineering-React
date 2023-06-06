import React from "react";
import './main.css';
import homeHandsImg from 'Assets/Images/home_hands_img.png';

const Main = () =>{
    return(
        <section>
            <div className="bgImg">
                <img src={homeHandsImg} alt="homeHandImg"/>
            </div>
            <div className="main-1">
                <div className="content">
                    <h1>Sa Kai Volunteer System</h1>
                    <p>
                        This area contains an introductory text into USAF. This area contains an introductory text into USAF.
                        This area contains an introductory text into USAF. This area contains an introductory text into USAF.
                        This area contains an introductory text into USAF. This area contains an introductory text into USAF. 
                        This area contains an introductory text into USAF. This area contains an introductory text into USAF.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Main;