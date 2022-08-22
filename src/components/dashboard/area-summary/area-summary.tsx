import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import "./area-summary.css";
import { Dot } from "@styled-icons/bootstrap/Dot";

function AreaSummary() {
  const area = useSelector((state: RootState) => state.area);

  return (
    <>
      <div className='area-summary-wrapper'>
        <div className='area-summary-box'>
          <h3>Area Name</h3>
          <p className='area-summary-p'>{area.value.name}</p>
        </div>

        <div className='area-summary-box'>
          <h3>Location</h3>
          <p className='area-summary-p'>{area.value.location}</p>
        </div>
        <div className='area-summary-box'>
          <h3>Status</h3>
          <div className='area-summary-status'>
            <p className='area-summary-status-title'>{area.value.status}</p>
            {(() => {
              if (area.value.status === "Safe") {
                return (
                  <Dot color='#24A148' className='area-summary-status-dot' />
                );
              }
              if (area.value.status === "Observe") {
                return (
                  <Dot color='#F1C21B' className='area-summary-status-dot' />
                );
              }
              if (area.value.status === "Critical") {
                return (
                  <Dot color='#DA1E28' className='area-summary-status-dot' />
                );
              }
            })()}
          </div>
        </div>

        <div className='area-summary-box'>
          <h3>Size</h3>
          <p className='area-summary-p'>
            {area.value.size} <span style={{ fontSize: "14px" }}>km2</span>
          </p>
        </div>
      </div>
    </>
  );
}
export default AreaSummary;
