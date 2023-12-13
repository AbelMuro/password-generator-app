import React, {useState} from 'react';
import styles from './styles.module.css';
import icons from './icons';

function CheckBox() {
    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    }

    return(
        <label className={styles.checkbox}>
            {checked && <img src={icons['mark']} className={styles.checkbox_mark}/>}
            <input type='checkbox' className={styles.ignore} checked={checked} onChange={handleChecked}/>
        </label>
    )
}

export default CheckBox;