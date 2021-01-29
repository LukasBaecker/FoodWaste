import React, { useState, useEffect } from "react";
import Loading from "./Loading.jsx";
import HHWEMap from "./HHWEMap.jsx";
import LoadCountriesTask from "../tasks/LoadCountriesTask.js";
import LoadFedStatesTask from "../tasks/LoadFedStatesTask.js";
import LoadDistrictsTask from "../tasks/LoadDistrictsTask.js";
import LoadMuensterTask from "../tasks/LoadMuensterTask.js";
const HHWEurope = () => {
    const [countries, setCountries]=useState([]);
    const [fedStates, setFedStates]=useState([]);
    const [districts, setDistricts]=useState([]);
    const [muenster, setMuenster]=useState([]);


    const load = () => {
        const loadCountriesTask=new LoadCountriesTask();
        loadCountriesTask.load(setCountries);
        const loadFedStatesTask=new LoadFedStatesTask();
        loadFedStatesTask.load(setFedStates);
        const loadDistrictsTask=new LoadDistrictsTask();
        loadDistrictsTask.load(setDistricts);
        const loadMuensterTask=new LoadMuensterTask();
        loadMuensterTask.load(setMuenster);
    };

    useEffect(load, []); //page load we tell it that it will track [] componentDidMount

    return (
        <div>
            {countries.length === 0 ? (
            <Loading />
        ):(
            <div>
                <HHWEMap countries={countries} fedStates={fedStates} districts={districts} muenster={muenster}/>
            </div>
        )}
    </div> 
    );
};

 
export default HHWEurope;