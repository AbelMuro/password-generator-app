import React from 'react';
import styles from './styles.module.css';

function PasswordLength() {
    return(
        <div className={styles.generate_length}>
            <p>
                Character Length
            </p>
            <span>
                10
            </span>
        </div>
    )
}

export default PasswordLength;