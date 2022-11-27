import React, { useState } from "react";
import DashCard from "../dashboard/DashCard";

const Cards = () => {
    const [open,setOpen] = useState(false);
    const [show,setShow] = useState(false)
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
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Cards</h1>
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
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-header">Default Card Example</div>
              <div className="card-body">
                This card uses Bootstrap's default styling with no utility
                classNamees added. Global styles are the only things modifying the
                look and feel of this default card example.
              </div>
            </div>

            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Basic Card Example
                </h6>
              </div>
              <div className="card-body">
                The styling for this basic card example is created by using
                default Bootstrap utility classNamees. By using utility classNamees, the
                style of the card component can be easily modified with no need
                for any custom CSS!
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Dropdown Card Example
                </h6>
                <div className="dropdown no-arrow show">
                  <a
                    className="dropdown-toggle"
                    onClick={() => setOpen(!open)}
                    href=""
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  {open ? <div
                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in show"
                    style={{position: "absolute", transform: "translate3d(-158px, 18px, 0px)", top: "0px", left: "0px", willChange: "transform"}}
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="">
                      Action
                    </a>
                    <a className="dropdown-item" href="">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="">
                      Something else here
                    </a>
                  </div> : <></>}
                </div>
              </div>
              <div className="card-body">
                Dropdown menus can be placed in the card header in order to
                extend the functionality of a basic card. In this dropdown card
                example, the Font Awesome vertical ellipsis icon in the card
                header can be clicked on in order to toggle a dropdown menu.
              </div>
            </div>

            <div className="card shadow mb-4">
              <a
                href="#collapseCardExample"
                className={show ? "d-block card-header py-3 collapsed" : "d-block card-header py-3"}
                onClick={() => setShow(!show)}
                data-toggle="collapse"
                role="button"
                aria-expanded="true"
                aria-controls="collapseCardExample"
              >
                <h6 className="m-0 font-weight-bold text-primary">
                  Collapsable Card Example
                </h6>
              </a>
              <div className={show ? "collapse" : "collapse show"} id="collapseCardExample">
                <div className="card-body">
                  This is a collapsable card example using Bootstrap's built in
                  collapse functionality.{" "}
                  <strong>Click on the card header</strong> to see the card body
                  collapse and expand!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
