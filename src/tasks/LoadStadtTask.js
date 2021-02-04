import { features } from "../../data/storymap/stadt.json";
import legendItems from "../entities/LegendItemsS";

class LoadStadtTask{
    load = (setState) =>{
        this.setState = setState;

        for (let i = 0; i < features.length; i++) {
            const stadt = features[i];
            //console.log(country);
            const HHStadt = stadt.properties.["HH WASTE"];
            stadt.properties.confirmed = 0;
            stadt.properties.confirmedText = 0;
  
            if (HHStadt != null) {
              stadt.properties.confirmed = HHStadt;
              stadt.properties.confirmedText = this.#formatNumberWithCommas(
                HHStadt
              );
            }
  
            this.#setCountryColor(stadt);
          }
      
          this.setState(features);
        };
      
        #setCountryColor = (mapStadt) => {
          const legendItem = legendItems.find((legendItem) =>
            legendItem.isFor(mapStadt.properties.["HH WASTE"])
          );
      
          if (legendItem != null) {
            mapStadt.properties.color = legendItem.color;
          }
        };
  
        #formatNumberWithCommas = (number) => {
          return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
    }
    //#processData = (HHMuensters) => {

export default LoadStadtTask;