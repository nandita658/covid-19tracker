import React from 'react';
import Card from '../UI/Card';

import classes from './InfoBox.module.css';

const InfoBox = props => {
    return (
        <Card className={classes.wrapper}>
            <div className={classes.info}>
                <div className={classes.title}>{props.title}</div>
                {props.todayInfo && <div className={classes.cases}>+{props.todayInfo}</div>}
                {!props.todayInfo && <div className={classes.active}></div>}
                <div className={classes.total}><span>Total {props.title}:</span> {props.total}</div>
            </div>
        </Card>
    )
}

export default InfoBox;
