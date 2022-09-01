import Topbar from "./topbar/topbar";
import AoiList from "./aoi-list/aoi-list";
import AoiSummary from "./aoi-summary/aoi-summary";
import AreaGraphs from "./aoi-graphs/aoi-graphs";
import AreaSummary from "./area-summary/area-summary";
import "./dashboard.css";
function Dashboard() {
  return (
    <>
      <Topbar />
      <div className='grid-with-two-columns'>
        <div className='left-column'>
          <div className='column-1-row-1'>
            <AoiSummary />
          </div>
          <div className='column-1-row-2'>
            <AoiList />
          </div>
        </div>
        <div className='right-column'>
          <div className='column-2-row-1'>
            <AreaSummary />
          </div>
          <div className='column-2-row-2'>
            <AreaGraphs />
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
