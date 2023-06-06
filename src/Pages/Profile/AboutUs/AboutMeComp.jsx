import React from "react";
import editPen from "Assets/Svg/editPen.svg";
import "./aboutUs.css";

const AboutMeComp = ({ ...data }) => {
  return (
    <div className="about-me-body">
      <div className="about-me-body-top">
        <h6>{data?.title}</h6>
        <img src={editPen} className="" alt="" />
      </div>
      <div className="">
        {data?.title === "Basics" ? (
          <div className="about-me-body-bottom">
            <section>
              <h6>Email</h6>
              <span>{data?.email}</span>
            </section>
            <section>
              <h6>Nationality</h6>
              <span>{data?.nationality}</span>
            </section>
            <section>
              <h6>City</h6>
              <span>{data?.city}</span>
            </section>
            <section>
              <h6>Phone Number</h6>
              <span>{data?.phoneNumber}</span>
            </section>
            <section>
              <h6>Resume</h6>
              <span>{data?.resume}</span>
            </section>
          </div>
        ) : (
          <div className="about-me-body-bottom-default">
            <h6>You have not added any {data?.title}</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMeComp;
