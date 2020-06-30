import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import IncomeTransaction from './IncomeTransaction'

const IncomeList = () => {

    const { incomeTransactions } = useContext(GlobalContext);

    console.log(incomeTransactions);

    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {incomeTransactions.map(transaction => (
                    <IncomeTransaction transaction={transaction} key={transaction.id} />
                ))}
            </ul>
        </div>
    )
}

export default IncomeList
