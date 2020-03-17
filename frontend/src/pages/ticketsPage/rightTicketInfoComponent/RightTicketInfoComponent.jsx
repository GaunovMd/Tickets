import React, {useEffect, useState} from 'react';
import styles from './rightTicketInfoComponent.module.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function RightTicketInfoComponent(props) {
  
  const [currentTicket, setCurrentTicket] = useState();

  async function getCurrentTicket(id){
    try{
      const {data} = await axios.get('https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json');

      const ticket = data.find(item => item.ticketId === +id); 

      setCurrentTicket(ticket);
      
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getCurrentTicket(props.match.params.id);
  }, [props.match.params.id]);

    return (
      <>
      {currentTicket ? 
            <>
            <div className={styles.ticketPartHeader}>
              <div className={styles.number}>
                <span className={styles.darken}>TICKET NO: </span>
                {currentTicket.number}
                </div>
              <div>
                <span className={styles.darken}>
                  LAST UPDATED {currentTicket.lastUpdatedTime}
                </span>
              </div>
            </div>
            <div className={styles.ticketItem}>
              <div className={styles.ticketItemHeader}>
                <span className={styles.lighten}>
                  Owner
                </span>
              </div>
              <div className={styles.ticketItemContent}>
                <div className={styles.owner}>
                  <img className={styles.ownerImage} src={currentTicket.owner.avatar} />
                  <div className={styles.ownerText}>{currentTicket.owner.firstName} {currentTicket.owner.lastName}
                  <p/>{currentTicket.owner.specialities}
                </div>
                </div>
              </div>
            </div>
            <div className={styles.ticketItem}>
              <div className={styles.ticketItemHeader}>
                <span className={styles.lighten}>Details</span>
              </div>
              <div className={styles.ticketItemContent}>
                <div className={styles.ticketInfoItem}>
                  <span className={styles.darken}>Reported</span> 
                  <p/>{currentTicket.reportedTime}
                  </div>
                <div className={styles.ticketInfoItem}>
                  <span className={styles.darken}>Status</span>
                  <p/>{currentTicket.status}
                  </div>
                <div className={styles.ticketInfoItem}>
                  <span className={styles.darken}>
                    Description
                  </span>
                  <p/>
                  {currentTicket.description}
                </div>
              </div>
            </div>
            <div className={styles.ticketItem}>
              <div className={styles.ticketItemHeader}>
                <span className={styles.lighten}>Asset</span>
              </div>
              <div className={styles.ticketItemContent}>
                <div className={styles.ticketInfoItem}>
                  <span className={styles.darken}>Name</span>
                  <p/>{currentTicket.asset.name}
                </div>
                <div className={styles.ticketInfoItem}>
                  <span className={styles.darken}>GeoCode</span>
                  <p/>{currentTicket.asset.geoCode}
                </div>
                <div className={styles.ticketInfoItem}>
                  <span className={styles.darken}>Location</span>
                  <p />
                  <span className={styles.location}>{currentTicket.asset.kmFrom}</span> <span className={styles.location}>{currentTicket.asset.kmTo}</span>
                </div>
              </div>
            </div>
          </>
      
      :
      <></>
      }
      </>
    );
}

export default withRouter(RightTicketInfoComponent);