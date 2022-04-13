import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [formDate, setFormDate] = useState("");
  const [expenseData, setExpenseData] = useState({});
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleDateChange = (e) => {
    setFormDate(e.target.value);
  };

  useEffect(() => {
    const titleThrottle = setTimeout(() => {
      console.log(title, "title", expenseData);
      setExpenseData((prevState) => {return {...prevState,title: title}});
    }, 300);
    return () => {
      clearTimeout(titleThrottle);
    };
  }, [title]);

  useEffect(() => {
    const titleThrottle = setTimeout(() => {
      console.log(amount, "amount", expenseData);
      setExpenseData((prevState) => {return {...prevState,amount: amount}});
    }, 300);
    return () => {
      clearTimeout(titleThrottle);
    };
  }, [amount]);
  useEffect(() => {
    const titleThrottle = setTimeout(() => {
      setExpenseData((prevState) => {return {...prevState,formDate: formDate}});
      console.log(formDate, "formDate",expenseData);
    }, 300);
    return () => {
      clearTimeout(titleThrottle);
    };
  }, [formDate]);

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseFormData = {
      title : expenseData.title,
      amount : expenseData.amount,
      formDate : new Date(expenseData.formDate),
    };
    props.onSaveExpenseData(expenseData);
    props.setShowAdd(false);
    console.log(expenseData, 'expenseData');
    setTitle('');
    setAmount('');
    setFormDate('');

  }

  return (
    <div className="new-expense__controls">
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={handleTitle} value={title}></input>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" onChange={handleAmountChange} value={amount}></input>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" onChange={handleDateChange} value={formDate}></input>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
