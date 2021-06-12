import React from "react";
import classnames from "classnames";
import {Icon} from "../Icons";
import "./_button.scss";

const Button = ({ iconName, blue, purple, rounded, children, ...props }) => {
  const classNames = classnames("button",
    {"btn-icon": iconName},
    {"rounded": rounded},
    {"blue": blue},
    {"purple": purple},
  )
  return (
    <button {...props} className={classNames}>
      {iconName && <Icon iconName={iconName} />}
      {children}
    </button>
  );
  
}

export { Button };