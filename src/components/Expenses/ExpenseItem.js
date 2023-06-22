import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  console.log("props in the item", props);
  const [title, setTitle] = useState(
    props?.expense?.title ? props.expense.title : "Initial Title"
  );

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
