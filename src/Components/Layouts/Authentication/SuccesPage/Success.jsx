import React from 'react'
import { Navbar } from 'Components/Layouts/Navbar'
import Hide from "Assets/Images/Check-Mark.png"
import "./Success.css"

function Success() {
  return (
    <div>
      <Navbar />
      <div className='Success'>
        <span className="Success__Img__wrapper"><img src={Hide} alt="" /></span>
        <h1 className='Success__Header'>Volunteer Account Successfully Created</h1>
        <h5 className='Success__Header5'>Please click the link provided in your mail to confirm your account.</h5>
      
        <div className='btnOrang'>
        <a href='/'><button className='orangeBtn'>GO Home</button></a>
      </div>
      </div>

    </div>
  )
}

export default Success