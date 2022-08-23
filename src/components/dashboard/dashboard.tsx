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
      <div className='wrapper'>
        <div className='grid-item-one'>
          <AoiSummary />
        </div>
        <div className='grid-item-two'>
          <AreaSummary />
        </div>
        <div className='grid-item-three'>
          <AoiList />
        </div>
        <div className='grid-item-four'>
          <AreaGraphs />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
