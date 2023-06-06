import React, { Component } from 'react'
import './faqs.css';
import {useEffect, useState} from "react";
import plus from 'Assets/Svg/plus_vector.svg';
import minus from 'Assets/Svg/icon_minus.png';
import { faqsData } from 'Components/Data/Faq';

const Faqs = () => {

  const [selected, setSelected]  = useState(null) 

  const toggle_faqs = (i) =>{

    if(selected == i){
      return setSelected(null)
    }

    setSelected(i)
  }
  
  return (
    <section>
      <div className='container-fluid-5'>
        <h4 className='faqs'>Frequently Asked Questions (FAQs)</h4>

        {faqsData.map((item, i) => (

          <div fluid className='accordion'>
            <div className='accordionBody'>
              <div className='accordionTitle' onClick={() => toggle_faqs(i)}>
                <label className='accordionLabel'>{item.title}</label> 

                <span>{ selected == i ? 
                  <img src={minus} alt="plus" className='accordionIcon'  style={{'height':'20px'}}/> : 
                  <img src={plus} alt="plus" className='accordionIcon'/>}
                </span>

              </div>
              <div className= { selected == i ? 'accordiionContent show' : 'accordionContent'}>

                <p className='accordionMainContent'>{item.content}</p>

              </div>
            </div>
          </div>

        ))}

      </div>
    </section>
  )
}

export default Faqs;

