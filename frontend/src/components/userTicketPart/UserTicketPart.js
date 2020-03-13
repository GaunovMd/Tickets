import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        background: '#323232',
        width: '70%',
    },
    ticketHolder:{
        display: 'block',
        background: 'red',
        width: '200px',
        margin: '0 auto',
    }
   
  }));

function UserTicketPart() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <div className={classes.ticketHolder}> X <p /> No Ticket Selected</div>
        </div>
    );
}

export default UserTicketPart;