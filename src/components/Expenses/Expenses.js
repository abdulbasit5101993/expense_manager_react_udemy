import "./Expenses.css";
import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [items, setItems] = useState(props.items);
  const filterByYear = (filteredDate) => {
    const filteredItems = props.items.filter((item) => item.date.getFullYear() == filteredDate);
    setItems(filteredItems);
  }
  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter filterByYear={filterByYear} className="expenses"/>
    {items?.length > 0 ? 
      (items.map((item, index) => (
        <ExpenseItem expense={item} key={index} />
      )))
      :
      (<span className="no_records_found">
            No Records Found for the selected filter
            </span>)
    }
    </Card>
    </div>
  );
};

export default Expenses;
