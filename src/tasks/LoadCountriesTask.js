import papa from "papaparse";
import legendItems from "../entities/LegendItems";
import features from "../data/countries.json";
import numeral from "numeral";
//    this.setState(features);

class LoadCountryTask {
  covidUrl =
    "https://corona.lmao.ninja/v2/countries?1&1";

  setState = null;
  countries = [];

  load = (setState) => {
    this.setState = setState;

    // papa.parse(this.covidUrl, {
    //   download: true,
    //   header: true,
    //   complete: (result) => {
    //     //console.log(result);

    //     this.#processCovidData(result.data);
    //   }
    // });

    fetch(this.covidUrl)
      .then(response => response.json())
      .then(
        result => {
          // for(const key in result) {
          //   console.log(result[key])
          // }
          this.#processCovidData(result);
        }
      )
  };

  #processCovidData = (countries) => {
    for (let i = 0; i < features.features.length; i++) {
      const country = features.features[i];
      const covidCountry = countries.find(
        (item) => country.properties.ISO_A3 === item.countryInfo.iso3
      );

      if (covidCountry != null) {
        let confirmed = Number(covidCountry.cases);
        country.properties.confirmed = confirmed;
        country.properties.confirmedText = this.#formatNumberWithCommas(confirmed);
      }
      this.#setCountryColor(country);
    }

    this.setState(features);
  };

  #setCountryColor = (country) => {
    const legendItem = legendItems.find((item) =>
      item.isFor(country.properties.confirmed)
    );

    if (legendItem != null) {
      country.properties.color = legendItem.color;
    }
    // console.log(country.properties.color)
  };

  #formatNumberWithCommas = (number) => number ? numeral(number).format('0.0a') : 0;
}

export default LoadCountryTask;