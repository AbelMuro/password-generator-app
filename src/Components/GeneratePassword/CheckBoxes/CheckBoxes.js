import React from 'react';
import styles from './styles.module.css';
import CheckBox from './CheckBox';

function CheckBoxes() {
    return(
        <fieldset className={styles.checkboxes}>
            <CheckBox id='uppercase' label='Include Uppercase Letters'/>
            <CheckBox id='lowercase' label='Include Lowercase Letters'/>
            <CheckBox id='numbers' label='Include Numbers'/>
            <CheckBox id='symbols' label='Include Symbols'/>
        </fieldset>
    )
}

export default CheckBoxes;