import React from 'react';
import {Icon} from '../Icons';
import "./_table.scss";

const HeaderRow = ({ sortedBy, sort, label }) => {
  const changeSort = (direction) => {
    sort.changer((prev) => ({
      ...prev,
      sortedBy: {
        [sort.key]: direction,
      },
    }));
  }
  return (
    <th>
      <div className='flex-container'>
        <div className='flex-label'>{label.toUpperCase()}</div>
        {sort ? (
          <div>
            {sortedBy && sortedBy[sort.key] === 'ascending' ? (
              <Icon
                iconName="ascending"
                active={
                  sortedBy && sortedBy[sort.key] === 'ascending'
                }
                onClick={() => changeSort('descending')}
              />
            ) : (
              <Icon
                iconName="descending"
                active={
                  sortedBy && sortedBy[sort.key] === 'descending'
                }
                onClick={() => changeSort('ascending')}
              />
            )}
          </div>
        ) : null}
      </div>
    </th>
  );
}

export default HeaderRow;