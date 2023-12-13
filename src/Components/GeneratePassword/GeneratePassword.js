import React from 'react';
import styles from './styles.module.css';
import CheckBoxes from './CheckBoxes';
import PasswordLength from './PasswordLength';

function GeneratePassword() {
    return(
        <section className={styles.generate}>   
            <PasswordLength/>
            <CheckBoxes/>
        </section>
    )
}

export default GeneratePassword;