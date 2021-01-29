import { features } from "../../data/storymap/countries.json";
import legendItems from "../entities/LegendItems";

class LoadCountriesTask{
    load = (setState) =>{
        this.setState = setState;

        for (let i = 0; i < features.length; i++) {
            const country = features[i];
            //console.log(country);
            const HHCountries = country.properties[2018];
            country.properties.confirmed = 0;
            country.properties.confirmedText = 0;
  
            if (HHCountries != null) {
              country.properties.confirmed = HHCountries;
              country.properties.confirmedText = this.#formatNumberWithCommas(
                HHCountries
              );
            }
  
            this.#setCountryColor(country);
          }
      
          this.setState(features);
        };
      
        #setCountryColor = (mapCountry) => {
          const legendItem = legendItems.find((legendItem) =>
            legendItem.isFor(mapCountry.properties[2018])
          );
      
          if (legendItem != null) {
              mapCountry.properties.color = legendItem.color;
          }
        };
  
        #formatNumberWithCommas = (number) => {
          return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
    }
    //#processData = (HHCountries) => {

export default LoadCountriesTask;