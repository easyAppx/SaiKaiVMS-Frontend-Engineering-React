import React from "react";
import './jobCards.css'; 
import {useEffect, useState} from "react";
import {Data} from "Components/Data/data.js";

const JobCard = (props) => {

  const [search, setSearch] = useState('');

  const [error, setError] = useState();

  return (
    <div>
      <div className="secSimilarJobs">
        {
          Data.filter((item) => (search.toLowerCase() === '' ) ? 
               item :(item.destTitle.toLowerCase().includes(search))).slice().map((item)=>{
              
              return (
                
                <div className="singleDestination" key={item.id}>
        
                  <div className="imageDate flex">
                    <img src={item.imgSrc} alt="" />
                    <h3>{item.date}</h3>
                  </div>

                  <div className="usaf">
                    <h4>{item.usaf}</h4>
                  </div>
        
                  <div className="destTitle">
                    <h5>{item.destTitle}</h5>
                  </div>

                  <div className="typeLocation flex">
                    <h3 className="location">{item.location}</h3>
                    <h3 className="type">{item.type}</h3>
                  </div>

                  <div className="para">
                    <p>{item.para}</p>
                    <p>{item.lineTwo}</p>
                  </div>
        
                  <div className="desc">
                    <p>{item.description}</p>
                  </div>

                  <div className="buttonAV ">
                    <a onClick={props.popUp}><button className="btnOne">Apply</button></a>
                    <a href="/JobDescription"><button  className='btnTwo flex'>View</button></a>
                  </div>
                </div>
              ) 
          }) 
        }

        {/* {
         Data.filter((item) => (search.toLowerCase() === '' ) ? 
         item :(item.destTitle.toLowerCase().includes(search))).length === 0  ?

          <h2 className="errorMsg">
            No available job listing matching the keyword "{search}"
          </h2> : "" 
        }

        {error ? <h1>{error}</h1> : null} */}

      </div>
      
    </div>
  )
}

export default JobCard;