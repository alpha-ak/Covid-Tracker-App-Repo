import React, { useState, useEffect } from "react";
//import PropTypes from "prop-types";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");

  // https://disease.sh/v3/covid-19/countries

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div class="app__header">
        <h1>Covid-19 Tracker!! </h1>

        <FormControl class="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {/* Loop on countries list to show in dropdown menu options */}
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* Infobox */}
      {/* Infobox */}
      {/* Infobox */}

      {/* Table of country wise data */}
      {/* Graphs */}

      {/* Map */}
    </div>
  );
}

export default App;
