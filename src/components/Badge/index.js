import React from 'react';
import classnames from "classnames";
import {Icon} from '../Icons';
import "./_badge.scss";

const Badge = ({value, rounded, green, dark, purple, yellow, boldText=true, uppercase=true, onRemove }) => {
  const handleClick = () => {
    onRemove(value);
  }
  const classNames = classnames("badge-span",
    {"rounded": rounded},
    {"yellow": yellow},
    {"green": green},
    {"dark": dark},
    {"purple": purple},
    {"bold-text": boldText},
    {"uppercase": uppercase}
  );
  return (
    <span className={classNames}>
      <span className="badge-text">{value}</span>
      {onRemove && <Icon iconName="close" onClick={handleClick} />}
    </span>
  );
}

export { Badge };
