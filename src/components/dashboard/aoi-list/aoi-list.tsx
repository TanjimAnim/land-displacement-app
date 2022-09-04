import { cityData } from "../../../app/data";
import "./aoi-list.css";
import { useDispatch } from "react-redux";
import { addArea } from "../../../features/slice";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

import styled from "styled-components";
import { Search } from "@styled-icons/bootstrap/Search";
import { Dot } from "@styled-icons/bootstrap/Dot";
import { DownArrowAlt } from "@styled-icons/boxicons-regular/DownArrowAlt";
import { UpArrowAlt } from "@styled-icons/boxicons-regular/UpArrowAlt";
import { useState } from "react";

const SearchBar = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    top: 50%;
    padding-left: 40px;
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
  color: white;
  width: 100%;
  border: none;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 74px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: white;
  }
`;

function AoiList() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.area.value);
  const [area, setArea] = useState(cityData);
  const handleChange = (value: string) => {
    setArea(
      cityData.filter((item) => {
        return (
          item.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1
        );
      })
    );
  };
  return (
    <>
      <h3 className='aoi-list-title'>AOI List</h3>
      <SearchBar className={"inputWithIcon"}>
        <Input
          placeholder='Search For AOI'
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <div className='left-icon'>
          <Search width='16px' />
        </div>
      </SearchBar>

      <table className='aoi-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th colSpan={2}>Critical PS</th>
          </tr>
        </thead>
        <tbody>
          {area.map((item) => {
            return (
              <tr
                onClick={() => dispatch(addArea(item))}
                // onMouseEnter={() => setIsTooltipToggled(true)}
                // onMouseLeave={() => setIsTooltipToggled(false)}
                className={value.id === item.id ? "select-row" : ""}
              >
                <td className={value.id === item.id ? "select" : ""}>
                  {item.name}
                </td>
                <td>
                  <div className='status'>
                    {(() => {
                      if (item.status === "Safe") {
                        return <Dot color='#24A148' className='status-dot' />;
                      }
                      if (item.status === "Observe") {
                        return <Dot color='#F1C21B' className='status-dot' />;
                      }
                      if (item.status === "Critical") {
                        return <Dot color='#DA1E28' className='status-dot' />;
                      }
                    })()}

                    <div className='status-line'>{item.status}</div>
                  </div>
                </td>
                <td>
                  <div className='aoi-critical-value-wrapper'>
                    {item.critical}
                  </div>
                </td>
                <td>
                  {(() => {
                    if (item.criticalValue > 0) {
                      return (
                        <div className='aoi-critical-value-positive'>
                          <UpArrowAlt className='icon-arrow' />
                          {item.criticalValue.toString()}
                        </div>
                      );
                    } else if (item.criticalValue < 0) {
                      return (
                        <div className='aoi-critical-value-negative'>
                          <DownArrowAlt className='icon-arrow' />
                          {item.criticalValue.toString().substring(1)}
                        </div>
                      );
                    } else {
                      return (
                        <div className='aoi-critical-value-neutral'>
                          {"-"}
                          {item.criticalValue}
                        </div>
                      );
                    }
                  })()}
                </td>
                <div
                  className='tooltip-box'
                  
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus, sit eligendi quae rem, exercitationem at aut modi
                    ut fugiat, odio alias quaerat! Sed similique ut libero quos
                    temporibus. Eaque, illum?
                  </p>
                  <p style={{ color: "#4589FF" }}>Learn more....</p>
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default AoiList;
