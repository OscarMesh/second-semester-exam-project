import "./SideBar.css";
import { Icon } from "@iconify/react";
import { SideBarData } from "./SideBarData";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-links">
          <ul>
            <li>
              {SideBarData.map((item, index) => {
                return (
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "#f59e19" : "",
                    })}
                    key={index}
                    className="menu-item"
                    to={item.path}
                  >
                    {item.icons}
                    <span> {item.title} </span>
                  </NavLink>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
      <div className="toggle-menu">
          {toggleMenu ? (
            <Icon
              icon="eva:close-outline"
              color="#000000"
              width={30}
              height={30}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <Icon
              icon="ant-design:menu-outlined"
              width={30}
              height={30}
              color="#000000"
              onClick={() => setToggleMenu(true)}
            />
          )}
         

          {toggleMenu && (
            <div className="sidebar-menu">
              <ul>
                <li>
                  {SideBarData.map((item, index) => {
                    return (
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#072f5f" : "",
                        })}
                        key={index}
                        className="menu-item"
                        to={item.path}
                      >
                        {item.icons}
                        <span> {item.title} </span>
                      </NavLink>
                    );
                  })}
                </li>
              </ul>
            </div>
          )}
        </div>
      
    </>
  );
};

export default SideBar;
