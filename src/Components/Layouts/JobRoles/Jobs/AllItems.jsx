import React, { useState } from 'react'
import './allItems.css'
import {Data} from "Components/Data/data.js";
//import SearchIcon from "@material-ui/icons/Search";
//import CloseIcon from "@material-ui/icons/Close";


const AllItems = () => {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = Data.filter((value) => {
      return value.destTitle.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      {
        Data.map((item, key) => {
            
          return (
            <div className="dataResult" key={item.id}>
              <div className="dataItem" >
                <p style={{'marginTop':'rem'}}>{item.date}</p>
                <p style={{'marginTop':'-1.3rem'}}>{item.usaf}</p>
                <p style={{'marginTop':'-1.3rem'}}>{item.destTitle}</p>
                <p style={{'marginTop':'-1.3rem'}}>{item.location}</p>
                <p style={{'marginTop':'-1.3rem'}}>{item.type}</p>
                <p style={{'marginTop':'-1.3rem'}}>{item.para}</p>
                <p style={{'marginTop':'-1.3rem'}}>{item.lineTwo}</p>
              </div>
            </div>
          ) 
        }) 
      }
    </div>
  )
}

export default AllItems