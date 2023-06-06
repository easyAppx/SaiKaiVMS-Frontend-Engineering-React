import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'styles/index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobRoles from "./Pages/JobRoles/JobRoles";
import JobDescription from "./Pages/JobDescription/JobDescription";
// import AppPage1 from "./Pages/AppPage1/AppPage1";
// import AppPage2 from "./Pages/AppPage2/AppPage2";
// import AppPage3 from "./Pages/AppPage3/AppPage3";
// import AppReviewPage from "./Pages/AppReviewPage/AppReviewPage";
// import AppSubmitSuccess from "./Pages/AppSubmitSuccess/AppSubmitSuccess";
import LandingPage2 from "Pages/LandingPage2/LandingPage2";
import LandingPage3 from "Pages/LandingPage3/LandingPage3";
import LandingPage4 from "Pages/LandingPage4/LandingPage4";
import Signup from "Components/Layouts/Authentication/SignUp/SignUp";
import Login from "Components/Layouts/Authentication/Login/Login";
import Success from "Components/Layouts/Authentication/SuccesPage/Success";
import ForgetPassowrd from "Components/Layouts/Authentication/Forgetpassword/password";
import Reset from "Components/Layouts/Authentication/PasswordReset/Reset";
import { AboutUs, Application, Settings } from "Pages/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/JobRoles" element={<JobRoles />} />
      <Route path="/JobDescription" element={<JobDescription />} />
      {/* <Route path="/AppPage1" element={<AppPage1 />} />
      <Route path="/AppPage2" element={<AppPage2 />} />
      <Route path="/AppPage3" element={<AppPage3 />} />
      <Route path="/AppReviewPage" element={<AppReviewPage />} />
      <Route path="/AppSubmitSuccess" element={<AppSubmitSuccess />} /> */}
      <Route path="/LandingPage2" element={<LandingPage2 />} />
      <Route path="/LandingPage3" element={<LandingPage3 />} />
      <Route path="/LandingPage4" element={<LandingPage4 />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Success" element={<Success />} />
      <Route path="/password" element={<ForgetPassowrd />} />
      <Route path="/Reset" element={<Reset />} />
      <Route path="/Profile/AboutMe" element={<AboutUs />} />
      <Route path="/Profile/Application" element={<Application />} />
      <Route path="/Profile/Settings" element={<Settings />} />
    </Routes>
  </Router>
);
