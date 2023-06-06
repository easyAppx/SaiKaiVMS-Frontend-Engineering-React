import React from "react";
import './main.css';
import { Link } from 'react-router-dom';
import {useState, useEffect, useRef} from "react";
import dot from 'Assets/Svg/dot_ellipse.svg';
import ellipseBall from 'Assets/Images/ellipseBall.png';
import JobCard from "Components/Utils/JobCards/JobCard.jsx";
import AppPage1 from "Pages/AppPage1/AppPage1";
import AppPage2 from "Pages/AppPage2/AppPage2";
import AppPage3 from "Pages/AppPage3/AppPage3";
import AppReviewPage from "Pages/AppReviewPage/AppReviewPage"; 
import AppSubmitSuccess from "Pages/AppSubmitSuccess/AppSubmitSuccess";


const Main = (props) =>{

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, ['top'])

  //popover 1
  const [showModal, setShowModal] = useState("hidden");
  function handlePop(e) {
    props.call("fixed")
    setShowModal("visible");
    e.stopPropagation();
  }
  function closePopUp() {
    setShowModal("hidden");
  }

  //popover 2
  const [showModal2, setShowModal2] = useState("hidden");
  function handlePop2(e) {
    props.call("fixed")
    setShowModal2("visible");
    e.stopPropagation();
  }
  function closePopUp2() {
    setShowModal2("hidden");
  }

  //popover 3
  const [showModal3, setShowModal3] = useState("hidden");
  function handlePop3(e) {
    props.call("fixed")
    setShowModal3("visible");
    e.stopPropagation();
  }
  function closePopUp3() {
    setShowModal3("hidden");
  }

  //popover 4
  const [showModal4, setShowModal4] = useState("hidden");
  function handlePop4(e) {
    props.call("fixed")
    setShowModal4("visible");
    e.stopPropagation();
  }
  function closePopUp4() {
    setShowModal4("hidden");
  }

  //popover 5
  const [showModal5, setShowModal5] = useState("hidden");
  function handlePop5(e) {
    props.call("fixed")
    setShowModal5("visible");
    e.stopPropagation();
  }
  function closePopUp5() {
    setShowModal4("hidden");
  }

  return(
    <section className="main-2">

      <div className="app-page-pop">
        <div className={showModal} id="overlay"></div>
        <div className={showModal} id="appPage-modal">
          <AppPage1 className={showModal} doPop={showModal => setShowModal(showModal)} doPopTwo={showModal2 => setShowModal2(showModal2)}/>
        </div>

        <div className={showModal2} id="overlay"></div>
        <div className={showModal2} id="appPage-modal">
          <AppPage2 className={showModal2} doPopTwo={showModal2 => setShowModal2(showModal2)} 
            doPopThree={showModal3 => setShowModal3(showModal3)} doPop={showModal => setShowModal(showModal)}/>
        </div>

        <div className={showModal3} id="overlay"></div>
        <div className={showModal3} id="appPage-modal">
          <AppPage3 className={showModal3} doPopThree={showModal3 => setShowModal3(showModal3)} 
            doPopFour={showModal4 => setShowModal4(showModal4)} doPopTwo={showModal2 => setShowModal2(showModal2)} 
            doPop={showModal => setShowModal(showModal)}/>
        </div>

        <div className={showModal4} id="overlay"></div>
        <div className={showModal4} id="appPage-modal">
          <AppReviewPage className={showModal4} doPopFour={showModal4 => setShowModal4(showModal4)} 
            doPopFive={showModal5 => setShowModal5(showModal5)}doPopThree={showModal3 => setShowModal3(showModal3)} 
            doPopTwo={showModal2 => setShowModal2(showModal2)} doPop={showModal => setShowModal(showModal)}/>
        </div>

        <div className={showModal5} id="overlay"></div>
        <div className={showModal5} id="appPage-modal" style={{maxWidth: '80%', marginTop: '-7rem'}}>
          <AppSubmitSuccess className={showModal5} doPopFive={showModal5 => setShowModal5(showModal5)} 
            doPopFour={showModal4 => setShowModal4(showModal4)} doPopThree={showModal3 => setShowModal3(showModal3)} 
            doPopTwo={showModal2 => setShowModal(showModal2)} doPop={showModal => setShowModal(showModal)}/>
        </div>
      </div>

      <div className="content">
        <h3 className="uiUx">UI/UX Designer</h3>
        <h4>Remote <span><img src={dot} alt="dot" className="dot" /></span> 3 hours ago</h4>

        <div className="contactSperator flex">
          <div className="contactCarrier">
            <div className="setOne flex">
              <img src={ellipseBall} alt="ellipseBall" className="ellipseBall"/>
              <div className="contactWrite" style={{'marginTop':'0.5rem'}}>
                <h2>United States Of Africa</h2>
                <h6>Social Services and Non Profit</h6>
                <h6>Information technology and telecommunications</h6>
                <h6>50 - 100 Employees</h6>
              </div>     
            </div>
          </div>

          <div className="contactCarrier">
            <div className="setOne flex">
              <img src={ellipseBall} alt="ellipseBall" className="ellipseBall"/>
              <div className="contactWrite">
                <h2>Daniel Kaluya</h2>
                <h6>Human Resource Manager</h6>
                <h6>HR Introtech Services</h6>
              </div>     
            </div>

            {/*<div className="setTwo flex">
              <a><button><span><img src={dropVector} alt="dropVector" className="downVector"/></span>Contact</button></a>
              <a><button><span><img src={mail_Icon} alt="mail_Icon" className="mail_Icon"/></span>Mail</button></a>
    </div>*/}

          </div>

        </div>

        <p className="usafRole">
          This space contains description of the job and role. This space contains description of the job and role. 
          This space contains description of the job and role. This space contains description of the job and role. 
          This space contains description of the job and role. This space contains description of the job and role. 
          This space contains description of the job and role.
        </p>

        <h5>Job Description</h5>
        <p className="paraOne">
          <li>Assist in carrying out all aspects of the UX and Design process: visual design, concept development, user research & prototyping. </li>
          <li>Understanding user needs, business requirements, and technical capabilities and translating them into innovative product solutions.</li> 
          <li>Define user experiences and interaction, creating site maps, wireframes, user flows, and high-fidelity prototypes. </li>
          <li>Work with Senior Product Designers to develop UI mockups and prototypes that clearly illustrate how sites functions and look. </li>
          <li>Identify and troubleshoot UX problems (i.e responsiveness). </li>
          <li>Illustrate design ideas using storyboards, process flows, and sitemaps. </li>
          <li>Design graphics user interfaces elements, like menus, tabs and widgets. </li>
          <li>Build page navigation buttons and search fields. </li>
          <li>Conduct layout adjustments based on user feedback. </li>
          <li>Adhere to style standards on fonts, colours, and images.</li>
        </p>

        <h5>Requirements</h5>
        <p className="paraTwo">
          <li>First Degree in Design, Computer Science, or a relevant field. </li>
          <li>Excellent knowledge of wireframe tools (e.g wireframe.cc and In Vision,). </li>
          <li>Up-To-Date knowledge of design software like Adobe Illustrator and Photoshop. </li>
          <li>Team Spirit, strong communication skills to collaborate with various stakeholder. </li>
          <li>Good Time management skills. </li>
          <li>Having a good experience in industrial design, spatial design and 3D Design. </li>
          <li>Have a link to your portfolio in your CV.</li>
        </p>

        <h5>Benefits</h5>
        <p className="paraTwo">
          <li>Medical Cover</li>
          <li>Flexible work schedule</li>
          <li>Profit Share</li>
          <li>Learning and development opportunity.</li>
        </p>

        <h5>Location & Schedule</h5>
        <p className="paraTwo">
          The role is entirely Remote with a working hours range of 10-12 hours of Design Time from Mondays to Fridays. 
        </p>

        <h5>About Company</h5>
        <p className="paraTwo">
          USAF is ...
          This space contains details on the location and schedule of the job.
          This space contains details on the location and schedule of the job. 
          This space contains details on the location and schedule of the job.
          This space contains details on the location and schedule of the job. 
        </p>

        <div className="action_btn">
          <Link onClick={handlePop}><button className="apply_btn">Apply Now</button></Link>
        </div>

        <div className="similarJobs">
          <h3 className="heading">Jobs similar to this</h3>
          <JobCard popUp={handlePop}/>
        </div> 
      </div>
    </section>
  )
}

export default Main;