import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function ExpenseTransaction({ transaction }) {
    const { removeExpense } = useContext(GlobalContext);

    return (
        <li className="transaction">
            <span className="transaction-text">{transaction.text}</span>
            <span className="transaction-amount">${transaction.amount}</span>
            <button className="delete-btn"
                    onClick={() => removeExpense(transaction.id)}    
                    >
                <i className="fa fa-trash"></i>
            </button>
         </li>
    )
}

export default ExpenseTransaction
