const HeaderElement = ({worldPopulation, worldLandMass}) => {

    const populationString = `${Math.round(worldPopulation/10000000)/100} billion`

    return (
        <header>
            <h1>Countries of the World</h1>
            <p>World Population: {populationString}</p>
            <p>World Landmass: {worldLandMass.toLocaleString()} km<sup>2</sup></p>
            <hr></hr>
        </header>
    )

}

export default HeaderElement