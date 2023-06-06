import React from "react";
import './main2.css';
import { useState, useRef } from "react";
import { Dropdown } from 'semantic-ui-react'
import Rate from "Components/Utils/Ratings/Rate";
import { useNavigate } from 'react-router-dom';
import { Divider, List, ListItem } from 'semantic-ui-react'
import {tech_languages} from 'Components/Data/tech_languages.js'
import CircleProgressLine2 from "Components/Utils/CircleProgressLine2/CircleProgressLine2";

const Main = (props) =>{

  const expYrsOptions = [
    {
      key: '',
      text: '',
      value: '',
    },
    <Divider />,
    {
      key: '0',
      text: '0',
      value: '0',
    },
    <Divider />,
    {
      key: '1-2 years',
      text: '1-2 years',
      value: '1-2 years',
    },
    <Divider />,
    {
      key: '2-3 years',
      text: '2-3 years',
      value: '2-3 years',
    },
    <Divider />,
    {
      key: '3 & above years',
      text: '3 & above years ',
      value: '3 & above years',
    }
  ]

  const [deletePop, setDeletePop] = useState('close');
  const showDeletePop = (e)=>{
    setDeletePop('pop_out')
    e.preventDefault();
  };

  const hideDeletePop = (e)=>{
    setDeletePop('close_pop')
    e.preventDefault();
  };

  function handleDelete(e){
    //e.preventDefault();
    props.close2("hidden")
    setDeletePop('close_pop')
    window.location.reload();
  }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setDeletePop('close_pop')
    props.close2() 
    props.popApp3()
  };

  const [ratng, setRatng] = useState(0) // initial rating value
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  const textareaRef = useRef(); 
  const cursorPosition = 0;

  const [rating, setRating] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);


  return(
    <section className="mainInfo" id="top">
      <div className="appPage-content">
        
        <CircleProgressLine2/>

        <h1>Tell Us About Your Experience</h1>

        <h3>Please provide all Information required in the form below</h3>

        <div className="form">
          <div  className="cardDropdownFull">
            <div className="cardDropWrapper">
              <label htmlFor="notice">Years Of Experience In UI/UX Design</label>
              <Dropdown
                id="dropmenu"
                class="ui fluid multiple selection dropdown"
                placeholder='Select years'
                fluid
                selection
                search
                options={expYrsOptions}/>
            </div>
          </div>

          <div className="cardDropdownFull">
            <div className="cardDropWrapper">
              <label htmlFor="list">Required Skills / Language</label>
              <div  className="skill_list flex">
                <li>User Experience Design</li>
                <li>Figma</li>
                <li>User Interface Design</li>
              </div>
            </div>
          </div>

          <div className="cardDropdownFull">
            <div className="cardDropWrapper">
              <label htmlFor="list">Rate Your Skill Proficiency</label>
                <div className="ratings flex">
                  <li>User Experience Design</li>
                  <div className="grp">
                    <Rate rating={rating} onRating={(rate) => setRating(rate)} count={10}/>
                    <button className="rateButton">{rating}</button>
                  </div>
                </div>

              <div className="ratings">
                <li>Figma</li>
                <div className="grp">
                  <Rate rating={rating2} onRating={(rate) => setRating2(rate)} count={10}/>
                  <button className="rateButton">{rating2}</button>
                </div>
              </div>

              <div className="ratings">
                <li>User Interface Design</li>
                <div className="grp">
                  <Rate rating={rating3} onRating={(rate) => setRating3(rate)} count={10}/>
                  <button className="rateButton">{rating3}</button>
                </div>
              </div>
            </div>
          </div>

          <div  className="cardDropdownFull">
            <div className="cardDropWrapper">
              <label htmlFor="notice">Additional Skills / Language</label>
              <Dropdown
                id="dropmultiple"
                class="ui fluid multiple selection dropdown"
                placeholder='Search by Skills, Language or Frameworks...'
                fluid
                selection
                search
                multiple
                options={tech_languages}/>
            </div>
          </div>

          <div className="cardDropdownFull flex">
            <div className="cardDropWrapper">
              <label htmlFor="list">Rate Your Skill Proficiency</label>
                <div className="ratings ">
                  <li>Graphic Designer</li>
                  <div className="grp">
                    <Rate rating={rating4} onRating={(rate) => setRating4(rate)} count={10}/>
                    <button className="rateButton">{rating4}</button>
                  </div>
                </div>
            </div>
          </div>

          <div className="cardDropdownFull flex">
            <div className="cardDropWrapper">
              <label htmlFor="email">Personal Website / Portfolio Link (Behance,Dribbble e.t.c) / Github</label>
              <input type="text" placeholder='http://www.portfolio.com' className="portfolio" />
            </div>
          </div>

          <div className="cardDropdownFull flex">
            <div className="cardDropWrapper"> 
              <label htmlFor="name">Do You Have Experience as a Volunteer?</label>
              <div className="exp-btn flex">
                <a><button className="yesBtn">Yes</button></a>
                <a><button className="noBtn">No</button></a>
              </div>
            </div>
          </div>

          <div className="cardDropdownFull flex">
            <div className="cardDropWrapper"> 
              <label className="droplabel" htmlFor="notice">How many years of experience do you have as a volunteer?</label>
              <Dropdown
                id="dropmenu"
                placeholder='Select years'
                fluid
                selection
                search
                options={expYrsOptions}
              />
            </div>
          </div>

          <div className="cardDropdownFull flex">
            <div className="cardDropWrapper"> 
              <div className="labelFlex flex">
                <label  htmlFor="linkedin">Briefly describe your experience as a volunteer</label>
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