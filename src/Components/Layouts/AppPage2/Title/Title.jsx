import React from "react";
import 'styles/title.css';
import vector from 'Assets/Svg/vector.svg';
import { Link } from 'react-router-dom';

const Title = (props) =>{
  return(
    <section className="jobRoles">
      <div className="roleName">
        <h3 className="flex">
            <Link to="" onClick={props.closePop}>Application Page I</Link> <img src={vector} alt="vector"/> 
            <Link to="" onClick={props.popApp2}>Application Page II</Link>          
          </h3>
      </div>
    </section>
    
  )
}

export default Title;