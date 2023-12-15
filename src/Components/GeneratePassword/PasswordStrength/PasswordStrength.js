import React from 'react';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

function PasswordStrength(){
    const strength = useSelector(state => state.strength);
    let bars = ['barOne', 'barTwo', 'barThree', 'barFour'];

    const useBarColor = () => {
        if(strength <= 1)
            return '#F64A4A';
        else if(strength === 2)
            return '#FB7C58';
        else if(strength === 3)
            return '#F8CD65';
        else  if(strength === 4)
            return '#A4FFAF';
        else
            return '';
    }

    const displayRank = () => {
        if(strength <= 1)
            return 'Too Weak!';
        else if(strength === 2)
            return 'weak';
        else if(strength === 3)
            return 'medium';
        else  if(strength === 4) 
            return 'strong';
        else 
            return '';
    }

    return(
        <div className={styles.strength}>
            <p className={styles.strength_title}>
                Strength
            </p>
            <div className={styles.strength_meter}>
                {displayRank()}
                <div className={styles.bars}>
                    {bars.map((bar, i) => {
                        let currentIndex = i + 1;
                        let barColor = useBarColor();

                        if(currentIndex <= strength)    
                            return <div key={bar} className={styles.filledBars} style={{backgroundColor: barColor}}></div>
                        else
                            return <div key={bar} className={styles.emptyBars}></div>
                            
                    })}
                </div>
            </div>
        </div>
    )
}

export default PasswordStrength;