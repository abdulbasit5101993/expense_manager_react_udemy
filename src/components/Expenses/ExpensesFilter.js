import React from "react";

import "./ExpensesFilter.css";
import { useState } from "react";

const ExpensesFilter = (props) => {
  const [year, setYear] = useState(null);

  const setYearFilter = (Input) => {
    console.log("console on ", Input);
    setYear(Input.target.value);
    console.log(Input.target.value);
    props.filterByYear(Input.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={(event) => setYearFilter(event)}>
          <option value={"Select Year"}>Select Year</option>
          <option value="2022" selected={year === "2022" ? true : false}>
            2022
          </option>
          <option value="2021" selected={year === "2021" ? true : false}>
            2021
          </option>
          <option value="2020" selected={year === "2020" ? true : false}>
            2020
          </option>
          <option value="2019" selected={year === "2019" ? true : false}>
            2019
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
