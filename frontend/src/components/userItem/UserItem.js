import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    item:{
      width: '30%',
      paddingRight: '20px',
      display: 'flex',
    },
}));

function UserItem(props) {
    const classes = useStyles();

    const { image, reported, asset, status } = props;

    return (
        <div className={classes.item}>
            <h2>{image}</h2>
            <h2>{reported}</h2>
            <h2>{asset}</h2>
            <h2>{status}</h2>
        </div>
    );
}

export default UserItem;