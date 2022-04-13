import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [showAdd, setShowAdd] = useState(false);
  const onAddExpense=(expenseInputData) =>{

    const expenseData = {
      ...expenseInputData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
    console.log(expenseData,'NewExpense');
  }
  const handleShow = () => {
    setShowAdd(!showAdd);
  }
  return (
    <div>
      <div className="new-expense" onClick={handleShow}><button>Add Expense</button></div>
      {showAdd &&

      <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onAddExpense} setShowAdd={setShowAdd}></ExpenseForm>
    </div>
      }
    </div>
  );
};

export default NewExpense;
