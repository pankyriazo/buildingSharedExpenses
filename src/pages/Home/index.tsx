import React from 'react';

import Apartments from '../../components/Apartments';
import Expenses from '../../components/Expenses';

import styles from './index.module.scss';

function Home() {
    return (
        <>
            <div className={styles.container}>
                <Apartments></Apartments>
                <Expenses></Expenses>
            </div>
        </>
    );
}

export default Home;
