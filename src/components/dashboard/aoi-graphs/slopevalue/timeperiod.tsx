import styled from "styled-components";
import { Location } from "@styled-icons/entypo/Location";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.32px;
  color: #c1c7cd;
`;

const TimePeriodStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.theme.flexDirection};
  margin-top: 8px;
`;

const Select = styled.select`
  width: ${(props) => props.theme.selectWidth};
  height: 35px;
  background: #21272a;
  color: #f2f4f8;
  padding-left: 5px;
  font-size: 14px;
  border-bottom: 1px solid #697077;

  option {
    background: #21272a;
    color: #f2f4f8;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const MapDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #f2f4f8;
  padding: 0.1rem;
  width: ${(props) => props.theme.viewMapWidth};
  margin-top: ${(props) => props.theme.marginTop}; ;
`;

//component for showing graph options
function TimePeriod({ theme }: { theme: object }) {
  return (
    <>
      <Title>Time Period</Title>
      <ThemeProvider theme={theme}>
        <TimePeriodStyle>
          <Select>
            <option value='' hidden>
              Type
            </option>
            <option value='1'>1 year</option>
            <option value='2'>1 month</option>
            <option value='3'>1 week</option>
            <option value='4'>1 day</option>
          </Select>

          <MapDisplay>
            <Link to='/profile' style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>View In Map</p>
            </Link>

            <Location style={{ width: "16px" }} />
          </MapDisplay>
        </TimePeriodStyle>
      </ThemeProvider>
    </>
  );
}
export default TimePeriod;
