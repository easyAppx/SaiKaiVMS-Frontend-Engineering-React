import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { Navbar } from 'Components/Layouts/Navbar'
import Google from 'Assets/Svg/google-logo.svg';
import "./LoginHeader.css"

function LoginHeader(props) {
  return (
    <section>
      {/* Import the Navbar component to display the navigation bar */}
      <Navbar />
      {/* The login page header */}
      <div className="Login">
        <h1 className="Login__h1"> 
            {props.title}
        </h1>
      </div>
      {/* Social media buttons for Google and LinkedIn */}
      <div className="Login__SocialButton">
        <div className="Login__SocialButton__SocialMedia">
          {/* Google login button */}
          <button className="Login__SocialButton__SocialMedia__Google">
            <img src={Google} alt="" width={4} />
            <span style={{ display: 'inline' }}> Join with  Google</span>
          </button>
          {/* LinkedIn login button */}
          <button className="Login__SocialButton__SocialMedia__LinkedIn">
            <span> <FaLinkedinIn width={40}/> Join with  LinkedIn</span>
          </button>
        </div>
      </div>
      <h4 className="Login__Middle">OR</h4>
    </section>
  )
}

export default LoginHeader