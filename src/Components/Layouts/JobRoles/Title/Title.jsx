import React from "react";
import 'styles/title.css';
import { Link } from 'react-router-dom';

const Title = () =>{
  return(
    <section id="jobRoles" className="jobRoles">
      <div className="roleName">
        <h3><Link to="/">Job Roles</Link></h3>
      </div>
    </section>
    
  )
}

export default Title;