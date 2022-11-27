import React from "react";

const SplitButton = ({ name, icon, content }) => {
  return (
    <div>
      <a href="" className={name}>
        <span className="icon text-white-50">
          <i className={icon}></i>
        </span>
        <span className="text">{content}</span>
      </a>
      <div className="my-2"></div>
    </div>
  );
};

export default SplitButton;
