import MapDisplay from "./mapDisplay";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100vh;
`;

//component for displaying map route
function Map() {
  const value = useSelector((state: RootState) => state.area.value);

  return (
    <>
      {value.length === 0 ? (
        <>
          <Title>Select an AOI to display Map</Title>
        </>
      ) : (
        <MapDisplay />
      )}
    </>
  );
}
export default Map;
