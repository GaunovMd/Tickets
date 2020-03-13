import React from 'react';
import styles from './ticketItem.module.css';


function UserItem(props) {

    const { image, reported, asset, status } = props;

    return (
        <div className={styles.item}>
            <div className={styles.ownerImage}>{image}</div>
            <h2 className={styles.ticketItem}>{reported}</h2>
            <h2 className={styles.ticketItem}>{asset}</h2>
            <h2 className={styles.ticketItem}>{status}</h2>
        </div>
    );
}

export default UserItem;