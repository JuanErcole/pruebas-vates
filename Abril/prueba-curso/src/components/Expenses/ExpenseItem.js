import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card.js'

function ExpenseItem(props) {   //uso props y las uso {props.algo}
 
  const [title, setTitle] = useState(props.title); //useState devuelve un array, el [0] value, [1] updating function!!
  function clickHandler(){
    setTitle("updated!");                                     //llamo a la funcion que updetea el title
  }

  return (
    <Card className = "expense-item">
      <ExpenseDate date={props.date}/>                                                  
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
