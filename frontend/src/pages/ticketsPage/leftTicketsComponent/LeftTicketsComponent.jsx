import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './leftTicketsComponent.module.css';
import TicketItem from '../../../components/ticketItem/TicketItem';


function LeftTicketsComponent(props) {

    const { tickets, setTicketInfo } = props;

    const [filter, setFilter] = useState('');

    const [filteredTickets, setFilteredTickets] = useState();

    const handleChange = (e) =>{
        setFilter(e.target.value);
    }

    return (
        <div className={styles.ticketsList}>
            <input className={styles.searchField} onChange={(e)=>{handleChange(e)}} type="text" />
            <div className={styles.searchIcon}></div>
            <div className={styles.leftTicketsHolder}>
                <div className={styles.ticketsHeader}>
                    <div>OWNER</div><div>REPORTED</div><div>ASSET</div><div>STATUS</div>
                </div>
                    {
                        tickets.length ? tickets.map((item) => {
                            if(filter!==''){
                                const itemText = `${item.number+item.reportedTime+item.asset.name+item.status}`.toLowerCase();
                                if(itemText.includes(filter.toLowerCase())){
                                    return <TicketItem setTicketInfo={setTicketInfo} ticket={item} key={item.ticketId} />
                                }
                            }
                            else{
                                return <TicketItem setTicketInfo={setTicketInfo} ticket={item} key={item.ticketId} />
                            }
                        }) : <p>Loading ...</p>
                    }
            </div>
        </div>
    );
}

export default LeftTicketsComponent;