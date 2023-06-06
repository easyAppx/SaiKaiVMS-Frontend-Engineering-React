import React from 'react';
import './appSubmitSuccess.css';
import good from 'Assets/Svg/good.svg';

const AppSubmitSuccess = (props) => {
  return (
    <section className='align'>
      <div className='success'>
        <div className="successMsg grid">
          <img className='imgGood' src={good} alt='good'/>
          <h1 className="appSS">Application Submitted Successfully</h1>
          <h2 className='msg'>Please click the link provided in your mail to check your application status</h2>
          <div className="action_btn flex">
            <a href="/JobRoles" onClick={props.close5}><button className="orangeBtn">Finish Application</button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppSubmitSuccess