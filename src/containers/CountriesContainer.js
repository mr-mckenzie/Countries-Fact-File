import React, { useState, useEffect } from 'react'
import CountrySelect from '../components/CountrySelect'
import CountryDetail from '../components/CountryDetail'
import HeaderElement from '../components/Header';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      getCountries()
    }, [])

    const sortCountriesAlphabetically = function (inputCountryArray) {
        const sortedArray = [... inputCountryArray].sort((countryA, countryB) => {
            const nameA = countryA.name.common.toLowerCase()
            const nameB = countryB.name.common.toLowerCase()
            if (nameA < nameB) {
              return -1
            }
            if (nameA > nameB) {
              return 1
            }
            return 0
          })
          return sortedArray
        }

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(sortCountriesAlphabetically(countries)))
    }

    const [comparisonCountry, setComparisonCountry] = useState(null)

    const worldPopulation = countries.reduce((accumulator, country) => {
        return accumulator + country.population
    }, 0)

    const worldLandMass = countries.reduce((accumulator, country) => {
        return accumulator + country.area
    }, 0)

    // const onCountrySelected = function (country) {
    //     setSelectedCountry(country)
    // }

    return (
        <>
        <HeaderElement worldPopulation={worldPopulation} worldLandMass={worldLandMass}/>
        <main className="main-container">
            <CountrySelect countries={countries} setSelectedCountry={setSelectedCountry} labelText="Choose a country to learn more: "/>
            {selectedCountry ? <CountryDetail country={selectedCountry} worldPopulation={worldPopulation} worldLandMass={worldLandMass}/> : null}
            {selectedCountry ? <CountrySelect countries={countries} setSelectedCountry={setComparisonCountry} labelText="Choose a country to compare"/> : null}
        </main>
        </>
    )
}

export default CountryContainer;
