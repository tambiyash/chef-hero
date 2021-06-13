import React from "react";
import "./_select.scss";

const Select = ({ children, onChange, ...props }) => {
  return (
    <select className="select" onChange={onChange} {...props}>
      {children}
    </select>
  );
}

export { Select };