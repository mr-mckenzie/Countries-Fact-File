//import './CountryDetail.css';

const CountryDetail = ({country, worldPopulation}) => {

    const url = country.flags.png

    return (
      <div className="country-detail">
        The capital of {country.name.common} is {country.capital}.
        The population is {country.population}.

        The world population is {worldPopulation}.
≈
        <img src={url}/>
      </div>
    )
}
  
export default CountryDetail;