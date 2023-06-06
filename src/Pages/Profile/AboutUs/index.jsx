import React from "react";
import { ProfileWrapper } from "Components/Layouts/ProfileWrapper";
import profileImage from "Assets/Images/profilePic.png";
import editPen from "Assets/Svg/editPen.svg";
import "./aboutUs.css";
import AboutMeComp from "./AboutMeComp";

const aboutMeDetails = [
  {
    id: 1,
    title: "Basics",
    email: "dorathyjohnson@gmail.com",
    nationality: "Nigerian",
    city: "lagos",
    phoneNumber: "(+234) 0812345678",
    resume: "Dora_Johnson_CV.pdf",
  },
  {
    id: 2,
    title: "Work Experience",
    email: "",
    nationality: "",
    city: "",
    phoneNumber: "",
    resume: "",
  },
  {
    id: 3,
    title: "Skills",
    email: "",
    nationality: "",
    city: "",
    phoneNumber: "",
    resume: "",
  },
  {
    id: 4,
    title: "Education",
    email: "",
    nationality: "",
    city: "",
    phoneNumber: "",
    resume: "",
  },
  {
    id: 5,
    title: "Interests",
    email: "",
    nationality: "",
    city: "",
    phoneNumber: "",
    resume: "",
  },
];

const Profile = () => {
  return (
    <ProfileWrapper link="About Me">
      <div className="about-us-wrapper">
        <div className="about-us-head">
          <div className="about-us-head-container">
            {/* <div> */}
            <img src={profileImage} className="about-us-profile-image" alt="" />
            {/* </div> */}
            <div className="about-us-head-sub-wrapper">
              <span className="about-us-head-sub-container">
                <h4>Name</h4>
                <img src={editPen} className="" alt="" />
              </span>
              <h6>Job Title</h6>
              <h6>Age</h6>
              <h6>Headline</h6>
            </div>
          </div>
          <div>
            <img src={profileImage} className="about-us-profile-image" alt="" />
          </div>
        </div>
        {aboutMeDetails?.map((data) => (
          <AboutMeComp key={data.id} {...data} />
        ))}
        {/* <div className="about-me-body">
          <div className="about-me-body-top">
            <h6>Basics</h6>
            <img src={editPen} className="" alt="" />
          </div>
          <div className="about-me-body-bottom">
            <section>
              <h6>Email</h6>
              <span>dorathyjohnson@gmail.com</span>
            </section>
            <section>
              <h6>Nationality</h6>
              <span>Nigeria</span>
            </section>
            <section>
              <h6>City</h6>
              <span>Lagos</span>
            </section>
            <section>
              <h6>Phone Number</h6>
              <span>(+234) 0812345678</span>
            </section>
            <section>
              <h6>Resume</h6>
              <span>Dora_Johnson_CV.pdf</span>
            </section>
          </div>
        </div> */}
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
