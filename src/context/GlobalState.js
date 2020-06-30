import React, {createContext, useReducer, useEffect} from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
    incomeTransactions: JSON.parse(localStorage.getItem("incomeTransactions")) || [],
    expenseTransactions: JSON.parse(localStorage.getItem("expenseTransactions")) || [],
}

export const GlobalContext = createContext(initialState);


const GlobalContextProvider = ({ children }) => { 
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("incomeTransactions", JSON.stringify(state.incomeTransactions))
        localStorage.setItem("expenseTransactions", JSON.stringify(state.expenseTransactions))
    });


    function addIncome (transaction) {
        dispatch({
            type: 'ADD_INCOME',
            payload: transaction
        });
    }

    function addExpense (transaction) {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: transaction
        });
    }

    // function deleteTransaction (id) {
    //     dispatch({
    //         type: 'DELETE_TRANSACTION',
    //         payload: id
    //     });
    // }

    function removeIncome (id) {
        dispatch({
            type: 'DELETE_INCOME',
            payload: id
        });
    }

    function removeIncome (id) {
        dispatch({
            type: 'DELETE_INCOME',
            payload: id
        });
    }

    function removeExpense (id) {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        });
    }
    return (
        <GlobalContext.Provider value = {{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions,
            addIncome,
            addExpense,
            // deleteTransaction
            removeIncome,
            removeExpense
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;