import "./App.css";
import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./components/Expenses/ExpensesBackground.css";
const App = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [newExpenses, setNewExpenses] = useState([]);
  const [expenses, setExpenses] = useState([
    { id: "e1", title: "Ipad", amount: 94.12, date: new Date(2020, 7, 14) },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2020, 2, 12) },
    {
      id: "e3",
      title: "New Iphone",
      amount: 49.99,
      date: new Date(2021, 8, 14),
    },
  ]);
  useEffect(() => {
    console.log(expenses, "expenses useEffect");
    setNewExpenses(expenses);
  }, [expenses]);

  const handleAddExpense = (expense) => {
    console.log("here");
    setExpenses((prevState) => {
      return [
        {
          title: expense.title,
          amount: expense.amount,
          id: expense.id,
          date: new Date(expense.formDate),
        },
        ...prevState,
      ];
    });
  };
  return (
    <div>
      <NewExpense
        onAddExpense={handleAddExpense}
        showAdd={showAdd}
      ></NewExpense>
      <Expenses items={expenses} newitems={newExpenses} />
    </div>
  );
};

export default App;
