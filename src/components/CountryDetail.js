import NameElement from "./NameElement";
import PopulationElement from "./PopulationElement";

const CountryDetail = ({country, worldPopulation, worldLandMass}) => {

    //const flagUrl = country.flags.png
    const flagUrl = country.flags.svg
    //const coatOfArmsUrl = country.coatOfArms.png
    const coatOfArmsUrl = country.coatOfArms.svg

    let region = country.region
    if (country.subregion) {
      region = country.subregion
    }
    //TODO - change this so that the language is rendered if one language but languages is rendered if multiple languages
    let languages = ""
    if (country.languages){
      languages = Object.values(country.languages).join(", ")
      console.log("languages:", languages)
    }


    return (
      <article className="country-detail">
        <NameElement country={country}/>
        <div className="flex-box">
          <aside className = "info-box">
            {(country.languages) ? <p>Language(s): {languages}</p> : null}
            <p>Capital city: {country.capital}</p>
            <p>Region: {region}</p>
            <p>Area: {country.area} km<sup>2</sup></p>
            <p>% of world landmass: {(country.area / worldLandMass) * 100 }</p>
            <PopulationElement country={country} worldPopulation={worldPopulation}/>
          </aside>
          <aside className="flag-box">
            <img id="flag" src={flagUrl}/>
            {(coatOfArmsUrl)? <img id="coat-of-arms" src={coatOfArmsUrl}/>: null}
          </aside>
        </div>
      </article>
    )
}
  
export default CountryDetail;