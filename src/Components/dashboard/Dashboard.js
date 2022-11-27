import React from "react";
import DashCard from "./DashCard";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Dashboard = () => {
  const datas = [
    {
      content: "Earnings (Monthly)",
      value: "$40,000",
      color: "border-left-primary",
      textColor: "text-primary",
      icon: "fa-calendar",
    },
    {
      content: "Earnings (Annual)",
      value: "$215,000",
      color: "border-left-success",
      textColor: "text-success",
      icon: "fa-dollar-sign",
    },
    {
      content: "Tasks",
      value: "50%",
      color: "border-left-info",
      textColor: "text-info",
      icon: "fa-clipboard-list",
    },
    {
      content: " Pending Requests",
      value: "18",
      color: "border-left-warning",
      textColor: "text-warning",
      icon: "fa-comments",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="/"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>

      <div className="row">
        {datas.map(({ content, value, color, textColor, icon }) => {
          return (
            <DashCard
              content={content}
              value={value}
              color={color}
              textColor={textColor}
              icon={icon}
            />
          );
        })}
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Earnings Overview
              </h6>
              <div className="dropdown no-arrow">
                <a
                  className="dropdown-toggle"
                  href=""
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-area">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4 ">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between ">
              <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
              <div className="dropdown no-arrow">
                <div className="card-body">
                  <div className="chart-pie pt-4 pb-2" >
                    <PieChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
