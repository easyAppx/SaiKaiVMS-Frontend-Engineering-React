import React from "react";
import './main4.css';
import 'react-phone-input-2/lib/style.css';
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

const Main = (props) =>{

  const [deletePop, setDeletePop] = useState('close');
  const showDeletePop = (e)=>{
    setDeletePop('pop_out')
    e.preventDefault();
  };

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setDeletePop('close_pop')
    props.close4()
    props.popApp5()
  };
  
  const hideDeletePop = (e)=>{
    setDeletePop('close_pop')
    e.preventDefault();
  };

  function handleDelete(e){
    props.close4("hidden") 
    // e.preventDefault();
    setDeletePop('close_pop')
    window.location.reload();
  }

  return(
    <section className="mainInfo mainEdit">
      <div className="appPage-content">

        <div className="action_edit_btn flex">
          <h2>Application Page I</h2>
          <a onClick={props.closePop1}><button className="whiteEditBtn">Edit</button></a>
        </div>
    
        <div className="form flex">
          <div className="cardDetails">
            <div className="personalDetails grid">
              <label className="label">First Name</label>
              <text className="text">Jane</text>
            </div>
            <div className="personalDetails grid">
              <label className="label">Country Code</label>
              <text className="text">+234</text>
            </div>
            <div className="personalDetails grid">
              <label className="label">City</label>
              <text className="text">Lagos</text>
            </div>
            <div className="personalDetails grid">
              <label className="label">Email</label>
              <text className="text">Jane@gmail.com</text>
            </div>
          </div>

          <div className="cardDetails rightArm">
            <div className="personalDetails grid">
              <label className="label">Last Name</label>
              <text className="text">Doe</text>
            </div>
            <div className="personalDetails grid">
              <label className="label">Phone Number</label>
              <text className="text">8131907599</text>
            </div>
            <div className="personalDetails grid">
              <label className="label">Country</label>
              <text className="text">Nigeria</text>
            </div>
            <div className="personalDetails grid">
              <label className="label">CV</label>
              <text className="text">Jane_Doe_Resume.pdf</text>
            </div>
          </div>
        </div>

        <div className="body_line">
          <hr className="line"/>
        </div>

        <div className="action_edit_btn flex">
          <h2>Application Page II</h2>
          <a onClick={props.closePop2}><button className="whiteEditBtn">Edit</button></a>
        </div>

        <div className="form flex">
          <div className="cardDetails">
            <div className="personalDetails grid">
              <label className="label">Years of Experience</label>
              <text className="text">2-3</text>
            </div>
            <div className="personalDetails grid">
              <label className="label">Skills</label>
              <text className="textSkill">Figma <span className="spanRate">8/10</span></text>
              <text className="textSkill">User Experience Design <span className="spanRate">5/10</span></text>
              <text className="textSkill">User Interface Design <span className="spanRate">9/10</span></text>
            </div>
            <div className="personalDetails grid">
              <label className="label">Has experience as a Volunteer</label>
              <text className="text">Yes</text>
            </div>
            <div className="personalDetails grid">
              <label className="label">Years of experience as a Volunteer</label>
              <text className="text">0-1</text>
            </div>
            <div className="personalDetails grid">
              <label className="label">Describe experience as a volunteer</label>
              <p className="text userExp">
                This area contains the applicants description of their experience as a volunteer. 
                This area contains the applicants description of their experience as a volunteer. 
                This area contains the applicants description of their experience as a volunteer. 
                This area contains the applicants description of their experience as a volunteer. 
                This area contains the applicants description of their experience as a volunteer.
              </p>
            </div>
          </div>
        </div>
        
        <div className="body_line">
          <hr className="line"/>
        </div>

        <div className="action_edit_btn flex">
          <h2>Application Page III</h2>
          <a onClick={props.closePop3}><button className="whiteEditBtn">Edit</button></a>
        </div>

        <div className="form flex">
          <div className="cardDetails">
            <div className="personalDetails grid">
              <label className="label">Hours in a week for volunteering</label>
              <text className="text">20 hours and above</text>
            </div>
            <div className="personalDetails grid">
              <label className="label">Why do you want to join USAF</label>
              <p className="text userExp">
                This area contains the reasons why the applicant wants to join USAF. 
                This area contains the reasons why the applicant wants to join USAF. 
                This area contains the reasons why the applicant wants to join USAF. 
                This area contains the reasons why the applicant wants to join USAF. 
                This area contains the reasons why the applicant wants to join USAF.
              </p>
            </div>
            <div className="personalDetails grid">
              <label className="label">Additional Information</label>
              <p className="text userExp">
                This area contains the any additional information the applicant might have. 
                This area contains the any additional information the applicant might have. 
                This area contains the any additional information the applicant might have. 
                This area contains the any additional information the applicant might have. 
                This area contains the any additional information the applicant might have. 
              </p>
            </div>
          </div>
        </div>

        <div className="delete_pop_body">
          <div className={deletePop} id='popHead'>
            <h1>Are You sure You Want  To Delete This Application?</h1>
            <div className="deleteInfo">
            <center><p>
                Please Press the “Yes, Delete” button below to delete the application.<br/>
                <center>or</center>
                Please press the cancel the deleting process with the “No, Cancel” button.
              </p></center>
            </div>
            <div className="yes_no_botton flex">
              <a href=""><button className="whiteNoBtn" onClick={hideDeletePop}>No, Cancel</button></a>
              <a href=""><button className="orangeYesBtn" onClick={handleDelete}>Yes, Delete</button></a>
            </div>
          </div>
        </div>

        <div className="botton btnWht_Org flex">
          <a><button className="whiteBtn" onClick={showDeletePop}>Delete Application</button></a>
          <a href="/AppSubmitSuccess"><button className="orangeBtn" onClick={handleSubmit} >Continue Application</button></a>
        </div>

      </div>
    </section>
  )
}

export default Main;