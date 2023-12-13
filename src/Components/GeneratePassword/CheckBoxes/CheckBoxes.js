import React from 'react';
import styles from './styles.module.css';
import CheckBox from './CheckBox';

function CheckBoxes() {
    return(
        <fieldset className={styles.checkboxes}>
            <CheckBox/>
        </fieldset>
    )
}

export default CheckBoxes;