import React from 'react'

import classes from './HeadingNames.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <p className={classes.heading}>Country</p>
            <p className={classes.heading}>Cases</p>
            <p className={classes.heading}>Deaths</p>
            <p className={classes.heading}>Recovered</p>
        </div>
    )
}

export default Header;