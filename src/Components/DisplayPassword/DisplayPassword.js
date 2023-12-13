import React from 'react';
import styles from './styles.module.css';


function DisplayPassword(){
    return(
        <div className={styles.container}>
            <p className={styles.password}>
                PTx1f5DaFX
            </p>           
            <div className={styles.copyIcon}/> 
        </div>

    )
}

export default DisplayPassword;