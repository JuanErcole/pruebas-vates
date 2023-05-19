
import React, {useState} from 'react';

import './Expenses.css'
//import '.../App'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card.js';

function Expenses(props){
    
    return(
        /*
        <Card className="expenses">
            <ExpenseItem                       //componente del tipo ExpenseItem (exportado de ExpenseItem.js)
            title = {props.items[0].title}     //atributos asignados del array
            amount = {props.items[0].amount}
            date = {props.items[0].date}
            ></ExpenseItem>

            <ExpenseItem
            title = {props.items[1].title}
            amount = {props.items[1].amount}
            date = {props.items[1].date}
            ></ExpenseItem>
                    <ExpenseItem
            title = {props.items[2].title}
            amount = {props.items[2].amount}
            date = {props.items[2].date}
            ></ExpenseItem>
        </Card>
        */
        <>
        
        {
            props.expenses.length > 0 ?
            <Card className="expenses">
            {
            props.expenses.map(expense =>
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            ></ExpenseItem>)
            }
            </Card>
            : null

        }
        
        </>
        
    );
}

export default Expenses;