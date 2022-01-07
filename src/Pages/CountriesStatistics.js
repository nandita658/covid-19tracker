import React, { useState } from 'react';

import HeadingNames from '../Components/HeadingNames';

import classes from './CountriesStatistics.module.css';
import CountryDetails from '../Components/CountryDetails';
import Card from '../UI/Card';
import DropDownFilterList from '../Components/DropDownFilterList';

const CountriesStatistics = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredSort, setFilteredSort] = useState('select');

    const filterChangeHandler = selectedSort => {
        setFilteredSort(selectedSort);
    };

    const searchHandler = (rows) => {
        return rows.filter(row => row.country.toLowerCase().indexOf(searchInput.toLowerCase()) > -1);
    };

    const data = searchHandler(props.countryDetails);

    const sortIncData = (data) => {
        const sortedData = [...data];

        sortedData.sort((a, b) => b.totalCases - a.totalCases);

        return sortedData;
    };

    const sortDescData = (data) => {
        const sortedData = [...data];
        sortedData.sort((a, b) => a.totalCases - b.totalCases);
        return sortedData
    };

    let filteredData;

    if (filteredSort === 'select') {
        filteredData = data;
    } else if (filteredSort === 'Increasing') {
        filteredData = sortDescData(data);
    } else if (filteredSort === 'Decreasing') {
        filteredData = sortIncData(data);
    }

    let countryDetailsList;

    if (data.length > 0) {
        countryDetailsList = filteredData.map(item => <CountryDetails key={item.id} country={item.country} flag={item.flag} totalCase={item.totalCases} totalDeaths={item.totalDeaths} totalRecovered={item.totalRecovered} newCase={item.todayCases} newDeaths={item.todayDeaths} newRecovered={item.todayRecovered} />);
    } else {
        countryDetailsList = <p style={{ color: "black", fontFamily: "sans-serif", textAlign: "left", marginLeft: "16px", marginTop: "30px", marginBottom: "30px" }}>No Result Found!</p>;
    }

    return (
        <div className={classes.countriesStats}>
            <h2>Countries Stats</h2>
            <div className={classes.searchBar}>
                <div className={classes.search}>
                    <form>
                        <div className={classes.searchInput}>
                            <input type="text" id="name" value={searchInput} placeholder='Enter country name' onChange={(event) => setSearchInput(event.target.value)} />
                        </div>
                    </form>
                </div>
                <div className={classes.filter}><DropDownFilterList selected={filteredSort} onChangeFilter={filterChangeHandler} /></div>
            </div>
            <HeadingNames />
            {props.isLoading && 
                <p 
                    style={{
                        fontFamily: "sans-serif",
                        color: "#2c2c2c",
                        marginTop: "10px"
                    }}
                >
                    Loading...
                </p>
            }
            {!props.isLoading &&
                <div className={classes.countryTable}>
                    <Card className={classes.countryStatsCard}>
                        <ul className={classes.countryList}>
                            {countryDetailsList}
                        </ul>
                    </Card>
                </div>
            }
        </div>
    )
}

export default CountriesStatistics;
