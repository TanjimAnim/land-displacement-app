import "./topbar.css";
import { currentDate } from "../../../app/notificationData";

//topbar component of dashboard

function Topbar() {
  return (
    <div id='topbar' className='topbar'>
      <div className='left-items'>
        <h3 className='title'>
          Synspective <span className='land'>Land Displacement Monitoring</span>{" "}
        </h3>
        <h4 className='date'>Last update: {currentDate}</h4>
      </div>
      <div></div>
    </div>
  );
}
export default Topbar;
