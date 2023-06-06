import Header from "./Header";
import Sidebar from "./Sidebar";
import "./ProfileWrapper.css";

const Dashboard = ({ children, link }) => {
  return (
    <div className="profile-wrapper">
      <Header link={link} />

      <div className="profile-container">
        <Sidebar />

        {/* Content */}
        <div className="children-container">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
