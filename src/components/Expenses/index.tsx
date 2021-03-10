import React from 'react';

import Expense from '../Expense';

function Expenses() {
    return (
        <>
            <h2>Expenses</h2>
            <ul>
                <li>
                    <Expense index={1} />
                </li>
                <li>
                    <Expense index={2} />
                </li>
            </ul>
        </>
    );
}

export default Expenses;
