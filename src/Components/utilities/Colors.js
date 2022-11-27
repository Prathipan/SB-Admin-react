import React from "react";
import ColorCard from "./ColorCard";

const Colors = () => {
  const textGray = [
    {
      name: "text-gray-100 p-3 bg-dark m-0",
      content: ".text-gray-100",
    },
    {
      name: "text-gray-200 p-3 bg-dark m-0",
      content: ".text-gray-200",
    },
    {
      name: "text-gray-300 p-3 bg-dark m-0",
      content: ".text-gray-300",
    },
    {
      name: "text-gray-400 p-3 bg-dark m-0",
      content: ".text-gray-400",
    },
    {
      name: "text-gray-500 p-3 m-0",
      content: ".text-gray-500",
    },
    {
      name: "text-gray-600 p-3 m-0",
      content: ".text-gray-600",
    },
    {
      name: "text-gray-700 p-3 m-0",
      content: ".text-gray-700",
    },
    {
      name: "text-gray-800 p-3 m-0",
      content: ".text-gray-800",
    },
    {
      name: "text-gray-900 p-3 m-0",
      content: ".text-gray-900",
    },
  ];
  const gradient = [
    {
     name : "px-3 py-5 bg-gradient-primary text-white",
     content : ".bg-gradient-primary"
    },
    {
     name : "px-3 py-5 bg-gradient-secondary text-white",
     content : ".bg-gradient-secondary"
    },
    {
     name : "px-3 py-5 bg-gradient-success text-white",
     content : ".bg-gradient-success"
    },
    {
     name : "px-3 py-5 bg-gradient-info text-white",
     content : ".bg-gradient-info"
    },
    {
     name : "px-3 py-5 bg-gradient-warning text-white",
     content : ".bg-gradient-warning"
    },
    {
     name : "px-3 py-5 bg-gradient-danger text-white",
     content : ".bg-gradient-danger"
    },
    {
     name : "px-3 py-5 bg-gradient-light text-white",
     content : ".bg-gradient-light"
    },
    {
     name : "px-3 py-5 bg-gradient-dark text-white",
     content : ".bg-gradient-dark"
    }
    ];
  const  thirdcolor = [
        {
         name : "p-3 bg-gray-100",
         content : ".bg-gray-100"
        },
        {
         name : "p-3 bg-gray-200",
         content : ".bg-gray-200"
        },
        {
         name : "p-3 bg-gray-300",
         content : ".bg-gray-300"
        },
        {
         name : "p-3 bg-gray-400",
         content : ".bg-gray-400"
        },
        {
         name : "p-3 bg-gray-500 text-white",
         content : ".bg-gray-500"
        },
        {
         name : "p-3 bg-gray-600 text-white",
         content : ".bg-gray-600"
        },
        {
         name : "p-3 bg-gray-700 text-white",
         content : ".bg-gray-700"
        },
        {
         name : "p-3 bg-gray-800 text-white",
         content : ".bg-gray-800"
        },
        {
         name : "p-3 bg-gray-900 text-white",
         content : ".bg-gray-900"
        }
        ];
  return (
    <>
      <div className="container-fluid">
        <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
        <p className="mb-4">
          Bootstrap's default utility classes can be found on the official{" "}
          <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
          page. The custom utilities below were created to extend this theme
          past the default utility classes built into Bootstrap's framework.
        </p>

        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Custom Text Color Utilities
                </h6>
              </div>
              <div className="card-body">
                {
                    textGray.map(({name,content}) => {
                        return <ColorCard name={name} content={content}/>
                    })
                }
              </div>
            </div>

            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Custom Font Size Utilities
                </h6>
              </div>
              <div className="card-body">
                <ColorCard  name={"text-xs"} content={".text-xs"}/>
                <ColorCard  name={"text-lg mb-0"} content={".text-lg"}/>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Custom Background Gradient Utilities
                </h6>
              </div>
              <div className="card-body">
                {
                    gradient.map(({name, content}) => {
                        return <ColorCard name={name} content={content} />
                    })
                }
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Custom Grayscale Background Utilities
                </h6>
              </div>
              <div className="card-body">
                {
                    thirdcolor.map(({name,content}) => {
                        return <ColorCard name={name} content={content} />
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Colors;
