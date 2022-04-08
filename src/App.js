//import ExpenseItem from "./components/ExpenseItem";
import React,{useState} from "react";
import NewExpense  from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
//u can also use this syntax also(optional)but only js

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
//const App=()=> {
  function App() {
    const [expenses, setExpenses]= useState(DUMMY_EXPENSES);
  //this is how you would do it in regular JavaScript,
  //this is called imperative approach
  // const para =document.createElement('p');
  // para.textContent='This is also Visible';
  // document.getElementById('root').append(para);

  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  const addExpenseHandler = (expense) =>{
    // console.log('In App.js');
    // console.log(expense);
   // setExpenses([expense, ...expenses]);
   setExpenses((prevExpenses) => {
     return [expense, ...prevExpenses];
   });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  //   );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items ={expenses}/>

    </div>
  );
}

export default App;
