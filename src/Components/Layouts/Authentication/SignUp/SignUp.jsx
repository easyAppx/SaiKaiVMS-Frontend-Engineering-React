import React from "react";
import { useState } from "react";
import "./SignUP.css";
import Header from "../Login2/LoginHeader";
import LoginBtn from "../Footer/Btn/btn";
import Footer from "../Footer/Footer";
// import Hide from "Assets/Svg/Vector.png"
import { useForm } from "react-hook-form";
import { eyeClosed } from "react-icons-kit/oct/eyeClosed";
import { eye } from "react-icons-kit/oct/eye";
import { Icon } from "react-icons-kit";
import { arrows_exclamation } from "react-icons-kit/linea/arrows_exclamation";
import { arrows_circle_check } from "react-icons-kit/linea/arrows_circle_check";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// eslint-disable-next-line no-undef
// This functional component renders the login page of the application
const Login = () => {
  const schema = yup.object().shape({
    FirstName: yup.string().required("Please enter your first name."),
    LastName: yup.string().required("Please enter your Lat name."),
    Email: yup.string().email().required("Please enter a valid email address."),
    Password: yup.string().min(4).max(20).required("Please confirm your password. The passwords you entered do not match"),
    ConfirmPassword: yup
      .string()
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

  return (
    <section>

      <Header title="  Join our Volunteer Team and Make a Difference in Your Community" />
      <div className="SignUp__Form__Container ">
        <div className="SignUp__Form__Container__Input">
          <form onSubmit={handleSubmit(onsubmit)}>
            <legend>First Name</legend>
            <input type="text" placeholder="John" {...register("FirstName")} />
            <p className="p">{errors.FirstName?.message}</p>

            <legend>Last Name</legend>
            <input type="text" placeholder="Doe" {...register("LastName")} />
            <p className="p">{errors.LastName?.message}</p>
            <legend>Email</legend>
            <input
              type="email"
              placeholder="Johndoe@gmail.com"
              {...register("Email")}
              autoComplete="username"
            />
              <p className="p">{errors.Email?.message}</p>
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
            <a href="/JobRoles"><LoginBtn text="Sign up"/></a>
            <Footer
              title="Already have an account? "
              link="LogIn"
              link3="/LogIn"
              anchor="/ForgetPassword"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

// Password hide and show image  // animation
// Button outside padding
//  Google padding up to the edge

// Font size
