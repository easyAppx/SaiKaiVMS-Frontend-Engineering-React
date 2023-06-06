import React from "react";
import './titleJobDes.css';
import vector from 'Assets/Svg/vector.svg';
import { Link } from 'react-router-dom';

const Title = () =>{
  return(
    <section className="jobRolesDes">
      <div className="roleNameDes">
        <h3 className="flex"> 
          <Link to="/">Home</Link> <img src={vector} alt="vector"/> 
          <Link to="/JobDescription">Job Description</Link>
        </h3>
      </div>
    </section>
    
  )
}

export default Title;