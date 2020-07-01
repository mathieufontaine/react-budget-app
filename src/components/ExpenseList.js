import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction'

const ExpenseList = () => {
    const { expenseTransactions } = useContext(GlobalContext);

    console.log(expenseTransactions);


    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {expenseTransactions.map(transaction => (
                    <ExpenseTransaction transaction={transaction} key={transaction.id} />
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList