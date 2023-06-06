import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

// import { LogoutModal } from "components/modules/modals";

const sidebar = [
  {
    Icon: "", //ZuHome,
    name: "About Me",
    to: "/Profile/AboutMe",
  },
  {
    Icon: "", //ZuCalender,
    name: "Application",
    to: "/Profile/Application",
  },
  {
    Icon: "", //ZuBroadcast,
    name: "Settings",
    to: "/Profile/Settings",
  },
  {
    Icon: "", //ZuShare,
    name: "Log Out",
    to: "/logout",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  //   const [logoutModal, setLogoutModal] = useState(false);
  return (
    <div className="sidebar-wrapper">
      {sidebar.map(({ Icon, name, to }, key) => (
        <Link
          key={key}
          to={to}
          className={`${pathname === to ? "active-link" : "not-active-link"}`}
        >
          {/* <div className="w-5">
            <Icon size={20} />
          </div> */}
          <div className="link-title">
            <span className="">{name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
