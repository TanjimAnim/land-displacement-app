import styled from "styled-components";

import { Search } from "@styled-icons/bootstrap/Search";
import { UserCircle } from "@styled-icons/fa-regular/UserCircle";
import { Bell } from "@styled-icons/bootstrap/Bell";
import { ThemeProvider } from "styled-components";
import { Menu } from "@styled-icons/boxicons-regular/Menu";

import NotificationWindow from "./notification";
import ProfileMenu from "./profileMenu";
import MapDisplay from "../map/mapDisplay";

import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { useState } from "react";

const ProfileMenuWrapper = styled.div`
  background-color: #121619;
  width: 360px;
  position: absolute;
  min-height: 100vh;
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 18px;
  transform: ${(props) =>
    props.theme.isOpen ? "translateX(5px)" : "translateX(-109%)"};
  transition: transform 0.5s ease-out;
`;

const MenuIcon = styled.div`
  background-color: black;
  color: white;
  position: absolute;
  top: 20px;
  left: 50px;
  border: 1px solid;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 0.5s;
  &:hover {
    background: #21273a;
    transform: rotate(90deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 352px;
  margin-top: 16px;
  right: 6px;
`;

const SearchBar = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    top: 26px;
    padding-left: 14px;
    color: #697077;
    transform: translateY(-50%);
    svg {
      transition: 0.3s;
    }
  }
`;

const Input = styled.input`
  height: 50px;
  font-weight: 400;
  font-size: 14px;
  background: #121619;
  color: #697077;
  width: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 47px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #697077;
  }
`;

const BellIcon = styled.div`
  position: relative;
  padding: 1rem;
  background: #21272a;
  color: #f2f4f8;
  width: 18px;
  height: 18px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease-in;
  &:hover {
    background: #343a3f;
  }
`;

const UserProfileIcon = styled.div`
  padding: 1rem;
  width: 20px;
  border-radius: 50%;
  background: #121619;
  color: white;
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: 14px;
  right: 15px;
  width: 8px;
  height: 8px;
  background: #da1e28;
  color: #da1e28;
  border-radius: 50%;
`;

const NotificationDisplay = styled.div`
  position: absolute;
  top: 51px;
  right: 66px;
  overflow-y: ${(props) => (props.theme.length === 0 ? "hidden" : "scroll")};
  scroll-behavior: smooth;
  height: 72vh;
  transition: top 0.5s ease-in;
`;

const MapTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100vh;
`;

function Profile() {
  const value = useSelector((state: RootState) => state.area.value);
  const notification: object[] = useSelector(
    (state: RootState) => state.area.notification
  );
  const theme = {
    length: notification.length,
  };

  const [clicked, setClicked] = useState<Boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const MenuTheme = {
    isOpen: isMenuOpen,
  };
  return (
    <>
      <MenuIcon
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <Menu width='25px' />
      </MenuIcon>
      <ProfileMenuWrapper theme={MenuTheme}>
        <ProfileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </ProfileMenuWrapper>

      <Wrapper>
        <SearchBar className={"inputWithIcon"}>
          <Input placeholder='Search' />
          <div className='left-icon'>
            <Search width='16px' />
          </div>
        </SearchBar>
        <BellIcon
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <Bell />
          {notification.length === 0 ? <></> : <NotificationBadge />}
        </BellIcon>
        {clicked ? (
          <ThemeProvider theme={theme}>
            <NotificationDisplay>
              <NotificationWindow />
            </NotificationDisplay>
          </ThemeProvider>
        ) : (
          <></>
        )}
        <UserProfileIcon>
          <UserCircle />
        </UserProfileIcon>
      </Wrapper>
      {value.length === 0 ? (
        <>
          <MapTitle>Select an AOI to display Map</MapTitle>
        </>
      ) : (
        <MapDisplay />
      )}
    </>
  );
}
export default Profile;
