import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import "./area-summary.css";
import { Dot } from "@styled-icons/bootstrap/Dot";
import { EditAlt } from "@styled-icons/boxicons-regular/EditAlt";
import { setSelectedLink } from "../../../features/slice";

function AreaSummary() {
  const area = useSelector((state: RootState) => state.area);
  const dispatch = useDispatch();

  const handleClick: any = (e: any) => {
    const target = e.target as HTMLInputElement;
    dispatch(setSelectedLink(target.innerHTML));
  };
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
      <div className='area-summary-edit-threshold'>
        <p>Edit Threshold</p>
        <EditAlt style={{ width: "16px" }} />
      </div>
      <div className='area-summary-link-wrapperr'>
        <div
          className='area-summary-links'
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Overview
        </div>
        <div
          className='area-summary-links'
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Ascending
        </div>
        <div
          className='area-summary-links'
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Descending
        </div>
        <div
          className='area-summary-links'
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Horizontal
        </div>
        <div
          className='area-summary-links'
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Vertical
        </div>
      </div>
    </>
  );
}
export default AreaSummary;
