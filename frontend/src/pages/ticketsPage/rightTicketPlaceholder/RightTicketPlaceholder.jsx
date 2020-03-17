import React from 'react';
import styles from './rightTicketPlaceholder.module.css';


function RightTicketPlaceholder() {

    ;

    return (
        <div className={styles.rightNoTicketInfo}>
            <div className={styles.noTicketPlaceholder}>
            <div className={styles.cross}/>
            <div>No tickets selected</div></div>  
        </div>
    );
}

export default RightTicketPlaceholder;