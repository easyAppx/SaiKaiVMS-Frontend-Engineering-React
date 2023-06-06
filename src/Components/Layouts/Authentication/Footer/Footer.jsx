import React from 'react'
import { Link } from 'react-router-dom'
import "./foot.css"

function Footer(props) {
  return (
    // <div className='foot'>
    // {/* <p style={{marginTop:20, marginLeft: 370}}>{props.title} <a href={props.link3}>{props.link}</a></p>  */}
  //  {/* <Link to={props.anchor} style={{textAlign:"center", marginLeft: 440}}>{props.link2}</Link> */}
    // {/* </div> */}

 <div className='foot'>
  <p className='foot-title'>{props.title} <a href={props.link3} color="#EB6223">{props.link}</a></p> 
  <a href={props.link4} className='foot-link' color='#EB6223'>{props.link2}</a>
</div>
  )
}

export default Footer