import React from "react";
import './navbar.css';
import logo from 'Assets/Svg/logo.svg';
import { LanguageForm} from 'Components/Utils/Forms';

const langOptions = [
  { key: 'gb', value: '1', flag: 'gb', text: ''},
  { key: 'fr', value: '2', flag: 'fr', text: '' },
]
const langOptions2 =[
  { key: 'gb', value: '3', flag: 'gb', text: ''},
  { key: 'fr', value: '4', flag: 'fr', text: '' },
]

const Navbar = () =>{

  return(
    <section className="navbarSection">
      <header className="header flex">
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

          <div className="navLoginLists flex">
            <a href="/Login"><button>Log In</button></a>
          </div>

        </div>
      </header>
    </section>
  );
}

export default Navbar;