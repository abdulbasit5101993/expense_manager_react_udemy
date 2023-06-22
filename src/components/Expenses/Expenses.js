import "./Expenses.css";
import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  console.log("props", props);
  const [items, setItems] = useState(props.items);
  console.log(items, "items");
  useEffect(() => {
    setItems(props.items);
  }, [props?.items]);

  const filterByYear = (filteredDate) => {
    console.log("filteredDate", filteredDate);
    const filteredItems = props.items.filter(
      (item) => item.date.getFullYear() == filteredDate
    );
    if (filteredDate !== "Select Year") {
      setItems(filteredItems);
    } else {
      setItems(props.items);
    }
  };
  return (
    <div>
      <h1>{items?.length}</h1>
      <Card className="expenses">
        <ExpensesFilter filterByYear={filterByYear} className="expenses" />
        {items?.length > 0 ? (
          items.map((item, index) => <ExpenseItem expense={item} key={index} />)
        ) : (
          <span className="no_records_found">
            No Records Found for the selected filter
          </span>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
