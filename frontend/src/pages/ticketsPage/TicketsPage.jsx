import React from 'react';
import UsersListPart from '../../components/usersListPart/UsersListPart.jsx';
import UserTicketPart from '../../components/userTicketPart/UserTicketPart.jsx';
import styles from './ticketsPage.module.css';


function TicketsPage() {
  return (
    <div className={styles.root}>
        <div className={styles.mainHolder}>
            <header className={styles.header}>
                <h1>Tickets</h1>
            </header>
            <div className={styles.contentHolder}>
              <UsersListPart />
              <UserTicketPart />
            </div>
        </div>
    </div>
  );
}

export default TicketsPage;