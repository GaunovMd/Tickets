import React, { useState } from 'react';
import styles from './ticketsPage.module.css';
import TicketItem from '../../components/ticketItem/TicketItem';

function TicketsPage() {

  const [users, setUsers] = useState([
    {image: 'asd', reported: '12/02/21', asset:'Sign', status:'asd'},
    {image: 'asd', reported: '12/02/21', asset:'Sign', status:'asd'},
    {image: 'asd', reported: '12/02/21', asset:'Sign', status:'asd'}]
  );

  const currentTicket = 1;

  const number = 'PU-OV-5';
  const date = '02/08/19 07:32';
  const name = 'Clark Kent';
  const post = 'ENGINEER';

  const reported = '12/02/21';
  const status = 'asd';
  const description = 'Ticket description';
  const ticketName = 'Switch warming';
  const geoCode = 122;
  const latitude = 233;
  const longtitude = 222;

  return (
    <div className={styles.rootContainer}>
        <div className={styles.mainHolder}>
          <header className={styles.header}>
            <h1>Tickets</h1>
          </header>
          <div className={styles.contentHolder}>
            <div className={styles.ticketsList}>
              <input className={styles.searchField} type="text"></input>
                <div className={styles.ticketsHolder}>
                  <div className={styles.ticketsHeader}>
                    <div>OWNER</div><div>REPORTED</div><div>ASSET</div><div>STATUS</div>
                  </div>
                  {users.map((itm, index) => (<TicketItem key={index} image={<div className={styles.littleOwnerImage}/>} reported={itm.reported} asset={itm.asset} status={itm.status}/>))}
                </div>
              </div>

              <div className={styles.ticketHolder}>
              {currentTicket!==0 ? 
                  <div className={styles.rightTicketInfo}>
                    <div className={styles.ticketPartHeader}>
                      <div className={styles.number}><span className={styles.darken}>TICKET NO: </span>{number}</div>
                      <div><span className={styles.darken}>LAST UPDATED {date}</span></div>
                    </div>
                    <div className={styles.ticketItem}>
                      <div className={styles.ticketItemHeader}>
                        <span className={styles.lighten}>Owner</span>
                      </div>
                      <div className={styles.ticketItemContent}>
                        <div className={styles.owner}>
                          <div className={styles.ownerImage}></div>
                          <div className={styles.ownerText}>{name}<p/>{post}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ticketItem}>
                      <div className={styles.ticketItemHeader}>
                        <span className={styles.lighten}>Details</span>
                      </div>
                      <div className={styles.ticketItemContent}>
                        <div className={styles.ticketInfoItem}><span className={styles.darken}>Reported</span> <p/>{reported}</div>
                        <div className={styles.ticketInfoItem}><span className={styles.darken}>Status</span><p/>{status}</div>
                        <div className={styles.ticketInfoItem}><span className={styles.darken}>Description</span><p/>{description}</div>
                      </div>
                    </div>
                    <div className={styles.ticketItem}>
                      <div className={styles.ticketItemHeader}>
                        <span className={styles.lighten}>Asset</span>
                      </div>
                      <div className={styles.ticketItemContent}>
                        <div className={styles.ticketInfoItem}><span className={styles.darken}>Name</span> <p/>{ticketName}</div>
                        <div className={styles.ticketInfoItem}><span className={styles.darken}>GeoCode</span><p/>{geoCode}</div>
                        <div className={styles.ticketInfoItem}><span className={styles.darken}>Location</span><p/>{latitude} {longtitude}</div>
                      </div>
                    </div>
                  </div>
              
              :
              <div className={styles.rightNoTicketInfo}>
                <div className={styles.noTicketPlaceholder}>
                  <div className={styles.cross}/><p/>No tickets selected</div>  
              </div>}
              </div>            
            </div>
        </div>
    </div>
  );
}

export default TicketsPage;