const CountrySelect = ({countries, setSelectedCountry, labelText}) => {

    const selectDropDown = countries.map( (country, index) => {
        return <option country={country} key={index} value={index}>{country.name.common}</option>
    })

    const onCountrySelected = function (index) {
        setSelectedCountry(countries[index])
        //console.log("index:", index)
    }


    const handleSelect = function (event) {
        console.log(`We have selected a country`)
        onCountrySelected(event.target.value)
    }

    return (
        <div className="select-box">
            <label htmlFor="country-select-box">{labelText}</label>
            <select name="countries" id="country-select-box" onChange={handleSelect}>
                <option value="">--Please choose a country--</option>
                {selectDropDown}
            </select>
        </div>
    )

}

export default CountrySelect