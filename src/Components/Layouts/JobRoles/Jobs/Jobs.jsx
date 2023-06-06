import React from "react";
import './jobs.css';
import './jobgrid.css'; 
import './allItems.css';
import './paginate.css';
import {useState, useEffect, useRef} from "react";
import {Data} from "Components/Data/data.js";
import sort from 'Assets/Svg/sort_gif.gif';
import flag from 'Assets/Svg/flag_fr.svg'
import dropVector from 'Assets/Svg/dropVector.svg';
import droptoggle from 'Assets/Svg/droptoggle.svg';
import searchIcon from 'Assets/Svg/searchIconBlue.svg';
import searchIcon2 from 'Assets/Svg/searchIconWhite.svg';
import close from 'Assets/Images/closeIcon.png';
import searchImg from 'Assets/Svg/searchIconBlue.svg';
import ReactPaginate from "react-paginate";
import { useNavigate } from 'react-router-dom';
import FilterDropdown from "Components/Utils/FilterDropdown/FilterDropdown";
import AppPage1 from "Pages/AppPage1/AppPage1";
import AppPage2 from "Pages/AppPage2/AppPage2";
import AppPage3 from "Pages/AppPage3/AppPage3";
import AppReviewPage from "Pages/AppReviewPage/AppReviewPage"; 
import AppSubmitSuccess from "Pages/AppSubmitSuccess/AppSubmitSuccess";

const Jobs = (props) =>{

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, ['top'])


  const optionSelect1 =  [ "Job Categories"];
  const optionSelect2 = [ "Date Posted"];
  const optionSelect3 = [ "Experience Level"];
  const optionSelect4 = [ "Job Type"];
  const optionSelect5 = [ "Work Type"];
  const optionSelect6 = [ "Location" ];
  const optionSelect7 = [ "Industries"];

  const option1 = [ 
    "Administration and office support",
  	"Accounting and finance",
  	"Advertising and marketing",
  	"Arts and design",
  	"Customer service and call center",
  	"Education and training",
  	"Engineering and architecture",
  	"Healthcare and medical",
  	"Human resources",
  	"Information technology and computer science",
  	"Legal and law enforcement",
  	"Maintenance and repair",
  	"Manufacturing and production",
  	"Project management",
  	"Sales and business development",
  	"Science and research",
  	"Social services and non-profit",
  	"Transportation and logistics."
  ];
 
  const option2 = [ 
    "Past 1 hour",
    "Past 24 hours",
    "Past Week",
    "Past Month",
    "Anytime"
  ];
  
  const option3 = [ 
    "Fresher",
    "Entry Level",
    "Executive",
    "Mid-Level",
    "Senior Level"
  ];
 
  const option4 = [ 
    "Contract/Freelance",
    "Full Time",
    "Internship",
    "Part Time"
  ];
 
  const option5 = [ 
    "Hybrid",
    "On-site",
    "Remote"
  ];
 
  const option6 = [
    <div className="location flex"><img src={flag} style={{height: '20px', width: '20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;<h5>Afaganistan</h5></div>,
    <div className="location flex"><img src={flag} style={{height: '20px', width: '20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;<h5>Afaganistan</h5></div>,
    <div className="location flex"><img src={flag} style={{height: '20px', width: '20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;<h5>Afaganistan</h5></div>,
    <div className="location flex"><img src={flag} style={{height: '20px', width: '20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;<h5>Afaganistan</h5></div>,
    <div className="location flex"><img src={flag} style={{height: '20px', width: '20px'}}/>&nbsp;&nbsp;&nbsp;&nbsp;<h5>Afaganistan</h5></div>
  ]
 
  const option7 = [ 
    "Agriculture and farming",
    "Mining and extraction",
    "Manufacturing",
    "Construction",
    "Energy and utilities",
    "Transportation and logistics",
    "Information technology and telecommunications",
    "Healthcare and pharmaceuticals",
    "Financial services and banking",
    "Retail and wholesale",
    "Hospitality and tourism",
    "Education and research",
    "Government and public administration",
    "Entertainment and media",
    "Real estate and property management."
  ];


  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  let white = '#FFF';
  const [bgColor, setBgColor] = useState(white);
  const changeColor =()=>{
    let newBg = '#E1E1E1';
    setBgColor(newBg);
  }

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
    setBgColor(white);
    bottomBorder(border)
    addPagination('show');
    hidePageCount('hidePageCount');
  };

  const [error, setError] = useState();
  
  //end of search bar section and filter

  const [next, setNext] = useState('');
  const removePagination = ()=>{
    setNext('hide')
  };
  const addPagination = ()=>{
    setNext('show')
  };

  const [active, setActive]  = useState('toggle');
  const showNav = ()=>{
      setActive('toggle open_nav')
  };
  const removeNav = ()=>{
      setActive('toggle close_nav')
  };

  // Pagination

  const [pages, setPages] = useState(Data.slice(0, 60));
  const [pageNumber, setPageNumber] = useState(0);

  const main_item_on_page = Data.filter((item) =>(wordEntered.toLowerCase()=== '' ) ?
    item :(item.destTitle.toLowerCase().includes(wordEntered.toLowerCase()))).length

  const usersPerPage = 15;
  const pagesVisited = pageNumber * usersPerPage;
  
  const currentPageNumber2 = pages.length - main_item_on_page;
  const currentPageNumber = pages.length -currentPageNumber2;

  const pageCount = Math.ceil(pages.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [countPage, setCountPage] = useState('default');
  const showPageCount = () =>{
    setCountPage('showPageCount')
  };
  const hidePageCount = () =>{
    setCountPage('hidePageCount')
  };

 
  const navigate = useNavigate();

  //popover 1
  const [showModal, setShowModal] = useState("hidden");
  function handlePop(e) {
    props.call("fixed")
    setShowModal("visible");
    e.stopPropagation();
  }
  function closePopUp() {
    setShowModal("hidden");
  }

  //popover 2
  const [showModal2, setShowModal2] = useState("hidden");
  function handlePop2(e) {
    props.call("fixed")
    setShowModal2("visible");
    e.stopPropagation();
  }
  function closePopUp2() {
    setShowModal2("hidden");
  }

  //popover 3
  const [showModal3, setShowModal3] = useState("hidden");
  function handlePop3(e) {
    props.call("fixed")
    setShowModal3("visible");
    e.stopPropagation();
  }
  function closePopUp3() {
    setShowModal3("hidden");
  }

  //popover 4
  const [showModal4, setShowModal4] = useState("hidden");
  function handlePop4(e) {
    props.call("fixed")
    setShowModal4("visible");
    e.stopPropagation();
  }
  function closePopUp4() {
    setShowModal4("hidden");
  }

  //popover 5
  const [showModal5, setShowModal5] = useState("hidden");
  function handlePop5(e) {
    props.call("fixed")
    setShowModal5("visible");
    e.stopPropagation();
  }
  function closePopUp5() {
    setShowModal4("hidden");
  }

  return(
    <section id="card-container jobSec jobGrid">
      <div>
        <div className="app-page-pop">
          <div className={showModal} id="overlay"></div>
          <div className={showModal} id="appPage-modal">
            <AppPage1 className={showModal} 
              doPop={showModal => setShowModal(showModal)} 
              doPopTwo={showModal2 => setShowModal2(showModal2)}/>
          </div>

          <div className={showModal2} id="overlay"></div>
          <div className={showModal2} id="appPage-modal">
            <AppPage2 className={showModal2} doPopTwo={showModal2 => setShowModal2(showModal2)} 
              doPopThree={showModal3 => setShowModal3(showModal3)} doPop={showModal => setShowModal(showModal)}/>
          </div>

          <div className={showModal3} id="overlay"></div>
          <div className={showModal3} id="appPage-modal">
            <AppPage3 className={showModal3} doPopThree={showModal3 => setShowModal3(showModal3)} 
              doPopFour={showModal4 => setShowModal4(showModal4)} doPopTwo={showModal2 => setShowModal2(showModal2)} 
              doPop={showModal => setShowModal(showModal)}/>
          </div>

          <div className={showModal4} id="overlay"></div>
          <div className={showModal4} id="appPage-modal">
            <AppReviewPage className={showModal4} doPopFour={showModal4 => setShowModal4(showModal4)} 
              doPopFive={showModal5 => setShowModal5(showModal5)}doPopThree={showModal3 => setShowModal3(showModal3)} 
              doPopTwo={showModal2 => setShowModal2(showModal2)} doPop={showModal => setShowModal(showModal)}/>
          </div>

          <div className={showModal5} id="overlay"></div>
          <div className={showModal5} id="appPage-modal" style={{maxWidth: '80%'}}>
            <AppSubmitSuccess className={showModal5} doPopFive={showModal5 => setShowModal5(showModal5)} 
              doPopFour={showModal4 => setShowModal4(showModal4)} doPopThree={showModal3 => setShowModal3(showModal3)} 
              doPopTwo={showModal2 => setShowModal(showModal2)} doPop={showModal => setShowModal(showModal)}/>
          </div>
        </div>
      </div>
 
      <div className="search_jobListing row flex">
        <div className="col">
         <center><h2>Available Job Listings</h2></center> 
        </div>

        <div className="col">
          <div id="search">

            <div className=''>
              {filteredData.length === 0 ? (
                <input 
                  style={{background: bgColor}}
                  className="input"
                  placeholder="Search by Title, Keyword or skills..." 
                  value={wordEntered}
                  onClick={removePagination}
                  onChange ={handleFilter}
                />
              ) : (
                <input 
                  style={{background: bgColor, borderBottom: borderBefore}}
                  className="input_bottom_border_change"
                  placeholder="Search by Title, Keyword or skills..." 
                  value={wordEntered}
                  onClick={removePagination}
                  onChange ={handleFilter}
                />
              )}
            </div>

            <div className="searchIcons">
              {filteredData.length === 0 ? (
                <img src={searchImg} alt ="search" className="iconSearch"/>
              ) : (
                <img src={close} alt ="close" className='iconClose' onClick={clearInput}/>
              )}
            </div>

            <input placeholder="search..." className="searchInput" value={wordEntered} onChange = {(e) => setWordEntered(e.target.value)}/>
            <img src={searchImg} alt ="search" className='iconSearch_2'/>
          </div>
        </div>

        <div className="filteredDataDropdown">
          {
            filteredData.length !== 0 && (
              <div className="dataResult">
                {
                  Data.filter((value) => {
                    return (
                      wordEntered.toLowerCase() &&
                      value.destTitle.toLowerCase().startsWith(wordEntered.toLowerCase()) && 
                      value.destTitle.toLowerCase() !== wordEntered.toLowerCase()
                    );
                  })
                  .slice(0, 15).map((value) =>(
                    <div className="dataItem">
                      <p onClick={() => {onSearch(value.destTitle); bottomBorder(); changeColor(); showPageCount();}}>
                        {value.destTitle}
                      </p>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>

      </div>
      
      <div className="jobLists flex">
        <div className="jobCategories flex">
          <div className={active}>
            <div className="toggleJobClose">
              <button onClick={removeNav} className="nav-btn nav-close-btn">
                <img src={close} alt ="close" className='iconClose'/>
              </button>
            </div>
          </div>

          <div className="toggleJobTab">
            <button onClick={showNav} className="nav-btn nav-open-btn">
              <img src={sort} alt ="sort" className='iconTab'/>
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex">
        <FilterDropdown selectedOption={optionSelect1} dropOptions={option1} icon={dropVector}/>
        <FilterDropdown selectedOption={optionSelect2} dropOptions={option2} icon={dropVector}/>
        <FilterDropdown selectedOption={optionSelect3} dropOptions={option3} icon={dropVector}/>
        <FilterDropdown selectedOption={optionSelect4} dropOptions={option4} icon={dropVector}/>
        <FilterDropdown selectedOption={optionSelect5} dropOptions={option5} icon={dropVector}/>
        <FilterDropdown selectedOption={optionSelect6} dropOptions={option6} icon={searchIcon}/>
        <FilterDropdown selectedOption={optionSelect7} dropOptions={option7} icon={dropVector}/>
        
        <div className="clearFilter"> 
          <h5>Clear Filters</h5>
        </div>
    </div>
        
    <div className="hrLine"></div>

      <div className="pageCount">
        <span className={countPage}>
          <center>
            <strong>
              showing &nbsp; {currentPageNumber} of {currentPageNumber} results
            </strong>
          </center>
        </span>
      </div>
      
      <div className="secContent flex">
        { 
          Data.filter((item) =>{ 
            return (
              wordEntered.toLowerCase()=== '' ) ? 
              item :(item.destTitle.toLowerCase().includes(wordEntered.toLowerCase())
            );
          })  
          .slice(pagesVisited, pagesVisited + usersPerPage).map((item)=>(
              
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
                <button className="btnOne button open-button"  onClick={handlePop}>Apply</button>

                <a href="/JobDescription"><button className='btnTwo flex'>View</button></a>
              </div>
            </div>
          )) 
        }

        {
         Data.filter((item) => (wordEntered.toLowerCase() === '' ) ? 
         item :(item.destTitle.toLowerCase().includes(wordEntered.toLowerCase()))).length === 0  ?

          <h2 className="errorMsg">
            no available job listing matching the keyword "{wordEntered}"
          </h2> : "" 
        }

        {error ? <h1>{error}</h1> : null}

      </div>
      
      <div className="pagination">
        <center className={next}>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </center>
      </div>
    </section>
  );
}

export default Jobs;