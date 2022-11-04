import React from "react";
import "./Repos.css";
import { Icon } from "@iconify/react";
import SideBar from "../../components/SideBar/Sidebar";
import Card from "../../components/Card/Card";

const Repos = () => {
  return (
    <div className="repos">
      <SideBar />
      <div className="content">
        <div className="header">
          <span>
            <Icon icon="logos:google-developers" width={45} />
            <h2>OscarMesh</h2>
          </span>
          <div className="search">
            <Icon icon="eva:search-fill" width={24} height={24} />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="repoList">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Repos;
