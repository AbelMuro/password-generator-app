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
        let uppercase = e.target.elements.uppercase.value;
        let lowercase = e.target.elements.lowercase.value;
        let numbers = e.target.elements.numbers.value;
        let symbols = e.target.elements.symbols.value;

        length = Number(length);                           //type conversion
        uppercase = JSON.parse(uppercase);
        lowercase = JSON.parse(lowercase);
        numbers = JSON.parse(numbers);
        symbols = JSON.parse(symbols);

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
                Generate <img className={styles.arrow}/>
            </button>
        </form>
    )
}

export default GeneratePassword;