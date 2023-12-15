import React, {useRef, useEffect} from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

function DisplayPassword(){
    const password = useSelector(state => state.password);
    const copiedMessageRef = useRef();

    const handleCopy = () => {
       navigator.clipboard.writeText(password);
       copiedMessageRef.current.style.display = 'block';
    }

    useEffect(() => {
        copiedMessageRef.current.style.display = '';
    }, [password])

    return(
        <div className={styles.container}>
            <input 
                value={password} 
                className={styles.password} 
                placeholder='P4$5W0rD!' 
                readOnly
            /> 
            <div className={styles.copy}>
                <p className={styles.copy_message} ref={copiedMessageRef}>
                    COPIED
                </p>        
                <div className={styles.copy_icon} onClick={handleCopy}/>                 
            </div>
        </div>

    )
}

export default DisplayPassword;