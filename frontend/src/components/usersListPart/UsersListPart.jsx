import React, { useState } from 'react';
import UserItem from '../userItem/UserItem.jsx';
import styles from './usersListPart.module.css';


function UsersListPart() {

  const [users, setUsers] = useState([
    {image: 'asd', reported: '12/02/21', asset:'Sign', status:'asd'},
    {image: 'asd', reported: '12/02/21', asset:'Sign', status:'asd'},
    {image: 'asd', reported: '12/02/21', asset:'Sign', status:'asd'}]
  );
    
  return (
  <div className={styles.root}>
    <input className={styles.searchField} type="text"></input>
    <div className={styles.usersHolder}>
      {users.map((itm) => (<UserItem image={itm.image} reported={itm.reported} asset={itm.asset} status={itm.status}/>))}
    </div>
  </div>
  );
}

export default UsersListPart;
