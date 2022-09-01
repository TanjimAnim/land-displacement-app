import { useRef, useEffect, useState } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import * as mapboxgl from "mapbox-gl";
import "./mapDisplay.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100vh;
`;

(mapboxgl as typeof mapboxgl).accessToken =
  "pk.eyJ1IjoidGFuamltYW5pbSIsImEiOiJjbDdoc242eXAwMDg1M29tZzBtbzcxbW13In0.VZ1fj0f8TE1wv62sYESfMQ";

function MapDisplay() {
  const area: any = useSelector((state: RootState) => state.area.value);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [long, setLong] = useState(area.long);
  const [lat, setLat] = useState(area.lat);
  const [zoom, setZoom] = useState(12);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [long, lat],
      zoom: zoom,
    });
  });
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return (
    <>
      {area.length === 0 ? (
        <>
          <Title>Select an AOI to display Map</Title>
        </>
      ) : (
        <div>
          <div
            ref={mapContainer}
            className='map-container'
            style={{ height: "100vh", width: "100vw", overflowY: "hidden" }}
          />
        </div>
      )}
    </>
  );
}
export default MapDisplay;
