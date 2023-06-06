import { LanguageForm } from "Components/Utils/Forms";
import { Link } from "react-router-dom";
import logo from "Assets/Svg/profileLogo.svg";
import arrowRight from "Assets/Svg/arrowDir.svg";
import profileIcon from "Assets/Svg/profileIcon.svg";
import "./header.css";

const Header = ({ link }) => {
  return (
    <div className="header-wrapper">
      <div className="header-top-container">
        <Link to="/">
          <div className="mt:0 lg:mt-5">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
        </Link>
        <div className="right-component">
          <Link to="/support" className="header-link">
            Support
          </Link>
          <Link to="/help" className="header-link">
            Help
          </Link>
          <section className="header-sub-section">
            <div className="navLang">
              <LanguageForm />
            </div>
            <Link to="/help" className="header-link">
              <img src={profileIcon} className="app-logo" alt="logo" />
            </Link>
          </section>
          {/* <div> */}
          {/* <img
            src=""
            className="rounded-full w-10 h-10 md:w-14 md:h-14"
            alt=""
          /> */}
          {/* </div> */}
        </div>
      </div>
      <div className="header-bottom-container">
        <div className="header-bottom-link-wrapper">
          <Link>Home</Link>
          <img src={arrowRight} className="arrow-image" alt="arrow-right" />
        </div>
        <div className="header-bottom-link-wrapper">
          <Link>Profile</Link>
          <img src={arrowRight} className="arrow-image" alt="arrow-right" />
        </div>
        <div className="header-bottom-link-wrapper">
          <Link>{link}</Link>
          <img src={arrowRight} className="arrow-image" alt="arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default Header;
