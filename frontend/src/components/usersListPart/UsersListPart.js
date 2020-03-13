import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UserItem from '../userItem/UserItem';

const useStyles = makeStyles(theme => ({
  root:{
    width: '30%',
    paddingRight: '20px',
  },
  searchField:{
    width: '100%',
    background: '#252525',
    color: '',
    border: '4px solid #323232', 
    borderRadius: '4px',
    outline: 'none',
    color: '#ADADAD',
  },
  usersHolder:{
    marginTop: '20px',
    background: '#323232',
    display: 'flex',
    flexDirection: 'column',
  },

  }));

function UsersListPart() {

  const classes = useStyles();

  const [users, setUsers] = useState([
    {image: 'asd', reported: '12/02/21', asset:'Sign', status:'asd'},
    {image: 'asd', reported: '12/02/21', asset:'Sign', status:'asd'},
    {image: 'asd', reported: '12/02/21', asset:'Sign', status:'asd'}]
  );
    
  return (
  <div className={classes.root}>
    <input className={classes.searchField} type="text"></input>
    <div className={classes.usersHolder}>
      {users.map((itm) => (<UserItem image={itm.image} reported={itm.reported} asset={itm.asset} status={itm.status}/>))}
    </div>
  </div>
  );
}

export default UsersListPart;
