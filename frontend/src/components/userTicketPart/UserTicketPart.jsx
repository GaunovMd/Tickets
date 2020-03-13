import React from 'react';
import styles from './userTicketPart.module.css';

function UserTicketPart() {

    return (
        <div className={styles.root}>
            <div className={styles.ticketHolder}> X <p /> No Ticket Selected</div>
        </div>
    );
}

export default UserTicketPart;