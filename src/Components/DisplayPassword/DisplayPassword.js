import React from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

function DisplayPassword(){
    const password = useSelector(state => state.password);

    return(
        <div className={styles.container}>
            <p className={styles.password}>
                {password}
            </p>           
            <div className={styles.copyIcon}/> 
        </div>

    )
}

export default DisplayPassword;