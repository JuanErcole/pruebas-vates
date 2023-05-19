import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
    const[enteredTitle, setEnteredTitle]= useState('');
    const[enteredAmount, setEnteredAmount]= useState('');
    const[enteredDate, setEnteredDate]= useState('');
    const[error, setError]= useState(false);
    // puedo usar 3 states distintos o 1 pasandole un objeto
    
    function titleChangeHandler(event){
        console.log(event.target.value)
        setEnteredTitle(event.target.value)
    }

    function amountChangeHandler(event){
        console.log(event.target.value)
        setEnteredAmount(event.target.value)
    }

    function dateChangeHandler(event){
        console.log(event.target.value)
        setEnteredDate(event.target.value)
    }

    console.log(props.abril(enteredTitle))

    function submitHandler(event){
        
        event.preventDefault();             //evita que se relodee la pagina y se pierda lo escrito en el forms
        
        if (enteredTitle !=='' && enteredAmount !=='' && enteredDate !==''){
            
            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            }
    
            
    
            props.onSaveExpenseData(expenseData)
            setEnteredAmount('')
            setEnteredTitle('')
            setEnteredDate('')
        }
        else{
            setError(true)
        }

    }

    return (
        <>
        {error && <p>Alguno de los inputs está vacío</p>}
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                    type='text' 
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                    type='number'
                    value={enteredAmount}
                    onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                    type='date' 
                    value={enteredDate}
                    onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
        </>

    );

};

export default ExpenseForm;