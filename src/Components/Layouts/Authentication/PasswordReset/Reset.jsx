import { Navbar } from 'Components/Layouts/Navbar'
import React from 'react'
import "./Reset.css"
import Modal from './ResetSuccessful';
import { useState } from "react";
import { useForm } from "react-hook-form";
import LoginBtn from "../Footer/Btn/btn";
import { eyeClosed } from "react-icons-kit/oct/eyeClosed";
import { eye } from "react-icons-kit/oct/eye";
import { Icon } from "react-icons-kit";
import { arrows_exclamation } from "react-icons-kit/linea/arrows_exclamation";
import { arrows_circle_check } from "react-icons-kit/linea/arrows_circle_check";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Reset(props) {
      
    const schema = yup.object().shape({
        Password: yup.string().min(4).max(20).required("Please confirm your password. The passwords you entered do not match"),
        ConfirmPassword: yup
          .string()

          .oneOf([yup.ref("Password"), null], "Please confirm your password. The passwords you entered does not match")

          .oneOf([yup.ref("Password"), null], "Please confirm your password. The passwords you entered do not match")

          .required(),
      });
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
      console.log(errors);
      const onsubmit = (data, e) => {
        console.log(data);
        e.preventDefault();
        e.stopPropagation();
      };
      const [type, setType] = useState("password");
      //  const [Show, setShow] = useState(eyeClosed);
    
      const toggleShowPassword = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let currentType = type === "password" ? "text" : "password";
        setType(currentType);
      };

      const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState("");

  const handleChange = (value) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");
    if (lower.test(value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
  };

  const handlePassword = (passwordValue) => {
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strength =
      verifiedList.length == 5
        ? "Strong"
        : verifiedList.length >= 2
        ? "Medium"
        : "Weak";

    setPassword(passwordValue);
    setProgress(`${(verifiedList.length / 5) * 100}%`);
    setMessage(strength);

    console.log("verifiedList: ", `${(verifiedList.length / 5) * 100}%`);
  };
  const getActiveColor = (type) => {
    if (type === "Strong") return "#8BC926";
    if (type === "Medium") return "#FEBD01";
    return "#FF0054";
  };

  const [showModal, setShowModal] = useState(false);

  function handleSignup() {
    setShowModal(true);
    console.log("clicked")
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
   <div>
     <Navbar/>
     <section className='Reset'>
     <form className={showModal ? "dark" : "Reset__form__container"} id="form-container" onSubmit={handleSubmit(onsubmit)}>
        <legend>Enter Password</legend>
            <input
              type={type}
              placeholder="|"
              {...register("Password")}
              onChange={(e) => {
                handleChange(e.target.value);
                handlePassword(e.target.value);
              }}
              autoComplete="new-password"
            />
              <p className="p1">{errors.Password?.message}</p>
            {/* <p> {errors.password} </p> */}
            {/* <p>{errors.password}</p> */}
            {/* <img src ={Hide} onClick={toggleShowPassword} className="toggle" alt="hide" /> */}
            <Icon
              icon={type === "password" ? eye : eyeClosed}
              size={30}
              style={{ marginLeft: -50, cursor: "pointer", color: " #EB6223" }}
              onClick={toggleShowPassword}
            />
            <br /> <br />
            {/* <div className="Password"> */}
           
              {" "}
              <b id="b">Password strength</b>{" "}
              <span className="strength">
              {password.length !== 0 ? (
                <p
                  className="message"
                  style={{ color: getActiveColor(message) }}
                >
                  {message}
                </p>
              ) : null}
            </span>
            <div className="progress-bg">
              <div
                className="progress"
                style={{
                  width: progress,
                  backgroundColor: getActiveColor(message),
                }}
              ></div>
              {/* validation tracker */}
              <main className="tracker-box">
                <div className={lowerValidated ? "validated" : "not-validated"}>
                  {lowerValidated ? (
                    <span className="list-icon green">
                      <Icon icon={arrows_circle_check} />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <Icon icon={arrows_exclamation} />
                    </span>
                  )}
                  At least one lowercase letter
                </div>
                <div className={upperValidated ? "validated" : "not-validated"}>
                  {upperValidated ? (
                    <span className="list-icon green">
                      <Icon icon={arrows_circle_check} />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <Icon icon={arrows_exclamation} />
                    </span>
                  )}
                  At least one uppercase letter
                </div>
                <div
                  className={numberValidated ? "validated" : "not-validated"}
                >
                  {numberValidated ? (
                    <span className="list-icon green">
                      <Icon icon={arrows_circle_check} />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <Icon icon={arrows_exclamation} />
                    </span>
                  )}
                  At least one number
                </div>
                <div
                  className={specialValidated ? "validated" : "not-validated"}
                >
                  {specialValidated ? (
                    <span className="list-icon green">
                      <Icon icon={arrows_circle_check} />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <Icon icon={arrows_exclamation} />
                    </span>
                  )}
                  At least one special character
                </div>
                <div
                  className={lengthValidated ? "validated" : "not-validated"}
                >
                  {lengthValidated ? (
                    <span className="list-icon green">
                      <Icon icon={arrows_circle_check} />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <Icon icon={arrows_exclamation} />
                    </span>
                  )}
                  At least 8 characters
                </div>
              </main>
            </div>
            <legend>Repeat Password</legend>
            <input
              type={type}
              placeholder="|"
              {...register("ConfirmPassword")}
              autoComplete="ConfirmPassword"
            />
              <p className="p1">{errors.ConfirmPassword?.message}</p>
            {/* <img src ={Hide} onClick={toggleShowPassword} className="Signup__toggle" alt="hide" /> */}
            <Icon
              icon={type === "password" ? eye : eyeClosed}
              size={30}
              style={{ marginLeft: -50, cursor: "pointer", color: " #EB6223" }}
              onClick={toggleShowPassword}
            />
            <p>{errors.confirmPassword}</p>
            {/* <LoginBtn text="Sign up "  onClick={handleSignup} /> */}
            <div className='btnOrang'>
            <a href='/'><button className='angeBtn'  id="move" onClick={handleSignup} >Login</button></a>
            </div>
          
        </form>
        <Modal show={showModal} onClose={handleClose} />
    </section>
    </div>
  )
}

export default Reset
    
    

