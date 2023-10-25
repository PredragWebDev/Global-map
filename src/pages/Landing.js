import React, { useEffect, useState } from "react";
import { StyledLanding, StyledSituation } from "./Landing.styled";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdLegendToggle} from "react-icons/md";
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from "axios";
import Card from "../components/Card";
import LegendModal from "../Modal/LegendModal";


function Landingpage() {
  const [countryColor, setCountryColor] = useState([]);
  const [countrySetting, setCountrySetting] = useState({});
  const [isSituation, setIsSituation] = useState(false);
  const [showExitButton, setShowExitButton] = useState(true);
  const [situationNames, setSituationNames] = useState([]);
  const [optionNames, setOptionNames] = useState([]);

  let countryStance = [];
  const [stance, setStance] = useState ([
    {
      title:'this is my first title',
      content:"this is my first content"
    },
    {
      title:'this is my second title',
      content:"this is my second content"
    }
  ])
  let countryColors = [
    { countryCode: 'US', color: 'Blue' },
    { countryCode: 'IR', color: 'Green' },
    { countryCode: 'GB', color: 'Blue' }
  ];

  const handleSituation = (countryCode) => {

    const selectedCountry = countryStance.find(item => {

      if (item !== null) {

        if (item.countryCode === countryCode) {
          return item;
        }
      }
    });

    console.log("selected country>>>", selectedCountry);

    if (selectedCountry !== undefined) {

      const temp = selectedCountry.stance;

      const keys = Object.keys(temp);
  
      setStance(
        keys.map(key => {
          if (key !== "countryCode") {
            const title = key;
            console.log("title>>>.", title);
            const content = temp[key];
            console.log("content>>>>>", content);
            return {
              title:title,
              content:content
            }
          }
        })
      )
      setIsSituation(true);
    } else {
      setIsSituation(false);
    }

  }
  const get_situationNames = () => {
    axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}api/user/get_situationNames`)
    .then((response) => {
      
      if (response.data.state === "okay") {

        setSituationNames(response.data.situationNames);

        console.log("situation names>>>", response.data.situationNames);
        // setOptionsNames(response.data.options);        
      }
      else {
        alert("Faild!");
      }
      console.log(response.data);
      
    }).catch((error) => {
      if (error.response) {
          alert(error);
          console.log("error~~~~~~~~~")
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
    })
  }
  const get_OptionNames = (situationName) => {
    axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}api/user/get_OptionNames`, {
        situationName
    })
    .then((response) => {
      
      if (response.data.state === "okay") {

        setOptionNames(response.data.optionNames);

        console.log("option names>>>", response.data.situationNames);
        // setOptionsNames(response.data.options);        
      }
      else {
        alert("Faild!");
      }
      console.log(response.data);
      
    }).catch((error) => {
      if (error.response) {
          alert(error);
          console.log("error~~~~~~~~~")
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
    })
}
  const get_CountryColor = (situationName, optionName) => {
    axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}api/user/get_filterData`, {
      situationName, optionName
    })
    .then((response) => {
      
      if (response.data.state === "okay") {
        
        
        console.log("get color?", response.data.countryOptions);
        countryColors = response.data.countryOptions.map(option => {
          if ('option' in option) {
            const color = option.option === "Neutral" ? "grey" : (option.option === "YES" ? "green" : (option.option === "NO" ? "blue" : (option.option === "LIGHT" ? "green" : (option.option === "DARK" ? "blue" : option.option))));
    
            return {
              countryCode:option.countryCode,
              color:color
            }
          } else {
            return {
              countryCode:option.countryCode,
              color:"#FFFFFF"
            }
          }
        });
        // setCountryColor(temp_countryColors);        

        console.log("country colors>>>", countryColors);

        draw_map();

      }
      else {
        alert("Faild!");
      }
      // console.log(response.data);
      
    }).catch((error) => {
      if (error.response) {
          alert(error);
          console.log("error~~~~~~~~~")
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
    })
}

const draw_map = () => {
  
  // mapboxgl.accessToken = process.env.VITE_MAPBOX_TOKEN;
  mapboxgl.accessToken = "pk.eyJ1IjoiZGFubnlkaTEyIiwiYSI6ImNsbGVnejM4NDBnbmIzZ25nZTRvaTlmajEifQ.fp0Kus3cRBjo3TCGd0GF-w";
  
  const map = new mapboxgl.Map({
    container: 'map', // HTML element ID where the map will be rendered
    style: 'mapbox://styles/mapbox/light-v10',
    center: [0, 0], // Initial map center coordinates
    zoom: 1, // Initial map zoom level
  });
  
  // Add countries layer to the map
  map.on('load', () => {
    map.addSource('countries', {
      type: 'vector',
      url: 'mapbox://mapbox.country-boundaries-v1',
    });
    
    map.addLayer(
      {
        id: 'countries-layer',
        type: 'fill',
        source: 'countries',
        'source-layer': 'country_boundaries',

          paint: {
              'fill-color': [
              'match',
              ['get', 'iso_3166_1'],
              ...countryColors.flatMap(country => [country.countryCode, country.color]),
              // 'US', 'green',
              '#FFFFFF' // Default color for other countries
              ],
              'fill-outline-color': "#000000"
          },
      },
      'waterway-label' // Place the layer below waterway labels for better visibility
    );

  });

  map.on('click', 'countries-layer', function(e) {
      var countryName = e.features[0].properties.iso_3166_1; // Get the name property of the clicked feature
      handleSituation(countryName); // Display an alert with the country name
      // console.log(countryName);
  });

  // Clean up resources on unmount
  return () => {
    map.remove();
  };
}
useEffect (() => {
  get_situationNames();
  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}api/user/get_initialColor`)
  .then((response) => {

    // countryColors = response.data.countryColor;
    countryColors = response.data.countryOptions.map(option => {
      console.log("dfsdfs>>", option);
      if ('option' in option) {
        const color = option.option === "Neutral" ? "grey" : (option.option === "YES" ? "green" : (option.option === "NO" ? "blue" : (option.option === "LIGHT" ? "green" : (option.option === "DARK" ? "blue" : option.option))));

        console.log("color>>>>", color);
        return {
          countryCode:option.countryCode,
          color:color
        }
      } else {
        return {
          countryCode:option.countryCode,
          color:"#FFFFFF"
        }
      }
    });

    console.log("colors>>>", countryColors);
    // setCountryColor(temp_countryColors);

    // console.log("country color>>>>", temp_countryColors);

    // setCountrySetting(response.data.situation);

    // countryStance = response.data.stance;

    draw_map();

  }).catch((error) => {
    if (error.response) {
        alert(error);
        console.log("error~~~~~~~~~")
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
  });

}, []);

  return (
    <StyledLanding>
      <div id="map" style={{ width: '100%', height: '100%' }} />
      {/* <MapComponent countryColors = {countryColors}/> */}

      {isSituation && (
        <StyledSituation>
          <div id="border">
            {stance.map((situation, index) => {
              if (situation !== undefined)
              return <Card id={index} title={situation.title} content={situation.content} setShowExitButton={setShowExitButton}/>
            })}

            {/* <ExitButton setIsSituation={setIsSituation}/> */}
            {showExitButton && <AiFillCloseCircle className="exitbutton" style={{width:"40px", height:"40px", cursor:"pointer"}} onClick={() => setIsSituation(false)}/>}
            {/* <button onClick={() => setIsSituation(false)}>exit</button> */}
          </div>
        </StyledSituation>
      )}

      <div id="legend">
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
              <div>
                  <MdLegendToggle style={{width:"50px", height:"50px", cursor:"pointer", color:"red"}} {...bindTrigger(popupState)}/>
                  <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                      }}
                      // transformOrigin={{
                      // vertical: 'bottom',
                      // horizontal: 'left',
                      // }}
                  >
                      <LegendModal situationNames={situationNames} get_CountryColor={get_CountryColor} get_OptionNames={get_OptionNames} optionNames={optionNames} closeFilterModal={popupState.close}/>
                  </Popover>
              </div>
              
          )}
          </PopupState>
      </div>
      
      {/* <div id="map" style={{ width: '100%', height: '800px' }} />; */}
    </StyledLanding>
  );
}

export default Landingpage;
