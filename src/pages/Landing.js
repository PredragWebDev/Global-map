import React, { useEffect, useState } from "react";
import { StyledLanding, StyledSituation } from "./Landing.styled";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdLegendToggle} from "react-icons/md";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from "axios";
import Card from "../components/Card";
import LegendModal from "../Modal/LegendModal";
import ExitButton from "../components/ExitButton";

function Landingpage() {
  const [countryColors, setCountryColor] = useState([]);
  const [countrySetting, setCountrySetting] = useState({});
  const [isSituation, setIsSituation] = useState(false);
  const [showExitButton, setShowExitButton] = useState(true);
  const [situationNames, setSituationNames] = useState({});
  const [optionNames, setOptionNames] = useState({});

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
  // const countryColors = [
  //   { countryCode: 'US', color: 'Blue' },
  //   { countryCode: 'IR', color: 'Green' },
  //   { countryCode: 'GB', color: 'Blue' }
  // ];

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
    axios.post("http://127.0.0.1:5001/api/user/get_situationNames")
    .then((response) => {
      
      if (response.data.state === "okay") {

        setSituationNames(response.data.situationNames);

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
  const get_OptionNames = (situationName) => {
    axios.post("http://127.0.0.1:5001/api/user/get_OptionNames", {
        situationName
    })
    .then((response) => {
      
      if (response.data.state === "okay") {

        setOptionNames(response.data.optinNames);

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
    axios.post("http://127.0.0.1:5001/api/user/get_filterData", {
        situationName, optionName
    })
    .then((response) => {
      
      if (response.data.state === "okay") {


        console.log("option names>>>", response.data);
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
  useEffect (() => {
    get_situationNames();
    if (situationNames[0].label !== undefined) {
      get_OptionNames(situationNames[0].label);
    }
    if (optionNames[0].label !== undefined) {
      get_CountryColor(situationNames[0].label, optionNames[0].label);
    }
  }, [situationNames, optionNames]);

  return (
    <StyledLanding>
      <div id="map" style={{ width: '100%', height: '100%' }} />
      {/* <MapComponent countryColor = {countryColor}/> */}

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
                      <LegendModal situationNames={situationNames} get_CountryColor={get_CountryColor} get_OptionNames={get_OptionNames} optionNames={optionNames}/>
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
