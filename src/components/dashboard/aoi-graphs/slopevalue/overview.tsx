import styled from "styled-components";
import TimePeriod from "../slopevalue/timeperiod";
import { Circle } from "@styled-icons/entypo/Circle";

const Title = styled.div`
  font-weight: 400;
  font-size: 24px;
  color: white;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 17px;
`;

const FlexView = styled.div`
  margin-top: 64px;
  margin-left: 49px;
  margin-bottom: 10px;
  margin-right: 2px;
  display: flex;
  justify-content: space-evenly;
`;

const GridView = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  gap: 45px;
`;

const SlopeData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 31px;
`;

const SlopeDataTitle = styled.div`
  color: #a2a9b0;
  font-weight: 400;
  font-size: 14px;
`;

const SlopeDataValue = styled.div`
  font-weight: 400;
  font-size: 22px;
  color: white;
`;

const LeftGrid = styled.div`
  border-right: 1px solid #343a3f;
  padding-right: 30px;
`;

const RightGrid = styled.div`
  padding-right: 16px;
`;

function Overview() {
  return (
    <>
      <FlexView>
        <GridView>
          <LeftGrid>
            <TitleWrapper>
              <Title>Descending</Title>
              <Circle color='#8A3FFC' width='5%' />
            </TitleWrapper>

            <SlopeData>
              <div>
                <SlopeDataTitle>Max Upward</SlopeDataTitle>
                <SlopeDataValue>60 mm</SlopeDataValue>
              </div>
              <div>
                <SlopeDataTitle>Max Downward</SlopeDataTitle>
                <SlopeDataValue>-190 mm</SlopeDataValue>
              </div>
              <div>
                <SlopeDataTitle>Average</SlopeDataTitle>
                <SlopeDataValue>-52 mm/year</SlopeDataValue>
              </div>
            </SlopeData>
          </LeftGrid>
          <RightGrid>
            <TitleWrapper>
              <Title>Ascending</Title>
              <Circle color='#FF7EB6' width='5%' />
            </TitleWrapper>

            <SlopeData>
              <div>
                <SlopeDataTitle>Max Upward</SlopeDataTitle>
                <SlopeDataValue>56 mm</SlopeDataValue>
              </div>
              <div>
                <SlopeDataTitle>Max Downward</SlopeDataTitle>
                <SlopeDataValue>-193 mm</SlopeDataValue>
              </div>
              <div>
                <SlopeDataTitle>Average</SlopeDataTitle>
                <SlopeDataValue>-52 mm/year</SlopeDataValue>
              </div>
            </SlopeData>
          </RightGrid>
          <LeftGrid>
            <TitleWrapper>
              <Title>Vertical</Title>
              <Circle color='#FF7EB6' width='5%' />
            </TitleWrapper>
            <SlopeData>
              <div>
                <SlopeDataTitle>Avg Total Displacement</SlopeDataTitle>
                <SlopeDataValue>-12 mm</SlopeDataValue>
              </div>
              <div>
                <SlopeDataTitle>Displacement Rate</SlopeDataTitle>
                <SlopeDataValue>-52 mm</SlopeDataValue>
              </div>
            </SlopeData>
          </LeftGrid>
          <RightGrid>
            <TitleWrapper>
              <Title>Horizontal</Title>
              <Circle color='#eb4034' width='5%' />
            </TitleWrapper>
            <SlopeData>
              <div>
                <SlopeDataTitle>Avg Total Displacement</SlopeDataTitle>
                <SlopeDataValue>-12 mm</SlopeDataValue>
              </div>
              <div>
                <SlopeDataTitle>Displacement Rate</SlopeDataTitle>
                <SlopeDataValue>-52 mm</SlopeDataValue>
              </div>
            </SlopeData>
          </RightGrid>
        </GridView>
        <div>
          <TimePeriod
            theme={{
              flexDirection: "column",
              marginTop: "12px",
              selectWidth: "100%",
              viewMapWidth: "100%",
            }}
          />
        </div>
      </FlexView>
    </>
  );
}

export default Overview;
