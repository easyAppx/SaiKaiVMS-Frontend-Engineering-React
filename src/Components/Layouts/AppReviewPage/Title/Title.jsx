import React from "react";
import 'styles/title.css';
import vector from 'Assets/Svg/vector.svg';
import { Link } from 'react-router-dom';

const Title = (props) =>{
  return(
    <section className="jobRoles">
      <div className="roleName">
        <h3 className="flex">
          <Link to="" onClick={props.closePop1}>Application Page I</Link> <img src={vector} alt="vector"/> 
          <Link to="" onClick={props.closePop2}>Application Page II</Link> <img src={vector} alt="vector"/>
          <Link to="" onClick={props.closePop3}>Application Page III</Link> <img src={vector} alt="vector"/>
          <Link to="" onClick={props.popApp4}>App Review Page</Link> 
        </h3>
      </div>
    </section>
    
  )
}

export default Title;