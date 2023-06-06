import React from "react";
import 'styles/title.css';
import { Link } from 'react-router-dom';

const Title = (props) =>{

  return(
    <section className="jobRoles">
      <div className="roleName">
        <h3 className="flex">
          <Link to="" onClick={props.open}>Application Page I</Link>  
        </h3>
      </div>
    </section>
  )
}

export default Title;