import React from "react";
import "./Reset.css";
import { useEffect } from "react";
import { useRef } from "react";
import Hide from "Assets/Images/Check-Mark.png";

function Modal(props) {
  useEffect(() => {
    console.log("hello");
    if (props.show) {
      document.body.classList.add("modal-open");
      document.getElementById("form-container").classList.add("dark");
    } else {
      document.body.classList.remove("modal-open");
      document.getElementById("form-container").classList.remove("dark");
    }
  }, [props.show]);

  // }, [props.show]);

  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      props.onClose();
      console.log("close");
    }
  };

  return (
    <div
      className="modal wrap"
      style={{ display: props.show ? "block" : "none" }}
      onClick={handleClickOutside}
    >
      {/* <span className="close" onClick={props.onClose}>&times;</span> */}
      <p onClick={props.onClose} className="close">
        &times;
      </p>
      <div className="modal-content">
        <span className="Modal__check_mark">
          <img src={Hide} alt="" />
        </span>
        <h1 className="Modal__Header">Password Changed Successfully</h1>
        <h5 className="Modal__Header5">
          Please click the link provided in your mail to check your application
          status
        </h5>
        <div className="bnOrang" Id="LG__">
          <a href="/">
            <button className="rangeBtn" id="LG">
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
