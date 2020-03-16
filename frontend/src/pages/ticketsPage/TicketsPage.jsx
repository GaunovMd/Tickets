import React, { useState, useEffect } from 'react';
import styles from './ticketsPage.module.css';
import axios from 'axios';
import LeftTicketsComponent from './leftTicketsComponent/LeftTicketsComponent';
import RightTicketInfoComponent from './rightTicketInfoComponent/RightTicketInfoComponent';
import { Route } from 'react-router-dom';
import RightTicketPlaceholder from './rightTicketPlaceholder/RightTicketPlaceholder';


function TicketsPage() {

  const [tickets, setTickets] = useState([]);

  const [currentTicket, setCurrentTicket] = useState();

  async function getTickets(){
    try{
      const { data } = await axios.get('https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json');
      setTickets(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getTickets();
  }, []);
  

  const setTicketInfo = (id) =>{
    setCurrentTicket(tickets.find(ticket=>ticket.ticketId===id));
  }

  return (
    <div className={styles.rootContainer}>
        <div className={styles.mainHolder}>
          <header className={styles.header}>
            <h1>Tickets</h1>
          </header>

          <div className={styles.contentHolder}>
            <LeftTicketsComponent tickets={tickets} setTicketInfo={setTicketInfo}/>
            <div className={styles.ticketHolder}>
              <div className={styles.rightTicketInfo}>
                <Route exact path='/tickets/:id' component={RightTicketInfoComponent}/>
                <Route exact path='/' component = {RightTicketPlaceholder} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default TicketsPage;