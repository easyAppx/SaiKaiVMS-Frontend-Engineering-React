import React from "react";
import './main3.css';
import { useState, useRef } from "react";
import 'react-phone-input-2/lib/style.css';
import { Dropdown, Divider } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import CircleProgressLine3 from "Components/Utils/CircleProgressLine3/CircleProgressLine3";

const Main = (props) =>{

  const hrsOptions = [
    {
      key: '',
      text: '',
      value: '',
    },
    <Divider />,
    {
      key: '3-5 hours',
      text: '3-5 hours',
      value: '3-5 hours',
    },
    <Divider />,
    {
      key: '3-7 hours',
      text: '3-7 hours',
      value: '3-7 hours',
    },
    <Divider />,
    {
      key: '3-10 hours',
      text: '3-10 hours',
      value: '3-10 hours',
    },
    <Divider />,
    {
      key: '12 hours & above',
      text: '12 hours & above ',
      value: '12 hours & above',
    }
  ]

  const [deletePop, setDeletePop] = useState('close');
  const showDeletePop = (e)=>{
    setDeletePop('pop_out')
    e.preventDefault();
  };

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setDeletePop('close_pop')
    props.close3()
    props.popApp4()
  };
  
  const hideDeletePop = (e)=>{
    setDeletePop('close_pop')
    e.preventDefault();
  };

  function handleDelete(e){
    props.close3("hidden") 
    //e.preventDefault();
    setDeletePop('close_pop')
    window.location.reload();
  }

  const textareaRef = useRef(); 
  const cursorPosition = 0;

  return(
    <section className="mainInfo">
      <div className="appPage-content">

        <CircleProgressLine3/>

        <h1>Tell Us About Your Experience</h1>

        <h3>Please provide all Information required in the form below</h3>

        <div className="form">
          <div  className="cardDropdownFull">
            <div className="cardDropWrapper">
              <label className="droplabel" htmlFor="notice">How many Hours in a week can you volunteer for?</label>
              <Dropdown
                id="dropmenu"
                placeholder='Select years'
                fluid
                selection
                search
                options={hrsOptions}/>
            </div>
          </div>

          <div className="cardDropdownFull flex">
            <div className="cardDropWrapper"> 
              <div className="labelFlex flex">
                <label htmlFor="linkedin">Why do you want to join USAF?</label>
                <label className="textRange" htmlFor="linkedin">0/500 words</label>
              </div>
              <textarea ref={textareaRef} placeholder="tell us more"
                onBlur={() => textareaRef.current.setSelectionRange(cursorPosition, cursorPosition)} type="text"/>
            </div>
          </div>

          <div className="cardDropdownFull flex">
            <div className="cardDropWrapper"> 
              <div className="labelFlex flex">
                <label htmlFor="linkedin">Any additional Information</label>
                <label className="textRange" htmlFor="linkedin">0/500 words</label>
              </div>
              <textarea ref={textareaRef} placeholder="tell us more"
                onBlur={() => textareaRef.current.setSelectionRange(cursorPosition, cursorPosition)} type="text"/>
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
                <a href=""><button className="orangeYesBtn" onClick={handleDelete}>Yes, Cancel</button></a>
              </div>
            </div>
          </div>

          <div className="botton btnWht_Org flex">
            <a><button className="whiteBtn" onClick={showDeletePop}>Cancel Application</button></a>
            <a href="/"><button className="orangeBtn" onClick={handleSubmit} >Continue Application</button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main;