import React, { useEffect, useState } from "react";
import { StyledLanding, StyledSituation } from "./Landing.styled";
import { AiFillCloseCircle } from "react-icons/ai";
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from "axios";
import Card from "../components/Card";
import LegendModal from "../Modal/LegendModal";
import {FaFilter} from "react-icons/fa";
import './index.css';

function Landingpage() {
  const [isSituation, setIsSituation] = useState(false);
  const [showExitButton, setShowExitButton] = useState(true);
  const [situationNames, setSituationNames] = useState([]);
  const [optionNames, setOptionNames] = useState([]);
  const [selectedSituation, setSelectedSituation] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  let situationForFeed = "";
  let optionForFeed = "";

  const [feed, setFeed] = useState ([]);

  let countryColors = [
    { countryCode: 'US', color: 'Blue' },
    { countryCode: 'IR', color: 'Green' },
    { countryCode: 'GB', color: 'Blue' }
  ];

  const handle_click_country_on_map = (countryCode) => {
    console.log(selectedOption);
    console.log(selectedSituation);
    get_feed(countryCode);
    setIsSituation(true);

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
  const get_CountryColor = () => {
    axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}api/user/get_filterData`, {
      situationName:selectedSituation, optionName:selectedOption
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
  
  mapboxgl.accessToken = process.env.REACT_APP_VITE_MAPBOX_TOKEN;
  
  const map = new mapboxgl.Map({
    container: 'map', // HTML element ID where the map will be rendered
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-95.7129, 37.0902], // Initial map center coordinates
    maxZoom:10,
    minZoom:0.5,
    pitchWithRotate:true,
    touchZoomRotate:false,
    dragRotate:false
  });

  var mapBounds = [
    [-300, -80], 
    [260, 85.1164] 
  ];

  map.setMaxBounds(mapBounds);

  map.on('load', () => {
    map.addSource('countries', {
      type: 'vector',
      url: 'mapbox://mapbox.country-boundaries-v1',
    });
    map.addLayer(
      {
        id: 'countries-layer',
        type: 'fill',
        source: "countries",
        'source-layer': 'country_boundaries',
        paint: {
          'fill-color': [
            'match',
            ['get', 'iso_3166_1'],
            ...countryColors.flatMap(country => [country.countryCode, country.color]),
            '#FAF9F4' // Default color for other countries
          ],
          'fill-outline-color': "#D1D1D1",
          
        },
      },
    );
    map.addLayer(
      {
        id: 'water-point-labels',
        type: 'symbol',
        source: 'composite',
        'source-layer': 'place_label',
        filter: ['all', ['==', ['get', 'class'], 'water'], ['>=', ['zoom'], 3]],
        layout: {
          'text-field': ['get', 'name_en'],
          'text-font': ['Open Sans Semibold'],
          'text-size': 14,
          'text-ignore-placement': true
        },
        paint: {
          'text-color': '#72625C' // Set the color of water point names
        }
      },
      
    );
    
  });

  map.on('style.load', () => {
    const labelLayers = map.getStyle().layers.filter(layer => layer.type === 'symbol');

    console.log("layers>>>>", labelLayers);

    labelLayers.forEach(layer => {
      if (layer.id !== "water-point-label" && layer.id !== "waterway-label" && layer.id !== "water-line-label") {
      // if (layer.id === "country-label") {
        map.removeLayer(layer.id);
      }
    });

  });
  
  map.on('zoom', () => {
    const curZoom = map.getZoom();
    if (curZoom > 2.5) {
      if (!map.getLayer("country-labels")) {
        console.log("add layer");
        map.addLayer({
          id: 'country-labels',
          type: 'symbol',
          source: "composite",
          'source-layer': "place_label",
          filter: ['==', ['get', 'class'], 'country'],
          layout: {
            'text-field': ['get', 'name_en'],
            'text-font': ['Open Sans Semibold'],
            'text-size': 14
          },
          paint: {
            'text-color': '#72625C' // Set the color of country names
          }
        },
        
        );

      }
    } else {
      if (map.getLayer("country-labels")) {
        map.removeLayer("country-labels");
      }
    }
  });

  // map.on('click', 'countries-layer', function(e) {
  //     var countryName = e.features[0].properties.iso_3166_1; // Get the name property of the clicked feature
  //     handle_click_country_on_map(countryName); // Display an alert with the country name
  // });

  // Clean up resources on unmount
  return () => {
    map.remove();
  };
}

const get_feed = (countryCode) => {
  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}api/user/get_feeds`, {
    countryCode, situationName:situationForFeed, optionName:optionForFeed
  })
  .then((response) => {
    if (response.data.state === "okay") {

      setFeed(response.data.feed);
      console.log("feed>>>>", response.data.feed);
    } else {
      console.log("getting geed is faild!");
    }
  })
  .catch((error) => {
    console.log("on getting feed, error is occured:", error);
  })
}
useEffect (() => {
  get_situationNames();
  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}api/user/get_initialColor`)
  .then((response) => {

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

    setSelectedOption(response.data.selectedOption);
    optionForFeed = response.data.selectedOption;
    setSelectedSituation(response.data.selectedSituation);
    situationForFeed = response.data.selectedSituation;
    get_OptionNames(response.data.selectedSituation);

    console.log("colors>>>", countryColors);

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
            {feed.map((item, index) => {
              if (item !== undefined)
              return <Card id={index} title={item.headline} content={item.summary} link={item.link} setShowExitButton={setShowExitButton}/>
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
                  <FaFilter className="filter" {...bindTrigger(popupState)}/>
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
                      <LegendModal situationNames={situationNames} get_CountryColor={get_CountryColor} selectedOption={selectedOption} selectedSituation={selectedSituation} setSelectedOption={setSelectedOption} setSelectedSituation={setSelectedSituation} get_OptionNames={get_OptionNames} optionNames={optionNames} closeFilterModal={popupState.close}/>
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
