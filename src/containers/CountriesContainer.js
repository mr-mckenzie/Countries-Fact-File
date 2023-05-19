import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import CountrySelect from '../components/CountrySelect'
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClicked = function (country) {
        setSelectedCountry(country)
    }

    const worldPopulation = countries.reduce((accumulator, country) => {
        return accumulator + country.population
    }, 0)

    // const onCountrySelected = function (country) {
    //     setSelectedCountry(country)
    // }

    return (
        <div className="main-container">
            {/* <CountryList countries={countries} onCountryClicked={onCountryClicked}/> */}
            <CountrySelect countries={countries} setSelectedCountry={setSelectedCountry}/>
            {selectedCountry ? <CountryDetail country={selectedCountry} worldPopulation={worldPopulation}/> : null}
        </div>
    )
}

export default CountryContainer;
