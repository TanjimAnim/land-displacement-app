import TimePeriod from "./timeperiod";
import styled from "styled-components";
import SingleGraph from "./singleGraph";

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

function SlopeValue({
  title,
  maxUp,
  maxDown,
  average,
}: {
  title: string;
  maxUp: number;
  maxDown: number;
  average: number;
}) {
  return (
    <>
      <SlopeValueWrapper>
        <Title>{title}</Title>
        <Data>
          <SlopeData>
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
          </SlopeData>
          <TimePeriodWrapper>
            <TimePeriod />
          </TimePeriodWrapper>
        </Data>
        <SingleGraph />
      </SlopeValueWrapper>
    </>
  );
}

export default SlopeValue;
