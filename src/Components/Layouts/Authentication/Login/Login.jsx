import React from "react";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import Header from "../Login2/LoginHeader";
import "./Login.css";
// eslint-disable-next-line no-unused-vars
import LoginBtn from "../Footer/Btn/btn";
import Footer from "../Footer/Footer";
// import Hide from "Assets/Svg/Vector.png"
import { eyeClosed } from "react-icons-kit/oct/eyeClosed";
import { eye } from "react-icons-kit/oct/eye";

function Login() {
  const [type, setType] = useState("password");
  // const [Show, setShow] = useState(eyeClosed);

  const toggleShowPassword = (e) => {
   e.preventDefault()
   e.stopPropagation()
   let currentType = type === "password" ? "text" : "password"
   setType(currentType)
 }
  return (
    <section>
      <Header title="Welcome Back" />
      <div className="Login__Form__Container ">
        <div className="Login__Form__Container__Input">
          <legend>Email</legend>
          <input type="text" placeholder="John" />
          <legend>Enter Password</legend>
          <input type={type} placeholder="Doe" />
          {/* <img src ={Hide} onClick={toggleShowPassword} className="Signup__toggle" alt="hide" /> */}
          {/* <type={Type} className="Signup__toggle" onClick={toggleShowPassword} /> */}
            
          <Icon  icon={type === "password" ? eye : eyeClosed } size={30} style={{marginLeft:-50, cursor:"pointer", color:" #EB6223"}} 
          onClick={toggleShowPassword}/>
         
          <a href="/JobRoles"><LoginBtn text="Log In"/></a>
        
          <Footer
            title="Don't have any account"
            link="Signup"
            link3="/Signup"
            link2="Forget Password"
            link4="/password"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
