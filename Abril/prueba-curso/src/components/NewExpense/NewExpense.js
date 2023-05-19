import './NewExpense.css'
import ExpenseForm from './ExpenseForm.js'

function NewExpense(props){
    
    function saveExpenseDataHandler(enteredExpenseData){
        
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    function mostrarNombre(nombre){
        console.log(nombre)
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense