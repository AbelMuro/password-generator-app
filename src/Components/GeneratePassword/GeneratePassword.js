import React from 'react';
import styles from './styles.module.css';
import CheckBoxes from './CheckBoxes';
import PasswordLength from './PasswordLength';
import PasswordStrength from './PasswordStrength'
import {useDispatch} from 'react-redux';


function GeneratePassword() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'GENERATE_PASSWORD'});
    }

    return(
        <form className={styles.generate} onSubmit={handleSubmit}>   
            <PasswordLength/>
            <CheckBoxes/>
            <PasswordStrength/>
            <button className={styles.submit}>
                Generate <img className={styles.arrow}/>
            </button>
        </form>
    )
}

export default GeneratePassword;