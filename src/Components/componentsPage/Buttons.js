import React from "react";
import CircleButton from "./CircleButton";
import SplitButton from "./SplitButton";

const Buttons = () => {
  const defaultButtons = [
    {
      name: "btn btn-primary btn-circle mx-1",
      icon: "fab fa-facebook-f",
    },
    {
      name: "btn btn-success btn-circle mx-1",
      icon: "fas fa-check",
    },
    {
      name: "btn btn-info btn-circle mx-1",
      icon: "fas fa-info-circle",
    },
    {
      name: "btn btn-warning btn-circle mx-1",
      icon: "fas fa-exclamation-triangle",
    },
    {
      name: "btn btn-danger btn-circle mx-1",
      icon: "fas fa-trash",
    }
  ];

  const smallButtons = [
    {
      name: "btn btn-primary btn-circle btn-sm mx-1",
      icon: "fab fa-facebook-f",
    },
    {
      name: "btn btn-success btn-circle btn-sm mx-1",
      icon: "fas fa-check",
    },
    {
      name: "btn btn-info btn-circle btn-sm mx-1",
      icon: "fas fa-info-circle",
    },
    {
      name: "btn btn-warning btn-circle btn-sm mx-1",
      icon: "fas fa-exclamation-triangle",
    },
    {
      name: "btn btn-danger btn-circle btn-sm mx-1",
      icon: "fas fa-trash",
    },
  ];

  const largeButtons = [
    {
      name: "btn btn-primary btn-circle btn-lg mx-1",
      icon: "fab fa-facebook-f",
    },
    {
      name: "btn btn-success btn-circle btn-lg mx-1",
      icon: "fas fa-check",
    },
    {
      name: "btn btn-info btn-circle btn-lg mx-1",
      icon: "fas fa-info-circle",
    },
    {
      name: "btn btn-warning btn-circle btn-lg mx-1",
      icon: "fas fa-exclamation-triangle",
    },
    {
      name: "btn btn-danger btn-circle btn-lg mx-1",
      icon: "fas fa-trash",
    },
  ];
  const splitButtons = [
    {
     name : "btn btn-primary btn-icon-split",
     icon : "fas fa-flag",
     content : "Split Button Primary"
    },
    {
     name : "btn btn-success btn-icon-split",
     icon : "fas fa-check",
     content : "Split Button Success"
    },
    {
     name : "btn btn-info btn-icon-split",
     icon : "fas fa-info-circle",
     content : "Split Button Info"
    },
    {
     name : "btn btn-warning btn-icon-split",
     icon : "fas fa-exclamation-triangle",
     content : "Split Button Warning"
    },
    {
     name : "btn btn-danger btn-icon-split",
     icon : "fas fa-trash",
     content : "Split Button Danger"
    },
    {
     name : "btn btn-secondary btn-icon-split",
     icon : "fas fa-arrow-right",
     content : "Split Button Secondary"
    },
    {
     name : "btn btn-light btn-icon-split",
     icon : "fas fa-arrow-right",
     content : "Split Button Light"
    },
    ]

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Buttons</h1>

      <div className="row">
        <div className="col-lg-6">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
            </div>
            <div className="card-body">
              <p>
                Use Font Awesome Icons (included with this theme package) along
                with the circle buttons as shown in the examples below!
              </p>
              <div className="mb-2">
                <code>.btn-circle</code>
              </div>
               {
                defaultButtons.map(({name,icon}) => {
                      return <CircleButton name={name} icon={icon}/>
                })
               }
              <div className="mt-4 mb-2">
                <code>.btn-circle .btn-sm</code>
              </div>
              {
                smallButtons.map(({name,icon}) => {
                      return <CircleButton name={name} icon={icon}/>
                })
               }
              <div className="mt-4 mb-2">
                <code>.btn-circle .btn-lg</code>
              </div>
              {
                largeButtons.map(({name,icon}) => {
                      return <CircleButton name={name} icon={icon}/>
                })
               }
            </div>
          </div>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Brand Buttons</h6>
            </div>
            <div className="card-body">
              <p>
                Google and Facebook buttons are available featuring each
                company's respective brand color. They are used on the user
                login and registration pages.
              </p>
              <p>
                You can create more custom buttons by adding a new color
                variable in the
                <code>_variables.scss</code> file and then using the Bootstrap
                button variant mixin to create a new style, as demonstrated in
                the <code>_buttons.scss</code>
                file.
              </p>
              <a href="#" className="btn btn-google btn-block">
                <i className="fab fa-google fa-fw"></i>
                .btn-google
              </a>
              <a href="#" className="btn btn-facebook btn-block">
                <i className="fab fa-facebook-f fa-fw"></i> .btn-facebook
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Split Buttons with Icon
              </h6>
            </div>
            <div className="card-body">
              <p>
                Works with any button colors, just use the{" "}
                <code>.btn-icon-split</code> className and the markup in the
                examples below. The examples below also use the
                <code>.text-white-50</code> helper className on the icons for
                additional styling, but it is not required.
              </p>
              {
                splitButtons.map( ({name,icon,content}) => {
                    return <SplitButton name={name} icon={icon} content={content}/>
                })
              }
              <div className="mb-4"></div>
              <p>Also works with small and large button classNamees!</p>
              <SplitButton name={"btn btn-primary btn-icon-split btn-sm"} icon={"fas fa-flag"} content={"Split Button Small"}/>
              <SplitButton name={"btn btn-primary btn-icon-split btn-lg"} icon={"fas fa-flag"} content={"Split Button Large"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
