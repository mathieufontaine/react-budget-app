import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {v4 as uuidv4} from 'uuid';

const AddTransaction = () => {

    const [income, setIncome] = useState({
        incomeText:'',
        incomeAmount: 0
    })
    const [expense, setExpense] = useState({
        expenseText:'',
        expenseAmount: 0
    })

    const {incomeText, incomeAmount} = income;
    const {expenseText, expenseAmount} = expense;


    const {addIncome, addExpense} = useContext(GlobalContext);


    const handleIncomeSubmit = (e) => {
        e.preventDefault();
        if(incomeText !== '' && incomeAmount !== 0){
            const newIncome = {
                id: uuidv4(),
                text: incomeText,
                amount: +incomeAmount
            };
            addIncome(newIncome);
            setIncome({
                incomeText: '',
                incomeAmount: 0
            });
        }
    }

    const handleExpenseSubmit = (e) => {
        e.preventDefault();
        if(expenseText !== '' && expenseAmount !== 0){
            const newExpense = {
                id: uuidv4(),
                text: expenseText,
                amount: +expenseAmount
            };
            addExpense(newExpense);
            setExpense({
                expenseText: '',
                expenseAmount: 0
            });
        }
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleIncomeSubmit}>
                <div className="input-group income">
                    <input type="text"
                            name="incomeText"
                            value ={incomeText}
                            placeholder = "Add income.."
                            required
                            autoComplete="off"
                            onChange={(e) => setIncome({...income,[e.target.name]:e.target.value})}
                    />
                    <input type="number"
                            name="incomeAmount"
                            required
                            value ={incomeAmount}
                            placeholder = "Add amount.."
                            autoComplete="off"
                            onChange={(e) => setIncome({...income,[e.target.name]:e.target.value})}
                    />
                    <input type="submit" value="submit"/>
                </div>
            </form>
            <form  onSubmit={handleExpenseSubmit}>
                <div className="input-group expense">
                    <input type="text"
                            name="expenseText"
                            required
                            value={expenseText}
                            placeholder = "Add expense.."
                            autoComplete="off"
                            onChange={(e) => setExpense({...expense,[e.target.name]:e.target.value})}
                    />
                    <input type="number"
                            placeholder = "Add amount.."
                            required
                            value={expenseAmount}
                            name="expenseAmount"
                            autoComplete="off"
                            onChange={(e) => setExpense({...expense,[e.target.name]:e.target.value})}
                    />
                    <input type="submit" value="submit"/>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
