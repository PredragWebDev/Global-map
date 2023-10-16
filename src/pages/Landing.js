import React from "react";
import { StyledLanding } from "./Landing.styled";
import { useState } from "react";
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import Drawer from "../Drawer/Drawer";
import MapComponent from "./mapcomponents";

function Landingpage() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
  });

  return (
    <StyledLanding>
      <h1>world map</h1>
      <MapComponent/>
      {/* <Map
        mapboxAccessToken={process.env.VITE_MAPBOX_TOKEN}
        mapLib={import("mapbox-gl")}
        initialViewState={{
          // lahaina location
          longitude: -156.64771868530957,
          latitude: 20.913646483159667,
          zoom: 11.5,
        }}
        maxBounds={[
          [-156.9752737894423, 20.672864436517315],
          [-156.22767799535026, 21.174269005265103],
        ]}
        // pitch={65}
        // onClick={(e) => console.log(e)}
        // onDrag={(e) => console.log(e)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      /> */}

    </StyledLanding>
  );
}

export default Landingpage;
