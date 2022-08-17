import { useState, useEffect, useCallback } from 'react';

import './App.css';
import CountriesStatistics from './Pages/CountriesStatistics';

import Header from "./Pages/Header";
import LinearGraph from './Pages/LinearGraph';
import CovidMap from './Pages/CovidMap';
import legendItems from './entities/LegendItems';
import features from './data/countries.json';
import numeral from 'numeral';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const processLoadData = useCallback((countries) => {
    for (let i = 0; i < features.features.length; i++) {
      const country = features.features[i];
      const covidCountry = countries.find(
        (item) => country.properties.ISO_A3 === item.countryInfo.iso3
      );

      if (covidCountry != null) {
        let confirmed = Number(covidCountry.cases);
        country.properties.confirmed = confirmed;
        country.properties.confirmedText = formatNumberWithCommas(confirmed);
      }

      setCountryColor(country);
    }
    setCountries(features);
  }, []);

  const setCountryColor = (country) => {
    const legendItem = legendItems.find((item) =>
      item.isFor(country.properties.confirmed)
    );

    if (legendItem != null) {
      country.properties.color = legendItem.color;
    }
  };

  const formatNumberWithCommas = (number) => number ? numeral(number).format('0.0a') : 0;


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://disease.sh/v3/covid-19/countries');
      const responseData = await response.json();

      processLoadData(responseData);

      const loadedData = [];
      for (const key in responseData) {
        loadedData.push({
          id: key,
          country: responseData[key].country,
          flag: responseData[key].countryInfo.flag,
          totalCases: responseData[key].cases,
          todayCases: responseData[key].todayCases,
          totalDeaths: responseData[key].deaths,
          todayDeaths: responseData[key].todayDeaths,
          totalRecovered: responseData[key].recovered,
          todayRecovered: responseData[key].todayRecovered,
        });
      }
      setCountryDetails(loadedData);
      setIsLoading(false);
    }
    fetchData();

  }, [processLoadData]);

  return (
    <div className="App">
      <Header />
      <CountriesStatistics countryDetails={countryDetails} isLoading={isLoading} />
      <LinearGraph title="Graphical Representation of last 30 days Stats" />
      <CovidMap countries={countries} />
    </div>
  );
}

export default App;