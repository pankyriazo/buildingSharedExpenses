import React from 'react';

import Apartment from '../Apartment';

function Apartments() {
    return (
        <>
            <h2>Apartments</h2>
            <ul>
                <li>
                    <Apartment index={1} />
                </li>
                <li>
                    <Apartment index={2} />
                </li>
            </ul>
        </>
    );
}

export default Apartments;
