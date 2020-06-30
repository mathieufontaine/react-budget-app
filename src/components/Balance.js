import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const Balance = () => {
    const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

    const incomeAmounts = incomeTransactions.map(transaction => transaction.amount);
    const incomeTotal = incomeAmounts.reduce((total, amount) => (total += amount), 0).toFixed(2);

    const expenseAmounts = expenseTransactions.map(transaction => transaction.amount);
    const expenseTotal = expenseAmounts.reduce((total, amount) => (total += amount), 0).toFixed(2);

    const balance = incomeTotal - expenseTotal;

    return (
        <div className="balance">
            <h2>Your Balance</h2>
            <h3>{ balance > 0 ? (`$${balance}`) : (`-$${Math.abs(balance)}`)}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>${incomeTotal}</p>
                </div>
                <div className="minus">
                    <h3>Expense</h3>
                    <p>${expenseTotal}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
