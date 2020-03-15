import React, { useState } from 'react';
import styles from './ticketsPage.module.css';
import TicketItem from '../../components/ticketItem/TicketItem';

function TicketsPage() {

  const [users, setUsers] = useState([
    {image: 'asd', reported: '01/02/21', asset:'Switch warming', status:'com'},
    {image: 'asd', reported: '02/02/21', asset:'Turn on the light', status:'com'},
    {image: 'asd', reported: '03/02/21', asset:'Go out', status:'asd'},
    {image: 'asd', reported: '04/02/21', asset:'Clean windows', status:'una'},
    {image: 'asd', reported: '05/02/21', asset:'Wash hands', status:'asd'},
    {image: 'asd', reported: '06/02/21', asset:'Make wishes', status:'com'},
    {image: 'asd', reported: '07/02/21', asset:'Watch movie', status:'una'},
    {image: 'asd', reported: '08/02/21', asset:'Shake hands', status:'una'},
    {image: 'asd', reported: '09/02/21', asset:'Keep silent', status:'asd'},
    {image: 'asd', reported: '10/02/21', asset:'Go for a walk', status:'asd'}]
  );

  const currentTicket = 0;

  const number = 'PU-OV-5';
  const date = '02/08/19 07:32';
  const name = 'Clark Kent';
  const post = 'ENGINEER';
  const description = 'Ticket description';
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
                <div className={styles.leftTicketsHolder}>
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
                        <div className={styles.ticketInfoItem}><span className={styles.darken}>Reported</span> <p/>{users[0].reported}</div>
                        <div className={styles.ticketInfoItem}><span className={styles.darken}>Status</span><p/>{users[0].status}</div>
                        <div className={styles.ticketInfoItem}><span className={styles.darken}>Description</span><p/>{description}</div>
                      </div>
                    </div>
                    <div className={styles.ticketItem}>
                      <div className={styles.ticketItemHeader}>
                        <span className={styles.lighten}>Asset</span>
                      </div>
                      <div className={styles.ticketItemContent}>
                        <div className={styles.ticketInfoItem}><span className={styles.darken}>Name</span> <p/>{users[0].asset}</div>
                        <div className={styles.ticketInfoItem}><span className={styles.darken}>GeoCode</span><p/>{geoCode}</div>
                        <div className={styles.ticketInfoItem}><span className={styles.darken}>Location</span><p/>{latitude} {longtitude}</div>
                      </div>
                    </div>
                  </div>
              
              :
              <div className={styles.rightNoTicketInfo}>
                <div className={styles.noTicketPlaceholder}>
                  <div className={styles.cross}/><div>No tickets selected</div></div>  
              </div>}
              </div>            
            </div>
        </div>
    </div>
  );
}

export default TicketsPage;