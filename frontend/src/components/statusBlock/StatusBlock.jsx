import React from 'react';
import styles from './statusBlock.module.css';


function StatusBlock(props) {

    const { status } = props;

    return (
        <div className={
            status==='COM' ? styles.statusItemCom :
            status==='ASD' ? styles.statusItemAsd :
            styles.statusItemUna}>
           {status}
        </div>
    );
}

export default StatusBlock;