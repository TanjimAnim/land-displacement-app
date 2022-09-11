import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Dot } from "@styled-icons/bootstrap/Dot";
import { ThreeDotsVertical } from "@styled-icons/bootstrap/ThreeDotsVertical";
import { LeftArrowAlt } from "@styled-icons/boxicons-regular/LeftArrowAlt";

const Display = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AreaTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: white;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #a2a9b0;
`;

const DotIcon = styled.div`
  color: ${(props) => {
    if (props.theme.status === "Observe") return "#F1C21B";
    if (props.theme.status === "Safe") return "#24A148";
    if (props.theme.status === "Critical") return "#DA1E28";
  }};
`;

//the sliding menu component of profile page
function ProfileMenu(props: any) {
  const value = useSelector((state: RootState) => state.area.value);
  return (
    <>
      {value.length === 0 ? (
        <Display>
          <AreaTitle>Select An AOI to Display Data</AreaTitle>
          <LeftArrowAlt
            color='white'
            width='22px'
            onClick={() => {
              props.setIsMenuOpen(!props.isMenuOpen);
            }}
            cursor='pointer'
          />
        </Display>
      ) : (
        <>
          <Display>
            <div style={{ display: "flex" }}>
              <AreaTitle>{value.name}</AreaTitle>
              <DotIcon theme={value}>
                <Dot
                  width='61px'
                  style={{ marginTop: "-19px", marginLeft: "-11px" }}
                />
              </DotIcon>
            </div>
            <div>
              <ThreeDotsVertical color='white' width='22px' />
              <LeftArrowAlt
                color='white'
                width='22px'
                onClick={() => {
                  props.setIsMenuOpen(!props.isMenuOpen);
                }}
                cursor='pointer'
              />
            </div>
          </Display>
          <Text>22,Feb 2017 - 22, Feb 2019</Text>
          <Text>{value.size} km2</Text>
        </>
      )}
    </>
  );
}

export default ProfileMenu;
