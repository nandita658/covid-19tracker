import React, { useEffect, useState } from 'react';

import Legend from '../Components/Legend';
import Map from '../Components/Map';
import LoadCountriesTask from '../tasks/LoadCountriesTask';
import legendItems from '../entities/LegendItems';

const CovidMap = () => {
    const [countries, setCountries] = useState([]);
    const legendItemsInReverse = [...legendItems].reverse();

    const load = () => {
        const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load(setCountries);
    };

    useEffect(load, []);

    // console.log(countries);

    return (
        <div style={{width: "90%", marginLeft: "auto", marginRight: "auto", marginTop: "100px"}}>
            {countries.length === 0 ? <p>Loading...</p> : (
                <div>
                    <Map countries={countries} />
                    <Legend legendItems = {legendItemsInReverse} />
                </div>
            )}
        </div>
    )
}

export default CovidMap;
