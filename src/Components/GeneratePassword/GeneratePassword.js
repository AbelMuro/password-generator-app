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
        let length = e.target.elements[0].value           //referencing the input type range
        let uppercase = e.target.elements.uppercase.checked;
        let lowercase = e.target.elements.lowercase.checked;
        let numbers = e.target.elements.numbers.checked;
        let symbols = e.target.elements.symbols.checked;

        length = Number(length);                           //type conversion

        if(!length){
            alert('Please enter a length greater than 0');
            return;
        }

        if(!uppercase && !lowercase && !numbers && !symbols){
            alert('Please check at least one condition');
            return;
        }
            

        dispatch({type: 'GENERATE_PASSWORD'});
    }

    return(
        <form className={styles.generate} onSubmit={handleSubmit}>   
            <PasswordLength/>
            <CheckBoxes/>
            <PasswordStrength/>
            <button className={styles.submit}>
                Generate <div className={styles.arrow}/>
            </button>
        </form>
    )
}

export default GeneratePassword;