import React from 'react';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import icons from './icons';

function CheckBox({id, label}) {
    const dispatch = useDispatch();
    const checked = useSelector(state => state[id]);

    const handleChecked = () => {
        const characterToInclude = id.toUpperCase();
        dispatch({type: `INCLUDE_${characterToInclude}`,[id]: !checked});
    }

    return(
        <fieldset className={styles.container}>
            <label className={styles.checkbox} htmlFor={id}>
                {checked && <img src={icons['mark']} className={styles.checkbox_mark}/>}
                <input id={id} name={id} type='checkbox' className={styles.ignore} checked={checked} onChange={handleChecked}/>
            </label>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
        </fieldset>

    )
}

export default CheckBox;