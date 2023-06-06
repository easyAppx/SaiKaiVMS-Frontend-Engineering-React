import React from 'react'
import { useState } from 'react';
import './dropdown.css';
import dropvector from 'Assets/Svg/dropVector.svg';


const AppDropdown = ({chosen, setChosen}) => {

   //dropdown
   const [isActive, setIsActive] = useState(false)
   const options = ["React", "Vue", "Angular", "js"];

  return (
    <div>
      <div className="dropdownNew">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {chosen}
          <img src={dropvector} alt="dropvector" style={{width: '20px', height: '20px'}}/>
        </div>
        {
          isActive && (
            <div className="dropdown-content">

              {options.map((option) => (
                <div className='dropdown-item' onClick={(e) => {setChosen(option); setIsActive(false)}}>
                  {option} 
                </div>
              ))}

            </div>
          )
        }
      </div>
    </div>
  )
}

export default AppDropdown