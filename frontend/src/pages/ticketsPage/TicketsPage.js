import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UsersListPart from '../../components/usersListPart/UsersListPart';
import UserTicketPart from '../../components/userTicketPart/UserTicketPart';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100vw',
      height: '100vh',
      background: '#252525',
    },
    header:{
      textAlign: 'left',
      borderBottom: '0.4rem solid #6E43D9',
      color: '#ADADAD',
    },
    mainHolder:{
      padding: '20px',
    },
    contentHolder:{
      paddingTop: '20px',
      display: 'flex',
      width: '100%',
      height: 'auto',
      justifyContent: 'space-between',
    },
  }));

function Homepage() {
    const classes = useStyles();


  return (
    <div className={classes.root}>
        <div className={classes.mainHolder}>
            <header className={classes.header}>
                <h1>Tickets</h1>
            </header>
            <div className={classes.contentHolder}>
              <UsersListPart />
              <UserTicketPart />
            </div>
            
        </div>
    </div>
  );
}

export default Homepage;