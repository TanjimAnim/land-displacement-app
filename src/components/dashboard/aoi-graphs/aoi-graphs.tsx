import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import SlopeValue from "../aoi-graphs/slopevalue/slopevalue";
import Overview from "./slopevalue/overview/overview";
import styled from "styled-components";

const Title = styled.div`
  font-weight: 400;
  font-size: 24px;
  color: white;
  margin-top: 40px;
  margin-left: 40px;
`;

function AreaGraphs() {
  const link = useSelector((state: RootState) => state.area.selectedLink);
  const area = useSelector((state: RootState) => state.area);
  return (
    <>
      {Object.keys(area.value).length === 0 ? (
        <>
          <Title>Select an AOI to display data</Title>
        </>
      ) : (
        <>
          {(() => {
            if (link === "") return <></>;
            if (link === "Overview")
              return (
                <>
                  <Overview />
                </>
              );
            if (link === "Ascending")
              return (
                <>
                  <SlopeValue
                    title={link}
                    maxUp={56}
                    maxDown={-193}
                    average={-52}
                  />
                </>
              );

            if (link === "Descending")
              return (
                <>
                  <SlopeValue
                    title={link}
                    maxUp={60}
                    maxDown={-193}
                    average={-52}
                  />
                </>
              );
            if (link === "Vertical" || "Horizontal")
              return (
                <>
                  <SlopeValue
                    title={link}
                    avgTotalDisplacement={-12}
                    displacementRate={-52}
                  />
                </>
              );
          })()}
        </>
      )}
    </>
  );
}
export default AreaGraphs;
