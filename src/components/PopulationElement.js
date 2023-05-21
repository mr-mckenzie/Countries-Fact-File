const PopulationElement = ({country, worldPopulation}) => {

    const population = country.population
    const percentPopulation = (population / worldPopulation) * 100
    const oneInEvery = Math.round(worldPopulation/population)
    const populationDensity = Math.round(population/country.area)
    let populationString = population
    if (population / 1000000000 >= 1) {
      populationString = `${(Math.round(population/10000000))/100}b`
  } else if (population / 100000 >= 1) {
        populationString = `${(Math.round(population/10000))/100}m`
    }

    if (!population){
        return <aside className="population-element"><p>Unfortunately, nobody lives there and the sunrise goes unseen every day!</p></aside>
    }

    const citizen = country.demonyms.eng.m

    return (
      <aside className="population-element">
        <p>Population: {populationString}</p>
        <p>% of world population: {percentPopulation}</p>
        <p>That means roughly 1 out of every {oneInEvery} people in the world is {citizen}.</p>
        <p>Population density: {populationDensity} {citizen}s per km<sup>2</sup></p>
      </aside>
    )
}
  
export default PopulationElement