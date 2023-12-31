import React, {useRef, useEffect} from 'react';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';


/* remember, 
    the .container has a background-color: green, 
    the input[type=range] has a background-color: transparent*, 
    the .rightSide has a background-color: black 
*/
function PasswordLength() {
    const dispatch = useDispatch();
    const length = useSelector(state => state.length);
    const rightSideBar = useRef();

    const handleChange = (e) => {
        dispatch({type: 'UPDATE_LENGTH', length: e.target.value});
    }

    useEffect(() => {
        let width = 100 - (length/20 * 100);
        rightSideBar.current.style.width = `${width}%`;
    }, [length])

    return(
        <fieldset className={styles.length}>
            <div className={styles.length_title}>
                <label htmlFor='range'>
                    Character Length
                </label>
                <span>
                    {length}
                </span>
            </div>  
            <div className={styles.container}>
                <input 
                    id='range'
                    type='range' 
                    name='length'
                    className={styles.bar}
                    min='0'
                    max='20'
                    value={length}
                    onChange={handleChange}/>     
                <div className={styles.rightSide} ref={rightSideBar}/>           
            </div>   
        </fieldset>
    )
}

export default PasswordLength;