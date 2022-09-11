import TimePeriod from "./timeperiod";
import styled from "styled-components";
import SingleGraph from "./singleGraph";
import MultiGraph from "./multiGraph";

const SlopeValueWrapper = styled.div`
  padding-left: 64px;
  padding-top: 49px;
  padding-bottom: 10px;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 24px;
  color: white;
`;

const Data = styled.div`
  margin-top: 31px;
  display: flex;
  justify-content: space-between;
`;

const SlopeData = styled.div`
  width: 416px;
  display: flex;
  justify-content: space-between;
`;

const SlopeDataTitle = styled.div`
  color: #a2a9b0;
  font-weight: 400;
  font-size: 14px;
`;

const SlopeDataValue = styled.div`
  font-weight: 400;
  font-size: 26px;
  color: white;
`;

const TimePeriodWrapper = styled.div`
  width: 48%;
  margin-right: 0.5%;
`;

//component for showing the detailed graphs of the selected AOI
function SlopeValue({
  title,
  maxUp,
  maxDown,
  average,
  avgTotalDisplacement,
  displacementRate,
}: {
  title: string;
  maxUp?: number;
  maxDown?: number;
  average?: number;
  avgTotalDisplacement?: number;
  displacementRate?: number;
}) {
  return (
    <>
      <SlopeValueWrapper>
        <Title>{title}</Title>
        <Data>
          <SlopeData>
            {maxUp && maxDown && average ? (
              <>
                <div>
                  <SlopeDataTitle>Max Upward</SlopeDataTitle>
                  <SlopeDataValue>{maxUp} mm</SlopeDataValue>
                </div>
                <div>
                  <SlopeDataTitle>Max Downward</SlopeDataTitle>
                  <SlopeDataValue>{maxDown} mm</SlopeDataValue>
                </div>
                <div>
                  <SlopeDataTitle>Average</SlopeDataTitle>
                  <SlopeDataValue>{average} mm/year</SlopeDataValue>
                </div>
              </>
            ) : (
              <>
                <div>
                  <SlopeDataTitle>Avg Total Displacement</SlopeDataTitle>
                  <SlopeDataValue>{avgTotalDisplacement} mm</SlopeDataValue>
                </div>
                <div>
                  <SlopeDataTitle>Displacement Rate</SlopeDataTitle>
                  <SlopeDataValue>{displacementRate} mm</SlopeDataValue>
                </div>
              </>
            )}
          </SlopeData>
          <TimePeriodWrapper>
            <TimePeriod
              theme={{
                flexDirection: "row",
                marginTop: "-18px",
                selectWidth: "58%",
                viewMapWidth: "31%",
              }}
            />
          </TimePeriodWrapper>
        </Data>
        <SingleGraph />
        <MultiGraph />
      </SlopeValueWrapper>
    </>
  );
}

export default SlopeValue;
