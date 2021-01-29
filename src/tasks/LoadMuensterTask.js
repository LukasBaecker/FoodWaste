import { features } from "../../data/storymap/muenster.json";
import legendItems from "../entities/LegendItemsM";

class LoadMuensterTask{
    load = (setState) =>{
        this.setState = setState;

        for (let i = 0; i < features.length; i++) {
            const muenster = features[i];
            //console.log(country);
            const HHMuenster = muenster.properties.HHWINH;
            muenster.properties.confirmed = 0;
            muenster.properties.confirmedText = 0;
  
            if (HHMuenster != null) {
              muenster.properties.confirmed = HHMuenster;
              muenster.properties.confirmedText = this.#formatNumberWithCommas(
                HHMuenster
              );
            }
  
            this.#setCountryColor(muenster);
          }
      
          this.setState(features);
        };
      
        #setCountryColor = (mapMuenster) => {
          const legendItem = legendItems.find((legendItem) =>
            legendItem.isFor(mapMuenster.properties.HHWINH)
          );
      
          if (legendItem != null) {
            mapMuenster.properties.color = legendItem.color;
          }
        };
  
        #formatNumberWithCommas = (number) => {
          return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
    }
    //#processData = (HHMuensters) => {

export default LoadMuensterTask;