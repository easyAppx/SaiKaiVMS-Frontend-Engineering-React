import React from 'react';
import './main.css';
import { useState, useRef, useEffect } from "react";
import validate from 'Components/Validations/profileValidation';
import statesjson from 'Components/Data/statesjson.json'
import { countryOptions } from 'Components/Data/countryNameFlags.js';
import ellipseUpld from 'Assets/Images/ellipseUpload.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.css'; 
import dropvector from 'Assets/Svg/dropVector.svg';
import { Dropdown, Form, Button } from 'semantic-ui-react';
import CircleProgressLine from "Components/Utils/CircleProgressLine/CircleProgressLine";

const Main = (...props) =>{
                
  // country json map
  const stateOptions = statesjson.allStates.map(({Id, state}) => ({ value: Id, text: state}));

  // others textarea
  const [dropshow, setDropShow] = useState('close');
  const showDrop = ()=>{
    setDropShow('open_out')
  };
  const hideDrop = ()=>{
    setDropShow('close_out')
  };

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
    if(! (validate.length === 0)){
      e.preventDefault();
      props.close("hidden")
      setDeletePop('close_pop')
      window.location.reload();
    }
  }
 
  // form validation 
  const initialValues = {firstname:"", lastname:"", email:"", linkedin:""};

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isDataCorrect, setIsDataCorrect] = useState(false);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});   
    setFormErrors(validate(formValues));
    setIsDataCorrect(true);
    //setFormValues({...formValues, [event.target.name]: event.target.value,});
  };

  const navigate = useNavigate();

  //Phone-number-input validate state
  const { register, control, handleSubmit, formState: { errors }, setFocus} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // handle form submission
    if (Object.keys(errors).length === 0) {
      // navigate to another page
    }
  }; 

  const openPop = () =>{
    props.close() 
    props.popApp2()
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(onSubmit)(event);
    handleDropdownChange();
    handleNextPage();
    handleOptionSubmit();
    setFormErrors(validate(formValues));
    setIsDataCorrect(true);

    if (validate.length === 0) { 
      openPop(event)
    }else{
      navigate('')
    }
  };

  useEffect ((event) => { 
    if (Object.keys(formErrors).length === 0 && isDataCorrect && Object.keys(errors).length === 0 && (files) && (chosen !== "Select One"))  { 
      openPop(event)
    }
    else{
      navigate('')
    }
  }, [formErrors]);
  // end of validation..

  //semantic ui dropdown validation
  const [selectedCountry, setSelectedCountry] = useState('af');
  const [semerror, setSemerror] = useState('');

  const validateCountry = () => {
    if (selectedCountry === '') {
      setSemerror('Please select a country');
      return false;
    }
    setSemerror('');
    return true;
  };

  const handleDropdownChange = (event, data) => {
    setSelectedCountry(data);
    validateCountry();
  };

  // btw appPages
  const [display, setDisplay] = useState('hideOverlay');
  const overlayShow = ()=>{
    setDisplay('showOverlay')
  };
  const overlayHide = ()=>{
    setDisplay('hideOverlay')
  };

  //dropdown function
  const options = [ "Select One", "LinkedIn", "Facebook", "Instagram" ];
  const option2 = [ "others" ];

  const [isActive, setIsActive] = useState(false)
  const [chosen, setChosen] = useState("Select One");

  //dropdown validation
  const [dropError, setDropError] = useState('');
  const handleOptionSubmit = (event) => {
    //event.preventDefault();
    if (chosen === "Select One") {
      setDropError({ howyouheard: "Please select an option" });
      return false;
    } else {
      setDropError({ howyouheard: "" });
      return true;
    }
  };

  const [space, setSpace] = useState('');
  const spaceOut = ()=>{
    setSpace((space) => !space);
  };
  const spaceIn = ()=>{
    setSpace('noMgbtm')
  }

  let mgBtm = {
    marginBottom: '20rem'
  }

  let noMgBtm = {
    marginBottom: '0rem'
  }
  const style = space ? mgBtm : noMgBtm;
  //end of droptoggle

  // file uplaod, dragAndDrop
  const [files, setFiles] = useState(null);
  const inputRef = useRef(null);

  const handleFileClick = (event) => {
    // 👇️ open file input box on click of other element
    event.preventDefault();
    inputRef.current.click();  
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };

  const [filesError, setFilesError] = useState('');
  function handleNextPage() {
    if (files) {
      setFilesError("")
      return true;
      // navigate to next page
    } else {
      setFilesError("Please upload a file before proceeding.'")
      return false;
    }
  }
  
  // send files to the server 
  // const handleUpload = () => {
  //   const formData = new FormData();
  //   formData.append("Files", files);
  //   console.log(formData.getAll());
  //   // fetch(
  //   // "link", {
  //   // method: "POST",
  //   // body: formData
  // };

  // const onFocus = document.getElementById("name");

  // onFocus.addEventListener("focus", () => {
  //   console.log("focused")
  // });

  // if (files) return (
  //   <div className="uploads">
  //     <ul className="file">
  //         {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
  //     </ul>
  //     <div className="actions">
  //       <button className="btn_file" onClick={() => setFiles(null)}>Cancel</button>
  //       <button className="btn_file" onClick={handleUpload}>Upload</button>
  //     </div>
  //   </div>
  // )

  return(
    <section className="mainInfo" id="top">

      <div className="appPage-content">

        <CircleProgressLine/>

        <h1>Tell Us About Yourself</h1>

        <h3>Please note that all fields are mandatory</h3>

        <form onSubmit={(e) => {handleSubmit(onSubmit); handleFormSubmit()}} className='form'>
          <div className="cardDiv flex">
            <div className="formWrapper">
              <label htmlFor="name">First Name</label>
              <input id="name" type="text" name="firstname" placeholder='Jane' onChange={handleChange} value={formValues.firstname}/>
            </div>

            <div className="formWrapper">
              <label htmlFor="name">last Name</label>
              <input id="name" type="text" name="lastname" placeholder='Doe' onChange={handleChange} value={formValues.lastname}/>
            </div>
          </div>
          
          <div className="errorMsg">
            <p className="errorMsgLine">{formErrors.firstname}</p>
            <p className="errorMsgLine2">{formErrors.lastname}</p>
          </div>

          <div className="cardDivFull flex">
            <div className="formWrapper">
              <label className="label" htmlFor="email">Email</label>
              <input id="email" type="text" name="email" placeholder='Janedoe@email.com' onChange={handleChange} value={formValues.email}/>
            </div>
          </div>
         
          <div className="errorMsg">
            <p className="errorMsgLine">{formErrors.email}</p>
          </div>

          <div className="cardDiv flex">
            <div className="formWrapper">
              <label className="label" htmlFor="country">Country</label>
              <div id='countryDropdown'>
                <Dropdown
                  fluid
                  search
                  clearable
                  required
                  className="countyDp"
                  selection
                  defaultValue="af"
                  options={countryOptions}
                  onChange={handleDropdownChange}
                />
              </div>
            </div>
          
            <div className="formWrapper">
              <label className="label" htmlFor="city">City</label>
              <div className="cityDrpdn flex">
                <Dropdown
                  className="cityInput"
                  fluid
                  search
                  id= "citydrop"
                  rules={{ required: true }} 
                  required
                  selection
                  clearable
                  defaultValue="3690"
                  options={stateOptions} 
                  name="city"   
                />   
              </div>
            </div>
          </div>

          {semerror && <div className="error">{semerror}</div>}

          <div className="cardDivFull flex">
            <div className="formWrapper">
              <label className="label" htmlFor="name">Country Code</label>
              <div className="phoneWrapper flex"> 
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{
                    required: "Phone number is required",
                    validate: (value) => {
                      if (value.length >= 12) {
                        return true; // Return true if phone number is valid
                      } else {
                        return "Invalid phone number"; // Return error message if phone number is invalid
                      }
                    },
                  }}
                  defaultValue="+93  "
                  render={({ field: { ref, ...field }}) => (
                    <PhoneInput
                      {...field}
                      inputClass="phoneInput"
                      buttonClass="btnClass"
                      dropdownClass="drpPhoneInput"
                      containerClass="containerClass"
                      searchPlaceholder="search"
                      country={"af"}
                      disabled={false}
                      placeholder="Enter Your Phone Number"
                      countryCodeEditable
                      inputRef={(ref) => register(ref)} 
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div className="errorMsg">
            {errors.phoneNumber && (<p className="errorMsgLine">{errors.phoneNumber.message}</p>)}
          </div>

          <div className="cardDivFull">
            <div className="formWrapper">
              <label className="label" htmlFor="name">Upload CV</label>
              <div className="uploadFile" onDragOver={handleDragOver} onDrop={handleDrop}>
                <div 
                  className="imgSec" 
                  type="file"
                  multiple
                  onChange={(event) => setFiles(event.target.files)}
                  hidden
                  accept="image/png, image/jpeg"
                  name="cvfile"
                  ref={inputRef}>
                </div>

                <img src={ellipseUpld} className="justify-center mx-auto ellipse" alt="ellipse"/>

                <div className="inst">
                  <h3>Drag and drop a file</h3>
                  <h6>Allowed File Type: Docx, Pdf | Maximum Size: 2MB</h6>
                </div>

                <div className="linesOr">
                  <h5 className="Or">OR</h5>
                </div>

                <input
                  style={{display: 'none'}}
                  ref={inputRef}
                  type="file"
                  onChange={handleFileChange}
                  name="cvfile"
                />

                <div className='botton btnOrange'  style={{ marginLeft: '-20rem'}}>
                  <a href='#'><button className='orangeBtn' onClick={handleFileClick}>Browse Files</button></a>
                </div>
              </div>
            </div>
          </div>

          <div className="errorMsg">
            {filesError && (<p className="errorMsgLine">{filesError}</p>)}
          </div>

          <div className="cardDivFull flex">
            <div className="formWrapper">
              <label className="label" htmlFor="email">LinkedIn Profile</label>
              <input type="text" name="linkedin" id="linkedIn" placeholder='www.linkedin.com' 
                  onChange={handleChange} value={formValues.linkedin}/>
            </div>
          </div>

          <div className="errorMsg">
            <p className="errorMsgLine">{formErrors.linkedin}</p>
          </div>

          <div className="cardDivFull">
            <div className="formWrapper dropdownMrg">

              <label className="label" htmlFor="notice">How did you hear about us? </label>

              <div className={space} id="dropdownNew" chosen = {chosen} setChosen = {setChosen} style={style}>
                <div className="dropdown-btn" name="howyouheard" id="howyouheard" onClick={(e) => {setIsActive(!isActive); spaceOut();}}>
                  {chosen}
                  <img src={dropvector} alt="dropvector" style={{width: '20px', height: '20px'}}/>
                </div>
              
                {isActive && (
                  <div className="dropdown-content">
                    {options.map((option) => (
                      <div className='dropdown-item' onClick={(e) => {setChosen(option); setIsActive(false); spaceOut(); hideDrop()}}>
                        {option} 
                      </div>
                    ))}

                    {option2.map((option) => (
                      <div className='dropdown-item' onClick={(e) => {setChosen(option); setIsActive(false); showDrop(); spaceOut();}}>
                        {option} 
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>  

          <div className="errorMsg">
            {dropError.howyouheard && (
              <p className="errorMsgLine">{dropError.howyouheard}</p>
            )}
          </div>

          <div className="hidden_drop">
            <p className={dropshow}>1/500</p>
            <textarea id="textarea" className={dropshow} placeholder='please tell us more...' style={{width: '100%'}}></textarea>
            {/* <div id="submit" className={dropshow} onClick={hideDrop}>submit</div> */}
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
            <a>
              <button type="submit" className="orangeBtn" onClick={handleFormSubmit}>
                Continue Application
              </button>
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Main;

// const [style ,setStyle] = useState(false);
// const changeStyle = (e) => {
//   setStyle((current) => !current);
//   e.preventDefault()
// }
  