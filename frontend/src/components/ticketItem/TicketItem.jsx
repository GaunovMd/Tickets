import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './ticketItem.module.css';
import StatusBlock from '../statusBlock/StatusBlock';


function UserItem(props) {

    const { ticket, setTicketInfo } = props;

    const handleCLick = (e) => {
                
        setTicketInfo(ticket.ticketId);
        props.history.push(`/tickets/${ticket.ticketId}`)

    }

    return (
        <div className={ticket.current ? styles.itemHolderSelected : styles.itemHolder} onClick={(e)=>{handleCLick(e)}}>
            <img className={styles.littleOwnerImage} src={ticket.owner.avatar} />
            <h2 className={styles.ticketItem}>{ticket.reportedTime}</h2>
            <h2 className={styles.ticketItem}>{ticket.asset.name}</h2>
            <StatusBlock status={ticket.status==='completed' ? 'COM' : ticket.status==='assigned' ? 'ASD' : 'UNA'}/>
        </div>
    );
}

export default withRouter(UserItem);