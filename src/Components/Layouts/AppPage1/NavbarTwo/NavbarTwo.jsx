import React from "react";
import 'styles/navbarTwo.css';
import cancel from 'Assets/Svg/cancel.svg';
import Title from 'Components/Layouts/AppPage1/Title/Title';

const NavbarTwo = (props) =>{

  function popOpen(){
    props.doPop("visible")
  }

  return(
    <section className="navbarSection">
      <div className="navFixed">
        <header className="headerTwo">
          <center><h2>UI/UX Designer</h2></center>
          <img src={cancel} alt="cancel" onClick={props.close}/>
        </header>
        {/* <Title open = {popOpen}/> */}
      </div>
    </section>
  );
}

export default NavbarTwo;