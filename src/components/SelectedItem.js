const SelectedItem = ({country, index}) => {

    // const handleSelect = function () {
    //     console.log(`We have selected ${country.name.common}`)
    // }

    return <option value={index}>{country.name.common}</option>

}

export default SelectedItem