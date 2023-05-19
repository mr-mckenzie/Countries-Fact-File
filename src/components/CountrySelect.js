import SelectedItem from "./SelectedItem"

const CountrySelect = ({countries, setSelectedCountry}) => {

    const selectDropDown = countries.map( (country, index) => {
        return <SelectedItem country={country} key={index} index={index}/>
    })

    const onCountrySelected = function (index) {
        setSelectedCountry(countries[index])
        console.log("index:", index)
        //console.log(countries[])
    }


    const handleSelect = function (event) {
        console.log(`We have selected a country`)
        onCountrySelected(event.target.value)
    }

    return (

        <select name="countries" id="country-select-box" onChange={handleSelect}>
            <option value="">--Please choose a country--</option>
            {selectDropDown}
        </select>
    )

}

export default CountrySelect