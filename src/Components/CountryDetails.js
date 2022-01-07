import React from 'react';

import classes from "./CountryDetails.module.css";


const countryDetails = (props) => {
    return (
        <li className={classes.countryDetails}>
            <div className={classes.countryIcon}>
                <span>{props.country}</span>
                <img src={props.flag} alt="" />
            </div>
            <div className={classes.casesDetails}>
                <div className={classes.casesBox}>
                    <a href="#/">{props.totalCase}</a>
                    <p className="yesterday">Last 24 hours: <strong>{props.newCase}</strong></p>
                </div>
                <div className={classes.casesBox}>
                <a href="#/">{props.totalDeaths}</a>
                    <p className="yesterday">Last 24 hours: <strong>{props.newDeaths}</strong></p>
                </div>
                <div className={classes.casesBox}>
                <a href="#/">{props.totalRecovered}</a>
                    <p className="yesterday">Last 24 hours: <strong>{props.newRecovered}</strong></p>
                </div>
            </div>
        </li>
        
    )
}

export default countryDetails;