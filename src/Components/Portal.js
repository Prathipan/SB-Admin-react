import React from "react";
import {Outlet} from "react-router-dom"
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Portal = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Portal;
