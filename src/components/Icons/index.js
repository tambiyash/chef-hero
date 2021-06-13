import React from "react";
import "./_icons.scss";

const renderPath = (name) => {
  switch(name) {
    case "ascending":
      return (
        <path d='M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z'/>
      );
    case "descending":
      return (
        <path d='M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z'/>
      );
    case "check":
      return (
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
      );
    case "close":
      return (
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
      );
    default:
      return null;
  }
}

const Icon = ({
  iconName,
  active = false,
  size = 16,
  fill,
  onClick,
}) => {
  return (
    <svg
      className="icon"
      onClick={onClick}
      style={{ height: size, width: size }}
      fill={(active && "blue") || fill}
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'>
      {renderPath(iconName)}
    </svg>
  );
}

export { Icon };