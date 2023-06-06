import React, { useState } from 'react'
import './filterDropdown.css';
import dropVector from 'Assets/Svg/dropVector.svg';
import droptoggle from 'Assets/Svg/droptoggle.svg';
import searchIcon from 'Assets/Svg/searchIconBlue.svg';
import searchIcon2 from 'Assets/Svg/searchIconWhite.svg';
import {Data} from "Components/Data/data.js";
import flag from 'Assets/Svg/flag_fr.svg'
// import close from 'Assets/Images/closeIcon.png';
// import searchImg from 'Assets/Svg/searchIconBlue.svg';

const FilterDropdown = ({selectedOption, dropOptions, icon}) => {
 
  // const optionSelect =  [ "Job Categories"];
  // const optionSelect2 = [ "Date Posted"];
  // const optionSelect3 = [ "Experience Level"];
  // const optionSelect4 = [ "Job Type"];
  // const optionSelect5 = [ "Work Type"];
  // const optionSelect7 = [ "Industries"];

  // const options = [ 
  //   "Administration and office support",
  // 	"Accounting and finance",
  // 	"Advertising and marketing",
  // 	"Arts and design",
  // 	"Customer service and call center",
  // 	"Education and training",
  // 	"Engineering and architecture",
  // 	"Healthcare and medical",
  // 	"Human resources",
  // 	"Information technology and computer science",
  // 	"Legal and law enforcement",
  // 	"Maintenance and repair",
  // 	"Manufacturing and production",
  // 	"Project management",
  // 	"Sales and business development",
  // 	"Science and research",
  // 	"Social services and non-profit",
  // 	"Transportation and logistics."
  // ];
 
  // const option2 = [ 
  //   "Past 1 hour",
  //   "Past 24 hours",
  //   "Past Week",
  //   "Past Month",
  //   "Anytime"
  // ];
  
  // const option3 = [ 
  //   "Fresher",
  //   "Entry Level",
  //   "Executive",
  //   "Mid-Level",
  //   "Senior Level"
  // ];
 
  // const option4 = [ 
  //   "Contract/Freelance",
  //   "Full Time",
  //   "Internship",
  //   "Part Time"
  // ];
 
  // const option5 = [ 
  //   "Hybrid",
  //   "On-site",
  //   "Remote"
  // ];
 
  // const option6 = [
  //   <div className="location flex"><img src={flag} style={{height: '20px', width: '20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;<h5>Afaganistan</h5></div>,
  //   <div className="location flex"><img src={flag} style={{height: '20px', width: '20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;<h5>Afaganistan</h5></div>,
  //   <div className="location flex"><img src={flag} style={{height: '20px', width: '20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;<h5>Afaganistan</h5></div>,
  //   <div className="location flex"><img src={flag} style={{height: '20px', width: '20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;<h5>Afaganistan</h5></div>,
  //   <div className="location flex"><img src={flag} style={{height: '20px', width: '20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;<h5>Afaganistan</h5></div>
  // ]

  // const optionSelect6 = [ "Location" ]
  //   // <div className="col">
  //   //   <div id="search flex" style={{display: 'flex'}}>
  //   //     <input 
  //   //       className="input"
  //   //       placeholder="Search..." 
  //   //       style={{height: '55px', width: '21vh', background: '#d9d9d9', marginLeft: '-0.85rem', borderRadius: '8px'}}
  //   //     />
  //   //     <img src={searchIcon} alt ="search" style={{height: '15px', width: '15px', position: 'absolute', right:'2rem', top:'2.5rem'}} />
  //   //   </div>
  //   // </div>
 
  // const option7 = [ 
  //   "Agriculture and farming",
  //   "Mining and extraction",
  //   "Manufacturing",
  //   "Construction",
  //   "Energy and utilities",
  //   "Transportation and logistics",
  //   "Information technology and telecommunications",
  //   "Healthcare and pharmaceuticals",
  //   "Financial services and banking",
  //   "Retail and wholesale",
  //   "Hospitality and tourism",
  //   "Education and research",
  //   "Government and public administration",
  //   "Entertainment and media",
  //   "Real estate and property management."
  // ];

  //dropdown function
  const [isActive, setIsActive] = useState(false)
  const [chosen, setChosen] = useState(selectedOption);

  // const [isActive2, setIsActive2] = useState(false)
  // const [chosen2, setChosen2] = useState("Date Posted");

  // const [isActive3, setIsActive3] = useState(false)
  // const [chosen3, setChosen3] = useState("Experience Level");

  // const [isActive4, setIsActive4] = useState(false)
  // const [chosen4, setChosen4] = useState("Job Type");

  // const [isActive5, setIsActive5] = useState(false)
  // const [chosen5, setChosen5] = useState("Work Type");

  // const [isActive6, setIsActive6] = useState(false)
  // const [chosen6, setChosen6] = useState("Location");

  // const [isActive7, setIsActive7] = useState(false)
  // const [chosen7, setChosen7] = useState("Industries");


  //styles for dropdown
  let normBorder = '8px'
  let newBd = '0%'
  let normBg = '#fff'
  let normColor = '#004B9D'
  let newBg = '#004B9D'
  let bgColor = '#fff'

  const [bg, setBg] = useState('');
  const [color, setBgColor] = useState('');

  // const [bg2, setBg2] = useState('');
  // const [color2, setBgColor2] = useState('');

  // const [bg3, setBg3] = useState('');
  // const [color3, setBgColor3] = useState('');

  // const [bg4, setBg4] = useState('');
  // const [color4, setBgColor4] = useState('');

  // const [bg5, setBg5] = useState('');
  // const [color5, setBgColor5] = useState('');

  // const [bg6, setBg6] = useState('');
  // const [color6, setBgColor6] = useState('');

  // const [bg7, setBg7] = useState('');
  // const [color7, setBgColor7] = useState('');


  //border style for dropdown
  const [flatBorder, setFlatBorder] = useState(normBorder);
  const flatIn =()=>{
    setFlatBorder(newBd);
    setBg(normBg)
    setBgColor(normColor)
    setImage(dropVector);
  }
  const flatOut =()=>{
    setFlatBorder(normBorder);
    setBg(newBg)
    setBgColor(bgColor)
    setImage(droptoggle)
  }
  const flatNorm =()=>{
    setFlatBorder(normBorder);
    setBg(normBg)
    setBgColor(normColor)
    setImage(dropVector);
  }

  // const [flatBorder2, setFlatBorder2] = useState(normBorder);
  // const flatIn2 =()=>{
  //   setFlatBorder2(newBd);
  //   setBg2(normBg)
  //   setBgColor2(normColor)
  //   setImage2(dropVector);
  // }
  // const flatOut2 =()=>{
  //   setFlatBorder2(normBorder);
  //   setBg2(newBg)
  //   setBgColor2(bgColor)
  //   setImage2(droptoggle);
  // }
  // const flatNorm2 =()=>{
  //   setFlatBorder2(normBorder);
  //   setBg2(normBg)
  //   setBgColor2(normColor)
  //   setImage2(dropVector);
  // }

  // const [flatBorder3, setFlatBorder3] = useState(normBorder);
  // const flatIn3 =()=>{
  //   setFlatBorder3(newBd);
  //   setBg3(normBg)
  //   setBgColor3(normColor)
  //   setImage3(dropVector);
  // }
  // const flatOut3 =()=>{
  //   setFlatBorder3(normBorder);
  //   setBg3(newBg)
  //   setBgColor3(bgColor)
  //   setImage3(droptoggle);
  // }
  // const flatNorm3 =()=>{
  //   setFlatBorder3(normBorder);
  //   setBg3(normBg)
  //   setBgColor3(normColor)
  //   setImage3(dropVector);
  // }

  // const [flatBorder4, setFlatBorder4] = useState(normBorder);
  // const flatIn4 =()=>{
  //   setFlatBorder4(newBd);
  //   setBg4(normBg)
  //   setBgColor4(normColor)
  //   setImage4(dropVector);
  // }
  // const flatOut4 =()=>{
  //   setFlatBorder4(normBorder);
  //   setBg4(newBg)
  //   setBgColor4(bgColor)
  //   setImage4(droptoggle);
  // }
  // const flatNorm4 =()=>{
  //   setFlatBorder4(normBorder);
  //   setBg4(normBg)
  //   setBgColor4(normColor)
  //   setImage4(dropVector);
  // }

  // const [flatBorder5, setFlatBorder5] = useState(normBorder);
  // const flatIn5 =()=>{
  //   setFlatBorder5(newBd);
  //   setBg5(normBg)
  //   setBgColor5(normColor)
  //   setImage5(dropVector);
  // }
  // const flatOut5 =()=>{
  //   setFlatBorder5(normBorder);
  //   setBg5(newBg)
  //   setBgColor5(bgColor)
  //   setImage5(droptoggle);
  // }
  // const flatNorm5 =()=>{
  //   setFlatBorder5(normBorder);
  //   setBg5(normBg)
  //   setBgColor5(normColor)
  //   setImage5(dropVector);
  // }

  // const [flatBorder6, setFlatBorder6] = useState(normBorder);
  // const flatIn6 =()=>{
  //   setFlatBorder6(newBd);
  //   setBg6(normBg)
  //   setBgColor6(normColor)
  //   setImage6(searchIcon);
  // }
  // const flatOut6 =()=>{
  //   setFlatBorder6(normBorder);
  //   setBg6(newBg)
  //   setBgColor6(bgColor)
  //   setImage6(searchIcon2);
  // }
  // const flatNorm6 =()=>{
  //   setFlatBorder6(normBorder);
  //   setBg6(normBg)
  //   setBgColor6(normColor)
  //   setImage6(searchIcon);
  // }

  // const [flatBorder7, setFlatBorder7] = useState(normBorder);
  // const flatIn7 =()=>{
  //   setFlatBorder7(newBd);
  //   setBg7(normBg)
  //   setBgColor7(normColor)
  //   setImage7(dropVector);
  // }
  // const flatOut7 =()=>{
  //   setFlatBorder7(normBorder);
  //   setBg7(newBg)
  //   setBgColor7(bgColor)
  //   setImage7(droptoggle);
  // }
  // const flatNorm7 =()=>{
  //   setFlatBorder7(normBorder);
  //   setBg7(normBg)
  //   setBgColor7(normColor)
  //   setImage7(dropVector);
  // }


  const style = {
    borderBottomRightRadius: flatBorder, borderBottomLeftRadius: flatBorder, 
    backgroundColor: bg, color: color
  }

  // const style2 = {
  //   borderBottomRightRadius: flatBorder2, borderBottomLeftRadius: flatBorder2, 
  //   backgroundColor: bg2, color: color2
  // }
  // const style3 = {
  //   borderBottomRightRadius: flatBorder3, borderBottomLeftRadius: flatBorder3, 
  //   backgroundColor: bg3, color: color3
  // }
  // const style4 = {
  //   borderBottomRightRadius: flatBorder4, borderBottomLeftRadius: flatBorder4, 
  //   backgroundColor: bg4, color: color4
  // }
  // const style5 = {
  //   borderBottomRightRadius: flatBorder5, borderBottomLeftRadius: flatBorder5, 
  //   backgroundColor: bg5, color: color5
  // }
  // const style6 = {
  //   borderBottomRightRadius: flatBorder6, borderBottomLeftRadius: flatBorder6, 
  //   backgroundColor: bg6, color: color6
  // }
  // const style7 = {
  //   borderBottomRightRadius: flatBorder7, borderBottomLeftRadius: flatBorder7, 
  //   backgroundColor: bg7, color: color7
  // }

  // for image toggle change
  const [image, setImage] = useState(icon);
  function toggleImage() {
    if (image === dropVector) {
      setImage(droptoggle);
    } else {
      setImage(dropVector);
    }

    if (image === searchIcon) {
      setImage(searchIcon2);
    } else {
      setImage(searchIcon);
    }
  }

  // const [image2, setImage2] = useState(dropVector);
  // function toggleImage() {
  //   if (image === dropVector) {
  //     setImage2(droptoggle);
  //   } else {
  //     setImage2(dropVector);
  //   }
  // }

  // const [image3, setImage3] = useState(dropVector);
  // function toggleImage() {
  //   if (image === dropVector) {
  //     setImage3(droptoggle);
  //   } else {
  //     setImage3(dropVector);
  //   }
  // }

  // const [image4, setImage4] = useState(dropVector);
  // function toggleImage() {
  //   if (image === dropVector) {
  //     setImage4(droptoggle);
  //   } else {
  //     setImage4(dropVector);
  //   }
  // }

  // const [image5, setImage5] = useState(dropVector);
  // function toggleImage() {
  //   if (image === dropVector) {
  //     setImage5(droptoggle);
  //   } else {
  //     setImage5(dropVector);
  //   }
  // }
  
  // const [image6, setImage6] = useState(searchIcon);
  // function toggleImage() {
  //   if (image === searchIcon) {
  //     setImage6(searchIcon2);
  //   } else {
  //     setImage6(searchIcon);
  //   }
  // }
  
  // const [image7, setImage7] = useState(dropVector);
  // function toggleImage() {
  //   if (image === dropVector) {
  //     setImage7(droptoggle);
  //   } else {
  //     setImage7(dropVector);
  //   }
  // }

  // location dropdown
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

   //searchbar border change
   let border = '2px solid #004B9D';
   const [borderBefore, setBorderBefore] = useState('');
   const bottomBorder = () =>{
     setBorderBefore(border)
   };

  const handleFilter = (event) => {

    const searchWord = event.target.value;

    setWordEntered(searchWord);

    const newFilter = Data.filter((value) => {
      return (
        value.destTitle.toLowerCase().startsWith(wordEntered.toLowerCase())
          && value.destTitle.toLowerCase() !== wordEntered.toLowerCase()
      )
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter)
    }
  };

  //add the filtere title to the searchbar
  const onSearch = (searchWord) => {
    setWordEntered(searchWord);
    // Api to fetch the search result
    console.log("search ", searchWord);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    bottomBorder(border)
  };

  
  return (
    <div className='head-filter'>
      <div className="jobFilter flex">
        <div className="dropFilter" chosen = {chosen} setChosen = {setChosen}>
          < button className="dropFilter-btn" style={style}
            onClick={(e) => {setIsActive(!isActive); flatIn();}}>
            {chosen}
            <img src={image} alt="dropVector" className='vectorFilter' style={{width: '15px', height: '15px'}}/>
          </button>
           
          {isActive && (
            <div className="dropFilter-content">
              {selectedOption.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen(option); setIsActive(false);  flatNorm();}}>
                  {option} 
                </div>
              ))}
         
              {dropOptions.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen(option); setIsActive(false);  flatOut();}}>
                  {option} 
                </div>
              ))}
            </div>
          )}
        </div>
      </div> 

        {/* <div className="dropFilter" chosen2 = {chosen2} setChosen2 = {setChosen2}>
          <button className="dropFilter-btn" style={style2}
            onClick={(e) => {setIsActive2(!isActive2); flatIn2()}}>
            {chosen2}
            <img src={image2} alt="dropVector" className='vectorFilter' style={{width: '15px', height: '15px'}}/>
          </button>

          {isActive2 && (
            <div className="dropFilter-content">
              {optionSelect2.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen2(option); setIsActive2(false); flatNorm2();}}>
                  {option} 
                </div>
              ))}

              {option2.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen2(option.slice(0, 16)); setIsActive2(false); flatOut2();}}>
                  {option} 
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dropFilter" chosen3 = {chosen3} setChosen3 = {setChosen3}>
          <button className="dropFilter-btn" style={style3}
            onClick={(e) => {setIsActive3(!isActive3); flatIn3()}}>
            {chosen3}
            <img src={image3} alt="dropVector" className='vectorFilter' style={{width: '15px', height: '15px'}}/>
          </button>

          {isActive3 && (
            <div className="dropFilter-content">
              {optionSelect3.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen3(option); setIsActive3(false); flatNorm3();}}>
                  {option} 
                </div>
              ))}

              {option3.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen3(option.slice(0, 16)); setIsActive3(false); flatOut3();}}>
                  {option} 
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dropFilter" chosen4 = {chosen4} setChosen4 = {setChosen4}>
          <button className="dropFilter-btn" style={style4}
            onClick={(e) => {setIsActive4(!isActive4); flatIn4()}}>
            {chosen4}
            <img src={image4} alt="dropVector" className='vectorFilter' style={{width: '15px', height: '15px'}}/>
          </button>

          {isActive4 && (
            <div className="dropFilter-content">
              {optionSelect4.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen4(option); setIsActive4(false); flatNorm4();}}>
                  {option} 
                </div>
              ))}

              {option4.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen4(option.slice(0, 16)); setIsActive4(false); flatOut4();}}>
                  {option} 
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dropFilter" chosen5 = {chosen5} setChosen5 = {setChosen5}>
          <button className="dropFilter-btn" style={style5}
            onClick={(e) => {setIsActive5(!isActive5); flatIn5()}}>
            {chosen5}
            <img src={image5} alt="dropVector" className='vectorFilter' style={{width: '15px', height: '15px'}}/>
          </button>

          {isActive5 && (
            <div className="dropFilter-content">
              {optionSelect5.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen5(option); setIsActive5(false); flatNorm5();}}>
                  {option} 
                </div>
              ))}

              {option5.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen5(option.slice(0, 16)); setIsActive5(false); flatOut5();}}>
                  {option} 
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dropFilter" chosen6 = {chosen6} setChosen6 = {setChosen6}>
          <button className="dropFilter-btn" style={style6}
            onClick={(e) => {setIsActive6(!isActive6); flatIn6()}}>
            {chosen6}
            <img src={image6} alt="dropVector" className='vectorFilter' style={{width: '15px', height: '15px'}}/>
          </button>

          {isActive6 && (
            <div className="dropFilter-content">
              {optionSelect6.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen6(option); setIsActive6(false); flatNorm6();}}>
                  {option} 
                </div>
              ))}

              {option6.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen6(option); setIsActive6(false); flatOut6();}}>
                  {option} 
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dropFilter" chosen7 = {chosen7} setChosen7 = {setChosen7}>
          <button className="dropFilter-btn" style={style7}
            onClick={(e) => {setIsActive7(!isActive7); flatIn7()}}>
            {chosen7}
            <img src={image7} alt="dropVector" className='vectorFilter' style={{width: '15px', height: '15px'}}/>
          </button>

          {isActive7 && (
            <div className="dropFilter-content">
              {optionSelect7.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen7(option); setIsActive7(false); flatNorm7();}}>
                  {option} 
                </div>
              ))}

              {option7.map((option) => (
                <div className='dropFilter-item' onClick={(e) => {setChosen7(option.slice(0, 16)); setIsActive7(false); flatOut7();}}>
                  {option} 
                </div>
              ))}
            </div>
          )}
        </div> */}
    </div> 
  )
}
export default FilterDropdown

 // const [sty,setStyle] = useState(false);
  // const changeStyle = () => {
  //   setStyle((current) => !current);
  // }

{/* <div>
      <button
        onClick={() => setThumbUp((thumb) => !thumb)}
      >
        <div  style={style}>
          <p>good</p>
        </div>  
      </button>
      
      {style ? <button className='set' onClick={changeStyle}>Show name</button> :  <button style={{background:'red'}} 
        onClick={changeStyle}>Show name</button>} 

    </div> */}