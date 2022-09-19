import dashboardIcon from "../../assets/dashboard.png";
import downloadIcon from "../../assets/download.png";
import logoutIcon from "../../assets/logout.png";
import mapIcon from "../../assets/map.png";
import userProfileIcon from "../../assets/dashboard.png";
import synspectiveIcon from "../../assets/logo.png";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='top-items'>
        <img src={synspectiveIcon} alt='' />
        <Link to='/'>
          <img src={dashboardIcon} alt='' />
        </Link>

        <Link to='map'>
          <img src={mapIcon} alt='' />
        </Link>
        <Link to='download'>
          <img src={downloadIcon} alt='' />
        </Link>
        <Link to='/profile'>
          <img src={userProfileIcon} alt='' />
        </Link>
      </div>
      <div className='bottom-items'>
        <img src={logoutIcon} alt='' />
      </div>
    </div>
  );
}

export default Sidebar;
