import { features } from "../../data/storymap/stadt.json";
import legendItems from "../entities/LegendItemsS";

class LoadStadtTask{
    load = (setState) =>{
        this.setState = setState;

        for (let i = 0; i < features.length; i++) {
            const muenster = features[i];
            //console.log(country);
            const HHMuenster = muenster.properties.["HH WASTE"];
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
            legendItem.isFor(mapMuenster.properties.TOTAL_WAST)
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

export default LoadStadtTask;