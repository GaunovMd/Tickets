import React from 'react';
import styles from './userItem.module.css';


function UserItem(props) {

    const { image, reported, asset, status } = props;

    return (
        <div className={styles.item}>
            <h2>{image}</h2>
            <h2>{reported}</h2>
            <h2>{asset}</h2>
            <h2>{status}</h2>
        </div>
    );
}

export default UserItem;