import { features } from "../../data/storymap/NRWDistricts.json";
import legendItems from "../entities/LegendItemsD";

class LoadDistrictsTask{
    load = (setState) =>{
        this.setState = setState;

        for (let i = 0; i < features.length; i++) {
            const district = features[i];
            //console.log(country);
            const HHDistricts = district.properties.HHWPINH;
            district.properties.confirmed = 0;
            district.properties.confirmedText = 0;
  
            if (HHDistricts != null) {
              district.properties.confirmed = HHDistricts;
              district.properties.confirmedText = this.#formatNumberWithCommas(
                HHDistricts
              );
            }
  
            this.#setCountryColor(district);
          }
      
          this.setState(features);
        };
      
        #setCountryColor = (mapDistrict) => {
          const legendItem = legendItems.find((legendItem) =>
            legendItem.isFor(mapDistrict.properties.HHWPINH)
          );
      
          if (legendItem != null) {
            mapDistrict.properties.color = legendItem.color;
          }
        };
  
        #formatNumberWithCommas = (number) => {
          return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
    }
    //#processData = (HHFedStates) => {

export default LoadDistrictsTask;