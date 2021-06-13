import React from "react";
import { Button } from "../Button";
import { Select } from "../Select";
import "./_table.scss";

const Pagination = ({ page, selectedLimit, limits, total, onPrev, onNext, onLimitChange }) => {
  const endPage = Math.ceil(total/selectedLimit);
  console.log(total, selectedLimit, endPage);
  return (
    <div className="paginate-wrapper">
      <div className="paginator">
        <Button blue rounded disabled={page <= 1} onClick={onPrev}>Previous</Button>
        <span className="pagination-label">Showing page {page} of {endPage}</span>
        <Button blue rounded disabled={page >= endPage} onClick={onNext}>Next</Button>
      </div>
      <div className="paginate-limit">
        <span>Rows:</span>
        <Select onChange={(e) => onLimitChange(e.target.value)}>
          {limits.map(val => <option key={val} value={val} selected={val === selectedLimit}>{val}</option>)}
        </Select>
      </div>
    </div>
  );
}

export default Pagination;