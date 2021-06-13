import React, {useEffect, useState} from "react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Select } from "../Select";
import "./_multiselect.scss";

const MultiSelect = ({ defaultOption, label, items, onSelectChange, onReset }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  useEffect(() => {
    if (!selectedValues.length) {
      onReset();
      return;
    }
    onSelectChange(selectedValues);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValues]);


  const handleChange = (event) => {
    setSelectedValues((prev) => ([
      ...prev,
      event?.target?.value
    ]));
  }

  const removeFilter = (val) => {
    const remaining = selectedValues.filter(opt => opt !== val);
    setSelectedValues(remaining);
  }

  const resetFilters = () => {
    setSelectedValues([]);
  }

  return (
    <div className="select-wrapper">
      <div className="selected-options">
        <div className="select-label">{label}</div>
        <div className="selected-badges">
          {selectedValues.map(opt => <Badge uppercase={false} boldText={false} key={opt} value={opt} onRemove={removeFilter}/>)}
        </div>
      </div>
      
      <div className="filter-wrapper">
        <Select onChange={handleChange}>
          <option key="all" selected={!selectedValues.length} disabled>{defaultOption}</option>
          {items.map((item) => (
            <option key={item}>
              {item}
            </option>
          ))}
        </Select>
        <Button iconName="close" onClick={resetFilters}>Reset Filters</Button>
      </div>
    </div>
  );
}

export { MultiSelect };