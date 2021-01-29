import { features } from "../../data/storymap/fedStates.json";
import legendItemsFS from "../entities/LegendItemsFS";

class LoadFedStatesTask{
    load = (setState) =>{
        this.setState = setState;

        for (let i = 0; i < features.length; i++) {
            const fedState = features[i];
            //console.log(country);
            const HHFedStates = fedState.properties[2019];
            fedState.properties.confirmed = 0;
            fedState.properties.confirmedText = 0;
  
            if (HHFedStates != null) {
              fedState.properties.confirmed = HHFedStates;
              fedState.properties.confirmedText = this.#formatNumberWithCommas(
                HHFedStates
              );
            }
  
            this.#setCountryColor(fedState);
          }
      
          this.setState(features);
        };
      
        #setCountryColor = (mapFedState) => {
          const legendItemFS = legendItemsFS.find((legendItemFS) =>
            legendItemFS.isFor(mapFedState.properties[2019])
          );
      
          if (legendItemFS != null) {
            mapFedState.properties.color = legendItemFS.color;
          }
        };
  
        #formatNumberWithCommas = (number) => {
          return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
    }
    //#processData = (HHFedStates) => {

export default LoadFedStatesTask;