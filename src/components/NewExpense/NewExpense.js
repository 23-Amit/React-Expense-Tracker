import ExpenseForm from './ExpenseForm';
import'./NewExpense.css';



const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expensedata={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expensedata)
        
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
};

export default NewExpense;