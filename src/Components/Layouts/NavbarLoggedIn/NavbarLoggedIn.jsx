import React from "react";
import './navbarLoggedIn.css';
import logo from 'Assets/Svg/logo.svg';
import { LanguageForm} from 'Components/Utils/Forms';
import ellipseBall from 'Assets/Images/ellipseBall.png';

const langOptions = [
  { key: 'gb', value: '1', flag: 'gb', text: ''},
  { key: 'fr', value: '2', flag: 'fr', text: '' },
]
const langOptions2 =[
  { key: 'gb', value: '3', flag: 'gb', text: ''},
  { key: 'fr', value: '4', flag: 'fr', text: '' },
]

const NavbarLoggedIn = () =>{

  return(
    <section className="navbarSection">
      <header className="header flex sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto bg-color: white">
        <div className="logo flex">
          <a href="/" className="navHome">
            <img src={logo} className="app-logo" alt="logo"/>
          </a>
        </div>

        <div className="navBar flex">
          <ul className="navLists flex">
            <li className="navItem">
                <a href="#" className="navLink">Support</a>
            </li>
            <li className="navItem">
                <a href="#" className="navLink">Help</a>
            </li>
          </ul>

          <div className="navLang">
            <LanguageForm/>
          </div>

          <div className="navLoginBall flex">
            <a href="/"><img src={ellipseBall} alt="" className="ellipseBall" /></a>
            {/*<img src={ellipseBall} alt="ellipseBall" className="profileImg"/>*/}
          </div>

        </div>
      </header>
    </section>
  );
}

export default NavbarLoggedIn;