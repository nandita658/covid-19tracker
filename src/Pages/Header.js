import { useEffect, useState } from 'react';
import InfoBox from '../Components/InfoBox';
import classes from './Header.module.css';

import numeral from 'numeral';

const prettyPrintStat = (stat) =>
  stat ? numeral(stat).format("0.0a") : "0";

const Header = () => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const fetchInfo = async() => {
            const response = await fetch('https://disease.sh/v3/covid-19/all');
            const responseData = await response.json();
            // console.log(responseData);
            setInfo(responseData);
        };
        fetchInfo();
    }, []);

    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <h1>Covid-19 Tracker</h1>
                <p>Let's checkout covid-19 information.</p>
            </div>
            <div className={classes.infoBox}>
                <InfoBox title='Cases' todayInfo={prettyPrintStat(info.todayCases)} total={prettyPrintStat(info.cases)} />
                <InfoBox title='Active Cases' todayInfo='' total={prettyPrintStat(info.active)}  />
                <InfoBox title='Recovered' todayInfo={prettyPrintStat(info.todayRecovered)} total = {prettyPrintStat(info.recovered)} />
                <InfoBox title='Deceased' todayInfo={prettyPrintStat(info.todayDeaths)} total={prettyPrintStat(info.deaths)} />
            </div>
        </div>
    )
}

export default Header;