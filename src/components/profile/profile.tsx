import { Search } from "@styled-icons/bootstrap/Search";
import { UserCircle } from "@styled-icons/fa-regular/UserCircle";
import styled from "styled-components";
import { Bell } from "@styled-icons/bootstrap/Bell";

import NotificationWindow from "./notification";

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
    background: #21273a;
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
  right: 0px;
`;

function Profile() {
  return (
    <>
      <Wrapper>
        <SearchBar className={"inputWithIcon"}>
          <Input placeholder='Search' />
          <div className='left-icon'>
            <Search width='16px' />
          </div>
        </SearchBar>
        <BellIcon>
          <Bell />
          <NotificationBadge></NotificationBadge>
          <NotificationDisplay>
            <NotificationWindow />
          </NotificationDisplay>
        </BellIcon>
        <UserProfileIcon>
          <UserCircle />
        </UserProfileIcon>
      </Wrapper>
    </>
  );
}
export default Profile;
