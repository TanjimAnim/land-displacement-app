import "./topbar.css";

function Topbar() {
  return (
    <div id='topbar' className='topbar'>
      <div className='left-items'>
        <h3 className='title'>
          Synspective <span className='land'>Land Displacement Monitoring</span>{" "}
        </h3>
        <h4 className='date'>Last update: Aug 22,2020 at 17:23</h4>
      </div>
      <div></div>
    </div>
  );
}
export default Topbar;
