import React from "react";
import Expense from "./components/Expense";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationofexpendature: "grocery"
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) ,  locationofexpendature: "Electronics"},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationofexpendature: "vehicle"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      locationofexpendature: "wood"
    },
  ];
  return (
    <>
      <Expense title={expenses[0].title} amount={expenses[0].amount} date = {expenses[0].date} locationofexpendature={expenses[0].locationofexpendature}/>
      <Expense title={expenses[1].title} amount={expenses[1].amount} date = {expenses[1].date} locationofexpendature={expenses[1].locationofexpendature}/>
      <Expense title={expenses[2].title} amount={expenses[2].amount} date = {expenses[2].date} locationofexpendature={expenses[2].locationofexpendature}/>
      <Expense title={expenses[3].title} amount={expenses[3].amount} date = {expenses[3].date} locationofexpendature={expenses[3].locationofexpendature}/>
      
    </>
  );
}

export default App;
