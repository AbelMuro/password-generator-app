import React, {useRef, useEffect} from 'react';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';


//* i will need to style the backgroind color of container to green and create another div that has background color of black, the size of the div will be based on the value*/
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
        <>
            <div className={styles.generate_length}>
                <p>
                    Character Length
                </p>
                <span>
                    {length}
                </span>
            </div>  
            <div className={styles.container}>
                <input 
                    type='range' 
                    name='length'
                    className={styles.bar}
                    min='0'
                    max='20'
                    value={length}
                    onChange={handleChange}/>     
                <div className={styles.rightSide} ref={rightSideBar}/>           
            </div>   

        </>

    )
}

export default PasswordLength;