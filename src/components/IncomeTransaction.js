import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function IncomeTransaction({ transaction }) {
    const { removeIncome } = useContext(GlobalContext);

    return (
        <li className="transaction">
            <span className="transaction-text">{transaction.text}</span>
            <span className="transaction-amount">${transaction.amount}</span>
            <button className="delete-btn"
                    onClick={() => removeIncome(transaction.id)}    
                    >
                <i className="fa fa-trash"></i>
            </button>
         </li>
    )
}

export default IncomeTransaction
